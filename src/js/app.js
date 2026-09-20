const STORAGE_KEY = 'fluxo-caixa-edit-v1';
const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const pctFmt = new Intl.NumberFormat('pt-BR', { style: 'percent', maximumFractionDigits: 1 });

const EMBEDDED_DATA = {"privacy": "Sem nomes completos de pessoas e sem nome de empresa.", "resumo": {"mes": "2026-08", "mesLabel": "Agosto 2026", "saldoInicial": 5979.19, "saldoFinal": 6512.86, "rendimentoConta": 0.36, "totalEntradas": 7932.15, "totalSaidas": 5648.84, "aplicadoRDB": 1750.0, "tudoQueSaiu": 7398.84, "entradasMenosConsumo": 2283.31, "resultadoContaAposRDB": 533.31, "saidasPorCategoria": [{"categoria": "Aluguel", "valor": 500.0}, {"categoria": "FIAP", "valor": 1305.0}, {"categoria": "Energia (Enel)", "valor": 123.39}, {"categoria": "Internet/Celular (Claro)", "valor": 101.92}, {"categoria": "Água (BRK)", "valor": 86.11}, {"categoria": "Fatura do cartão", "valor": 729.56}, {"categoria": "Alimentação", "valor": 697.53}, {"categoria": "Lazer", "valor": 239.9}, {"categoria": "Combustível", "valor": 75.0}, {"categoria": "Pet", "valor": 82.99}, {"categoria": "Farmácia", "valor": 43.95}, {"categoria": "Manutenção moto", "valor": 1040.99}, {"categoria": "Compras", "valor": 171.7}, {"categoria": "Pix enviado", "valor": 430.9}, {"categoria": "Outros", "valor": 19.9}, {"categoria": "RDB / investimento", "valor": 1750.0}], "entradasPorTipo": [{"tipo": "Salário", "valor": 7842.15}, {"tipo": "Pix recebido", "valor": 90.0}]}, "movimentacoes": [{"tipo": "Entrada", "data": "2026-08-14", "descricao": "Adiantamento salarial", "categoria": "Salário", "valor": 1785.52, "observacao": "Open Banking"}, {"tipo": "Entrada", "data": "2026-08-19", "descricao": "Pix recebido", "categoria": "Pix recebido", "valor": 90.0, "observacao": ""}, {"tipo": "Entrada", "data": "2026-08-31", "descricao": "Pagamento salarial", "categoria": "Salário", "valor": 6056.63, "observacao": "Open Banking"}, {"tipo": "Saída", "data": "2026-08-01", "descricao": "Padaria", "categoria": "Alimentação", "valor": 10.0, "observacao": "Padaria"}, {"tipo": "Saída", "data": "2026-08-01", "descricao": "JF Empório do Real", "categoria": "Alimentação", "valor": 25.5, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-02", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 34.1, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "FIAP", "categoria": "FIAP", "valor": 1305.0, "observacao": "Boleto"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "Aluguel", "categoria": "Aluguel", "valor": 500.0, "observacao": "Aluguel da casa"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "99 App", "categoria": "Alimentação", "valor": 5.3, "observacao": "DL*99"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "E-Sapiens", "categoria": "Pix enviado", "valor": 15.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "iFood — lanches", "categoria": "Alimentação", "valor": 48.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-04", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 9.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 24.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Compras", "categoria": "Compras", "valor": 171.7, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 51.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-06", "descricao": "99 App", "categoria": "Alimentação", "valor": 5.3, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-06", "descricao": "99 App", "categoria": "Alimentação", "valor": 5.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-07", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 17.18, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "99 App", "categoria": "Alimentação", "valor": 8.7, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "Manutenção da moto", "categoria": "Manutenção moto", "valor": 1040.99, "observacao": "Guidão, kit relação, pneu, pinças"}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 12.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Claro", "categoria": "Internet/Celular (Claro)", "valor": 101.92, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Energia (Enel)", "categoria": "Energia (Enel)", "valor": 123.39, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 16.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-11", "descricao": "JD Distribuído", "categoria": "Alimentação", "valor": 37.46, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-12", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 14.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-12", "descricao": "Fatura Nubank", "categoria": "Fatura do cartão", "valor": 729.56, "observacao": ""}, {"tipo": "Aplicação RDB", "data": "2026-08-13", "descricao": "Aplicação RDB", "categoria": "RDB / investimento", "valor": 1000.0, "observacao": "Caixinha"}, {"tipo": "Saída", "data": "2026-08-13", "descricao": "Combustível", "categoria": "Combustível", "valor": 75.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "JF Empório do Real", "categoria": "Alimentação", "valor": 16.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "P Mauá", "categoria": "Alimentação", "valor": 86.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "JD Distribuído", "categoria": "Alimentação", "valor": 10.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 10.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-16", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 100.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-16", "descricao": "Italifarma Parque", "categoria": "Farmácia", "valor": 43.95, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-17", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 17.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-17", "descricao": "Miamor Mauá", "categoria": "Alimentação", "valor": 9.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-18", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 8.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-19", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 18.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 9.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "Água (BRK)", "categoria": "Água (BRK)", "valor": 86.11, "observacao": ""}, {"tipo": "Aplicação RDB", "data": "2026-08-21", "descricao": "Aplicação RDB", "categoria": "RDB / investimento", "valor": 750.0, "observacao": "Caixinha"}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "E-Sapiens", "categoria": "Pix enviado", "valor": 89.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-22", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 14.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Débito em conta", "categoria": "Outros", "valor": 19.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Padaria Assis", "categoria": "Alimentação", "valor": 26.4, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Super Lourencini", "categoria": "Alimentação", "valor": 75.33, "observacao": "Mercado"}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "Lazer", "categoria": "Lazer", "valor": 51.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "JF Empório do Real", "categoria": "Alimentação", "valor": 28.5, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 12.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-29", "descricao": "Espetaria Lorena", "categoria": "Alimentação", "valor": 89.98, "observacao": "Restaurante"}, {"tipo": "Saída", "data": "2026-08-29", "descricao": "Zigpay", "categoria": "Lazer", "valor": 188.0, "observacao": "Bar"}, {"tipo": "Saída", "data": "2026-08-30", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 4.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-30", "descricao": "Agropet Papaleguas", "categoria": "Pet", "valor": 82.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-31", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 160.0, "observacao": ""}], "holerite": {"titulo": "Holerite — agosto 2026", "nota": "Bruto do mês com horas extras; não é o salário comum.", "bruto": 11138.43, "descontos": 3296.28, "liquido": 7842.15, "ganhos": [{"descricao": "Salário base", "valor": 4734.34}, {"descricao": "DSR", "valor": 910.52}, {"descricao": "Adicional de periculosidade 30%", "valor": 2351.2}, {"descricao": "Horas extras 100%", "valor": 1976.47}, {"descricao": "Horas extras 50%", "valor": 115.46}, {"descricao": "Domingo trabalhado 90%", "valor": 490.96}, {"descricao": "DSR sobre HE 100%", "valor": 329.41}, {"descricao": "DSR sobre domingo 90%", "valor": 81.83}, {"descricao": "Adicional noturno + DSRs noturnos", "valor": 81.45}, {"descricao": "Outros (HE reduzida, DSR HE 50%)", "valor": 66.79}], "descontosLista": [{"descricao": "IR retido na fonte", "valor": 1879.89}, {"descricao": "INSS", "valor": 988.07}, {"descricao": "Plano de saúde SulAmérica", "valor": 206.9}, {"descricao": "Refeições", "valor": 77.14}, {"descricao": "Contribuição assistencial", "valor": 54.63}, {"descricao": "Odontoprev", "valor": 40.56}, {"descricao": "Ticket alimentação", "valor": 39.16}, {"descricao": "Atrasos", "valor": 9.93}], "entradaConta": [{"descricao": "Adiantamento salarial", "valor": 1785.52}, {"descricao": "Pagamento salarial", "valor": 6056.63}]}, "categorias": ["Salário", "Pix recebido", "Aluguel", "FIAP", "Energia (Enel)", "Internet/Celular (Claro)", "Água (BRK)", "Fatura do cartão", "Alimentação", "Lazer", "Combustível", "Pet", "Farmácia", "Manutenção moto", "Compras", "Pix enviado", "Outros", "RDB / investimento"]};

