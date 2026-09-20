const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const pct = new Intl.NumberFormat('pt-BR', { style: 'percent', maximumFractionDigits: 1 });

let data = null;

const EMBEDDED_DATA = {"privacy": "Sem nomes completos de pessoas e sem nome de empresa.", "resumo": {"mes": "2026-08", "mesLabel": "Agosto 2026", "saldoInicial": 5979.19, "saldoFinal": 6512.86, "rendimentoConta": 0.36, "totalEntradas": 7932.15, "totalSaidas": 5648.84, "aplicadoRDB": 1750.0, "tudoQueSaiu": 7398.84, "entradasMenosConsumo": 2283.31, "resultadoContaAposRDB": 533.31, "saidasPorCategoria": [{"categoria": "Aluguel", "valor": 500.0}, {"categoria": "FIAP", "valor": 1305.0}, {"categoria": "Energia (Enel)", "valor": 123.39}, {"categoria": "Internet/Celular (Claro)", "valor": 101.92}, {"categoria": "Água (BRK)", "valor": 86.11}, {"categoria": "Fatura do cartão", "valor": 729.56}, {"categoria": "Alimentação", "valor": 697.53}, {"categoria": "Lazer", "valor": 239.9}, {"categoria": "Combustível", "valor": 75.0}, {"categoria": "Pet", "valor": 82.99}, {"categoria": "Farmácia", "valor": 43.95}, {"categoria": "Manutenção moto", "valor": 1040.99}, {"categoria": "Compras", "valor": 171.7}, {"categoria": "Pix enviado", "valor": 430.9}, {"categoria": "Outros", "valor": 19.9}, {"categoria": "RDB / investimento", "valor": 1750.0}], "entradasPorTipo": [{"tipo": "Salário", "valor": 7842.15}, {"tipo": "Pix recebido", "valor": 90.0}]}, "movimentacoes": [{"tipo": "Entrada", "data": "2026-08-14", "descricao": "Adiantamento salarial", "categoria": "Salário", "valor": 1785.52, "observacao": "Open Banking"}, {"tipo": "Entrada", "data": "2026-08-19", "descricao": "Pix recebido", "categoria": "Pix recebido", "valor": 90.0, "observacao": ""}, {"tipo": "Entrada", "data": "2026-08-31", "descricao": "Pagamento salarial", "categoria": "Salário", "valor": 6056.63, "observacao": "Open Banking"}, {"tipo": "Saída", "data": "2026-08-01", "descricao": "Padaria", "categoria": "Alimentação", "valor": 10.0, "observacao": "Padaria"}, {"tipo": "Saída", "data": "2026-08-01", "descricao": "JF Empório do Real", "categoria": "Alimentação", "valor": 25.5, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-02", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 34.1, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "FIAP", "categoria": "FIAP", "valor": 1305.0, "observacao": "Boleto"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "Aluguel", "categoria": "Aluguel", "valor": 500.0, "observacao": "Aluguel da casa"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "99 App", "categoria": "Alimentação", "valor": 5.3, "observacao": "DL*99"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "E-Sapiens", "categoria": "Pix enviado", "valor": 15.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "iFood — lanches", "categoria": "Alimentação", "valor": 48.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-04", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 9.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 24.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Compras", "categoria": "Compras", "valor": 171.7, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 51.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-06", "descricao": "99 App", "categoria": "Alimentação", "valor": 5.3, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-06", "descricao": "99 App", "categoria": "Alimentação", "valor": 5.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-07", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 17.18, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "99 App", "categoria": "Alimentação", "valor": 8.7, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "Manutenção da moto", "categoria": "Manutenção moto", "valor": 1040.99, "observacao": "Guidão, kit relação, pneu, pinças"}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 12.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Claro", "categoria": "Internet/Celular (Claro)", "valor": 101.92, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Energia (Enel)", "categoria": "Energia (Enel)", "valor": 123.39, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 16.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-11", "descricao": "JD Distribuído", "categoria": "Alimentação", "valor": 37.46, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-12", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 14.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-12", "descricao": "Fatura Nubank", "categoria": "Fatura do cartão", "valor": 729.56, "observacao": ""}, {"tipo": "Aplicação RDB", "data": "2026-08-13", "descricao": "Aplicação RDB", "categoria": "RDB / investimento", "valor": 1000.0, "observacao": "Caixinha"}, {"tipo": "Saída", "data": "2026-08-13", "descricao": "Combustível", "categoria": "Combustível", "valor": 75.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "JF Empório do Real", "categoria": "Alimentação", "valor": 16.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "P Mauá", "categoria": "Alimentação", "valor": 86.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "JD Distribuído", "categoria": "Alimentação", "valor": 10.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 10.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-16", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 100.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-16", "descricao": "Italifarma Parque", "categoria": "Farmácia", "valor": 43.95, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-17", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 17.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-17", "descricao": "Miamor Mauá", "categoria": "Alimentação", "valor": 9.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-18", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 8.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-19", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 18.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 9.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "Água (BRK)", "categoria": "Água (BRK)", "valor": 86.11, "observacao": ""}, {"tipo": "Aplicação RDB", "data": "2026-08-21", "descricao": "Aplicação RDB", "categoria": "RDB / investimento", "valor": 750.0, "observacao": "Caixinha"}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "E-Sapiens", "categoria": "Pix enviado", "valor": 89.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-22", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 14.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Débito em conta", "categoria": "Outros", "valor": 19.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 26.4, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Super Lourencini", "categoria": "Alimentação", "valor": 75.33, "observacao": "Mercado"}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "Lazer", "categoria": "Lazer", "valor": 51.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "JF Empório do Real", "categoria": "Alimentação", "valor": 28.5, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 12.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-29", "descricao": "Espetaria Lorena", "categoria": "Alimentação", "valor": 89.98, "observacao": "Restaurante"}, {"tipo": "Saída", "data": "2026-08-29", "descricao": "Zigpay", "categoria": "Lazer", "valor": 188.0, "observacao": "Bar"}, {"tipo": "Saída", "data": "2026-08-30", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 4.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-30", "descricao": "Agropet Papaleguas", "categoria": "Pet", "valor": 82.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-31", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 160.0, "observacao": ""}], "holerite": {"titulo": "Holerite — agosto 2026", "nota": "Bruto do mês com horas extras; não é o salário comum.", "bruto": 11138.43, "descontos": 3296.28, "liquido": 7842.15, "ganhos": [{"descricao": "Salário base", "valor": 4734.34}, {"descricao": "DSR", "valor": 910.52}, {"descricao": "Adicional de periculosidade 30%", "valor": 2351.2}, {"descricao": "Horas extras 100%", "valor": 1976.47}, {"descricao": "Horas extras 50%", "valor": 115.46}, {"descricao": "Domingo trabalhado 90%", "valor": 490.96}, {"descricao": "DSR sobre HE 100%", "valor": 329.41}, {"descricao": "DSR sobre domingo 90%", "valor": 81.83}, {"descricao": "Adicional noturno + DSRs noturnos", "valor": 81.45}, {"descricao": "Outros (HE reduzida, DSR HE 50%)", "valor": 66.79}], "descontosLista": [{"descricao": "IR retido na fonte", "valor": 1879.89}, {"descricao": "INSS", "valor": 988.07}, {"descricao": "Plano de saúde SulAmérica", "valor": 206.9}, {"descricao": "Refeições", "valor": 77.14}, {"descricao": "Contribuição assistencial", "valor": 54.63}, {"descricao": "Odontoprev", "valor": 40.56}, {"descricao": "Ticket alimentação", "valor": 39.16}, {"descricao": "Atrasos", "valor": 9.93}], "entradaConta": [{"descricao": "Adiantamento salarial", "valor": 1785.52}, {"descricao": "Pagamento salarial", "valor": 6056.63}]}, "categorias": ["Salário", "Pix recebido", "Aluguel", "FIAP", "Energia (Enel)", "Internet/Celular (Claro)", "Água (BRK)", "Fatura do cartão", "Alimentação", "Lazer", "Combustível", "Pet", "Farmácia", "Manutenção moto", "Compras", "Pix enviado", "Outros", "RDB / investimento"]};

async function loadData() {
  try {
    if (location.protocol === 'file:') {
      data = EMBEDDED_DATA;
    } else {
      const res = await fetch('data/fluxo-agosto-2026.json');
      data = res.ok ? await res.json() : EMBEDDED_DATA;
    }
  } catch (err) {
    data = EMBEDDED_DATA;
  }
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
  console.error(err);
  document.body.insertAdjacentHTML('afterbegin', `<p style="color:#f87171;padding:1rem">Erro ao carregar dados: ${err.message}</p>`);
});
