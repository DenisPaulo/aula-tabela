const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const pct = new Intl.NumberFormat('pt-BR', { style: 'percent', maximumFractionDigits: 1 });

let data = null;

async function loadData() {
  const res = await fetch('data/fluxo-agosto-2026.json');
  data = await res.json();
  renderResumo();
  setupFilters();
  renderMovs();
  renderHolerite();
}

function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = {
    resumo: document.getElementById('panel-resumo'),
    movs: document.getElementById('panel-movs'),
    holerite: document.getElementById('panel-holerite'),
    moda: document.getElementById('panel-moda'),
    casa: document.getElementById('panel-casa'),
  };
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      Object.entries(panels).forEach(([key, panel]) => {
        const on = key === id;
        panel.classList.toggle('is-active', on);
        panel.hidden = !on;
      });
    });
  });
}

function renderResumo() {
  const r = data.resumo;
  const cards = [
    ['Mês', r.mesLabel],
    ['Saldo inicial', money.format(r.saldoInicial)],
    ['Saldo final', money.format(r.saldoFinal)],
    ['Total entradas', money.format(r.totalEntradas)],
    ['Saídas (consumo)', money.format(r.totalSaidas)],
    ['Aplicado no RDB', money.format(r.aplicadoRDB)],
    ['Entradas − consumo', money.format(r.entradasMenosConsumo)],
    ['Resultado após RDB', money.format(r.resultadoContaAposRDB)],
  ];
  document.getElementById('resumoCards').innerHTML = cards.map(([label, value]) => `
    <article class="stat">
      <span class="stat-label">${label}</span>
      <strong>${value}</strong>
    </article>
  `).join('');

  const totalSaiu = r.tudoQueSaiu || r.saidasPorCategoria.reduce((s, c) => s + c.valor, 0);
  document.querySelector('#catTable tbody').innerHTML = r.saidasPorCategoria.map((c) => `
    <tr>
      <td>${c.categoria}</td>
      <td>${money.format(c.valor)}</td>
      <td>${pct.format(totalSaiu ? c.valor / totalSaiu : 0)}</td>
    </tr>
  `).join('');

  document.querySelector('#entTable tbody').innerHTML = r.entradasPorTipo.map((e) => `
    <tr><td>${e.tipo}</td><td>${money.format(e.valor)}</td></tr>
  `).join('');
}

function setupFilters() {
  const cats = [...new Set(data.movimentacoes.map((m) => m.categoria))].sort();
  const sel = document.getElementById('filterCat');
  cats.forEach((c) => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
  document.getElementById('filterTipo').addEventListener('change', renderMovs);
  document.getElementById('filterCat').addEventListener('change', renderMovs);
  document.getElementById('btnExport').addEventListener('click', exportCsv);
}

function filteredMovs() {
  const tipo = document.getElementById('filterTipo').value;
  const cat = document.getElementById('filterCat').value;
  return data.movimentacoes.filter((m) => {
    if (tipo !== 'todos' && m.tipo !== tipo) return false;
    if (cat !== 'todas' && m.categoria !== cat) return false;
    return true;
  });
}

function tipoClass(tipo) {
  if (tipo === 'Entrada') return 'tipo-entrada';
  if (tipo === 'Aplicação RDB') return 'tipo-rdb';
  return 'tipo-saida';
}

function renderMovs() {
  const rows = filteredMovs();
  document.querySelector('#movTable tbody').innerHTML = rows.map((m) => `
    <tr>
      <td><span class="badge-tipo ${tipoClass(m.tipo)}">${m.tipo}</span></td>
      <td>${m.data.split('-').reverse().join('/')}</td>
      <td>${m.descricao}</td>
      <td>${m.categoria}</td>
      <td>${money.format(m.valor)}</td>
      <td>${m.observacao || '—'}</td>
    </tr>
  `).join('');
  document.getElementById('movCount').textContent = `${rows.length} movimentação(ões)`;
}

function renderHolerite() {
  const h = data.holerite;
  document.getElementById('holeriteCard').innerHTML = `
    <h2>${h.titulo}</h2>
    <p class="hint">${h.nota}</p>
    <div class="summary" style="margin:1rem 0">
      <article class="stat"><span class="stat-label">Bruto</span><strong>${money.format(h.bruto)}</strong></article>
      <article class="stat"><span class="stat-label">Descontos</span><strong>${money.format(h.descontos)}</strong></article>
      <article class="stat"><span class="stat-label">Líquido</span><strong>${money.format(h.liquido)}</strong></article>
    </div>
    <div class="grid-2">
      <div>
        <h3>Ganhos</h3>
        <table class="data-table"><thead><tr><th>Descrição</th><th>Valor</th></tr></thead>
        <tbody>${h.ganhos.map((g) => `<tr><td>${g.descricao}</td><td>${money.format(g.valor)}</td></tr>`).join('')}</tbody></table>
      </div>
      <div>
        <h3>Descontos</h3>
        <table class="data-table"><thead><tr><th>Descrição</th><th>Valor</th></tr></thead>
        <tbody>${h.descontosLista.map((g) => `<tr><td>${g.descricao}</td><td>${money.format(g.valor)}</td></tr>`).join('')}</tbody></table>
      </div>
    </div>
  `;
}

function exportCsv() {
  const rows = filteredMovs();
  const lines = [['Tipo','Data','Descricao','Categoria','Valor','Observacao'].join(';')];
  rows.forEach((m) => {
    lines.push([
      m.tipo,
      m.data,
      `"${(m.descricao || '').replaceAll('"','""')}"`,
      m.categoria,
      m.valor.toFixed(2).replace('.', ','),
      `"${(m.observacao || '').replaceAll('"','""')}"`,
    ].join(';'));
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `fluxo-${data.resumo.mes}.csv`;
  a.click();
}

setupTabs();
loadData().catch((err) => {
  document.body.insertAdjacentHTML('afterbegin', `<p style="color:#f87171;padding:1rem">Erro ao carregar dados: ${err.message}. Abra via Pages ou um servidor local (fetch não roda em file://).</p>`);
});