let seed = null;
let state = null;

function deepClone(v) {
  return JSON.parse(JSON.stringify(v));
}

function monthLabel(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-').map(Number);
  const nomes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  return `${nomes[m - 1]} ${y}`;
}

function loadSeed() {
  return deepClone(EMBEDDED_DATA);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  const s = loadSeed();
  return {
    mes: s.resumo.mes || '2026-08',
    resumo: s.resumo,
    movimentacoes: s.movimentacoes,
    holerite: s.holerite,
    categorias: s.categorias || [],
  };
}

function saveState(silent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (!silent) {
    const hint = document.getElementById('saveHint');
    hint.textContent = 'Salvo neste navegador · ' + new Date().toLocaleTimeString('pt-BR');
  }
}

function recalcFromMovs() {
  const movs = state.movimentacoes;
  let entradas = 0, saidas = 0, rdb = 0;
  const catMap = {};
  const entMap = {};
  movs.forEach((m) => {
    const v = Number(m.valor) || 0;
    if (m.tipo === 'Entrada') {
      entradas += v;
      entMap[m.categoria || 'Outros'] = (entMap[m.categoria || 'Outros'] || 0) + v;
    } else if (m.tipo === 'Aplicação RDB') {
      rdb += v;
      catMap['RDB / investimento'] = (catMap['RDB / investimento'] || 0) + v;
    } else {
      saidas += v;
      catMap[m.categoria || 'Outros'] = (catMap[m.categoria || 'Outros'] || 0) + v;
    }
  });
  const r = state.resumo;
  r.totalEntradas = round2(entradas);
  r.totalSaidas = round2(saidas);
  r.aplicadoRDB = round2(rdb);
  r.tudoQueSaiu = round2(saidas + rdb);
  r.entradasMenosConsumo = round2(entradas - saidas);
  r.resultadoContaAposRDB = round2(entradas - saidas - rdb);
  const ini = Number(r.saldoInicial) || 0;
  const rend = Number(r.rendimentoConta) || 0;
  r.saldoFinal = round2(ini + entradas - saidas - rdb + rend);
  r.saidasPorCategoria = Object.entries(catMap)
    .map(([categoria, valor]) => ({ categoria, valor: round2(valor) }))
    .sort((a, b) => b.valor - a.valor);
  r.entradasPorTipo = Object.entries(entMap)
    .map(([tipo, valor]) => ({ tipo, valor: round2(valor) }))
    .sort((a, b) => b.valor - a.valor);
  r.mes = state.mes;
  r.mesLabel = monthLabel(state.mes);
}

function round2(n) {
  return Math.round((Number(n) || 0) * 100) / 100;
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
  recalcFromMovs();
  const r = state.resumo;
  const editable = [
    ['saldoInicial', 'Saldo inicial', r.saldoInicial],
    ['rendimentoConta', 'Rendimento da conta', r.rendimentoConta],
  ];
  const auto = [
    ['Saldo final (calculado)', r.saldoFinal],
    ['Total entradas', r.totalEntradas],
    ['Saídas (consumo)', r.totalSaidas],
    ['Aplicado no RDB', r.aplicadoRDB],
    ['Entradas − consumo', r.entradasMenosConsumo],
    ['Resultado após RDB', r.resultadoContaAposRDB],
  ];

  document.getElementById('resumoCards').innerHTML = `
    <article class="stat">
      <span class="stat-label">Mês</span>
      <strong>${r.mesLabel || state.mes}</strong>
    </article>
    ${editable.map(([key, label, val]) => `
      <article class="stat resumo-edit">
        <label class="field">${label}
          <input type="number" step="0.01" data-resumo="${key}" value="${val}" />
        </label>
      </article>
    `).join('')}
    ${auto.map(([label, val]) => `
      <article class="stat">
        <span class="stat-label">${label}</span>
        <div class="auto-val">${money.format(val)}</div>
      </article>
    `).join('')}
  `;

  document.querySelectorAll('[data-resumo]').forEach((input) => {
    input.addEventListener('input', () => {
      state.resumo[input.dataset.resumo] = Number(input.value) || 0;
      saveState(true);
      // refresh only auto cards without stealing focus from current input
      const focused = document.activeElement;
      const key = focused && focused.dataset ? focused.dataset.resumo : null;
      const start = focused && focused.selectionStart;
      renderResumo();
      if (key) {
        const el = document.querySelector(`[data-resumo="${key}"]`);
        if (el) {
          el.focus();
          if (typeof start === 'number') el.setSelectionRange(start, start);
        }
      }
    });
  });

  const totalSaiu = r.tudoQueSaiu || 1;
  document.querySelector('#catTable tbody').innerHTML = (r.saidasPorCategoria || []).map((c) => `
    <tr>
      <td>${c.categoria}</td>
      <td>${money.format(c.valor)}</td>
      <td>${pctFmt.format(c.valor / totalSaiu)}</td>
    </tr>
  `).join('') || '<tr><td colspan="3">Sem saídas</td></tr>';

  document.querySelector('#entTable tbody').innerHTML = (r.entradasPorTipo || []).map((e) => `
    <tr><td>${e.tipo}</td><td>${money.format(e.valor)}</td></tr>
  `).join('') || '<tr><td colspan="2">Sem entradas</td></tr>';
}

function categoryOptions(selected) {
  const cats = state.categorias.length
    ? state.categorias
    : [...new Set(state.movimentacoes.map((m) => m.categoria).filter(Boolean))];
  return cats.map((c) => `<option value="${c}" ${c === selected ? 'selected' : ''}>${c}</option>`).join('');
}

function setupFilterCats() {
  const sel = document.getElementById('filterCat');
  const current = sel.value || 'todas';
  const cats = [...new Set(state.movimentacoes.map((m) => m.categoria).filter(Boolean))].sort();
  sel.innerHTML = '<option value="todas">Todas</option>' + cats.map((c) => `<option value="${c}">${c}</option>`).join('');
  sel.value = cats.includes(current) || current === 'todas' ? current : 'todas';
}

function filteredIndexes() {
  const tipo = document.getElementById('filterTipo').value;
  const cat = document.getElementById('filterCat').value;
  const out = [];
  state.movimentacoes.forEach((m, i) => {
    if (tipo !== 'todos' && m.tipo !== tipo) return;
    if (cat !== 'todas' && m.categoria !== cat) return;
    out.push(i);
  });
  return out;
}

function renderMovs() {
  setupFilterCats();
  const tbody = document.querySelector('#movTable tbody');
  const empty = document.getElementById('emptyState');
  const indexes = filteredIndexes();
  tbody.innerHTML = '';
  empty.hidden = state.movimentacoes.length > 0;
  document.getElementById('movTable').hidden = state.movimentacoes.length === 0;

  const tpl = document.getElementById('movRowTemplate');
  indexes.forEach((index) => {
    const m = state.movimentacoes[index];
    const tr = tpl.content.firstElementChild.cloneNode(true);
    const tipo = tr.querySelector('.tipo');
    const data = tr.querySelector('.data');
    const descricao = tr.querySelector('.descricao');
    const categoria = tr.querySelector('.categoria');
    const valor = tr.querySelector('.valor');
    const obs = tr.querySelector('.obs');

    categoria.innerHTML = categoryOptions(m.categoria);
    tipo.value = m.tipo || 'Saída';
    data.value = m.data || '';
    descricao.value = m.descricao || '';
    categoria.value = m.categoria || 'Outros';
    valor.value = m.valor ?? '';
    obs.value = m.observacao || '';

    const sync = (recalc) => {
      m.tipo = tipo.value;
      m.data = data.value;
      m.descricao = descricao.value;
      m.categoria = categoria.value;
      m.valor = Number(valor.value) || 0;
      m.observacao = obs.value;
      saveState(true);
      if (recalc) renderResumo();
    };

    tipo.addEventListener('change', () => sync(true));
    categoria.addEventListener('change', () => sync(true));
    data.addEventListener('change', () => sync(false));
    descricao.addEventListener('input', () => sync(false));
    obs.addEventListener('input', () => sync(false));
    valor.addEventListener('input', () => {
      m.valor = Number(valor.value) || 0;
      saveState(true);
      renderResumo();
    });
    tr.querySelector('.remove').addEventListener('click', () => {
      state.movimentacoes.splice(index, 1);
      saveState(true);
      renderMovs();
      renderResumo();
    });

    tbody.appendChild(tr);
  });

  document.getElementById('movCount').textContent = `${indexes.length} exibida(s) · ${state.movimentacoes.length} no mês`;
}

function renderHolerite() {
  const h = state.holerite;
  document.getElementById('holeriteCard').innerHTML = `
    <h2>Holerite — referência do mês</h2>
    <p class="hint">Campos editáveis do exemplo. Não publica valores no README do perfil.</p>
    <div class="summary resumo-edit" style="margin:1rem 0">
      <article class="stat"><label class="field">Bruto<input type="number" step="0.01" id="holBruto" value="${h.bruto}" /></label></article>
      <article class="stat"><label class="field">Descontos<input type="number" step="0.01" id="holDesc" value="${h.descontos}" /></label></article>
      <article class="stat"><label class="field">Líquido<input type="number" step="0.01" id="holLiq" value="${h.liquido}" /></label></article>
    </div>
    <p class="hint">${h.nota || ''}</p>
  `;
  const bind = (id, key) => {
    document.getElementById(id).addEventListener('input', (e) => {
      state.holerite[key] = Number(e.target.value) || 0;
      saveState(true);
    });
  };
  bind('holBruto', 'bruto');
  bind('holDesc', 'descontos');
  bind('holLiq', 'liquido');
}

function addRow() {
  state.movimentacoes.push({
    tipo: 'Saída',
    data: `${state.mes}-01`,
    descricao: '',
    categoria: 'Outros',
    valor: 0,
    observacao: '',
  });
  saveState(true);
  renderMovs();
  renderResumo();
}

function exportCsv() {
  const lines = [['Tipo','Data','Descricao','Categoria','Valor','Observacao'].join(';')];
  state.movimentacoes.forEach((m) => {
    lines.push([
      m.tipo,
      m.data,
      `"${String(m.descricao || '').replaceAll('"','""')}"`,
      m.categoria,
      (Number(m.valor) || 0).toFixed(2).replace('.', ','),
      `"${String(m.observacao || '').replaceAll('"','""')}"`,
    ].join(';'));
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `fluxo-${state.mes}.csv`;
  a.click();
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.resumo || !Array.isArray(parsed.movimentacoes)) {
        alert('JSON inválido: precisa de resumo e movimentacoes.');
        return;
      }
      state = {
        mes: parsed.resumo.mes || state.mes,
        resumo: parsed.resumo,
        movimentacoes: parsed.movimentacoes,
        holerite: parsed.holerite || state.holerite,
        categorias: parsed.categorias || state.categorias,
      };
      document.getElementById('monthPicker').value = state.mes;
      saveState();
      renderAll();
    } catch (err) {
      alert('Não foi possível importar: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function resetSeed() {
  if (!confirm('Restaurar o seed de exemplo e apagar edições deste navegador?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  document.getElementById('monthPicker').value = state.mes;
  renderAll();
  document.getElementById('saveHint').textContent = 'Seed restaurado.';
}

function renderAll() {
  renderResumo();
  renderMovs();
  renderHolerite();
}

function init() {
  seed = loadSeed();
  state = loadState();
  document.getElementById('monthPicker').value = state.mes;
  document.getElementById('monthPicker').addEventListener('change', (e) => {
    state.mes = e.target.value;
    state.resumo.mes = state.mes;
    state.resumo.mesLabel = monthLabel(state.mes);
    saveState(true);
    renderResumo();
  });
  document.getElementById('filterTipo').addEventListener('change', renderMovs);
  document.getElementById('filterCat').addEventListener('change', renderMovs);
  document.getElementById('btnAdd').addEventListener('click', addRow);
  document.getElementById('btnEmptyAdd').addEventListener('click', addRow);
  document.getElementById('btnExport').addEventListener('click', exportCsv);
  document.getElementById('btnSave').addEventListener('click', () => saveState(false));
  document.getElementById('btnReset').addEventListener('click', resetSeed);
  document.getElementById('btnImport').addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) importJson(file);
    e.target.value = '';
  });
  setupTabs();
  renderAll();
}

init();
