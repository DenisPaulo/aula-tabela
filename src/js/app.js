const STORAGE_KEY = 'fluxo-caixa-edit-v2';
const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const pctFmt = new Intl.NumberFormat('pt-BR', { style: 'percent', maximumFractionDigits: 1 });
const EMBEDDED_DATA = {"privacy": "Seed público com valores de exemplo. Sem nomes completos, sem empresa, sem salário real.", "resumo": {"mes": "2026-08", "mesLabel": "Agosto 2026 (exemplo)", "saldoInicial": 5000.0, "saldoFinal": 4701.66, "rendimentoConta": 0.5, "totalEntradas": 7100.0, "totalSaidas": 5648.84, "aplicadoRDB": 1750.0, "tudoQueSaiu": 7398.84, "entradasMenosConsumo": 1451.16, "resultadoContaAposRDB": -298.84, "saidasPorCategoria": [{"categoria": "RDB / investimento", "valor": 1750.0}, {"categoria": "Faculdade", "valor": 1305.0}, {"categoria": "Manutenção moto", "valor": 1040.99}, {"categoria": "Fatura do cartão", "valor": 729.56}, {"categoria": "Alimentação", "valor": 697.53}, {"categoria": "Aluguel", "valor": 500.0}, {"categoria": "Pix enviado", "valor": 430.9}, {"categoria": "Lazer", "valor": 239.9}, {"categoria": "Compras", "valor": 171.7}, {"categoria": "Energia", "valor": 123.39}, {"categoria": "Internet/Celular", "valor": 101.92}, {"categoria": "Água", "valor": 86.11}, {"categoria": "Pet", "valor": 82.99}, {"categoria": "Combustível", "valor": 75.0}, {"categoria": "Farmácia", "valor": 43.95}, {"categoria": "Outros", "valor": 19.9}], "entradasPorTipo": [{"tipo": "Salário", "valor": 7000.0}, {"tipo": "Pix recebido", "valor": 100.0}]}, "movimentacoes": [{"tipo": "Entrada", "data": "2026-08-14", "descricao": "Adiantamento salarial", "categoria": "Salário", "valor": 1500.0, "observacao": "Exemplo"}, {"tipo": "Entrada", "data": "2026-08-19", "descricao": "Pix recebido", "categoria": "Pix recebido", "valor": 100.0, "observacao": "Exemplo"}, {"tipo": "Entrada", "data": "2026-08-31", "descricao": "Pagamento salarial", "categoria": "Salário", "valor": 5500.0, "observacao": "Exemplo"}, {"tipo": "Saída", "data": "2026-08-01", "descricao": "Padaria", "categoria": "Alimentação", "valor": 10.0, "observacao": "Padaria"}, {"tipo": "Saída", "data": "2026-08-01", "descricao": "Mercado local", "categoria": "Alimentação", "valor": 25.5, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-02", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 34.1, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "Faculdade", "categoria": "Faculdade", "valor": 1305.0, "observacao": "Boleto"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "Aluguel", "categoria": "Aluguel", "valor": 500.0, "observacao": "Aluguel da casa"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "Delivery app", "categoria": "Alimentação", "valor": 5.3, "observacao": "DL*99"}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "Serviço online", "categoria": "Pix enviado", "valor": 15.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-03", "descricao": "iFood — lanches", "categoria": "Alimentação", "valor": 48.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-04", "descricao": "Padaria", "categoria": "Alimentação", "valor": 9.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 24.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Compras", "categoria": "Compras", "valor": 171.7, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-05", "descricao": "Padaria", "categoria": "Alimentação", "valor": 51.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-06", "descricao": "Delivery app", "categoria": "Alimentação", "valor": 5.3, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-06", "descricao": "Delivery app", "categoria": "Alimentação", "valor": 5.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-07", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 17.18, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "Delivery app", "categoria": "Alimentação", "valor": 8.7, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "Manutenção da moto", "categoria": "Manutenção moto", "valor": 1040.99, "observacao": "Guidão, kit relação, pneu, pinças"}, {"tipo": "Saída", "data": "2026-08-08", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 12.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Internet/celular", "categoria": "Internet/Celular", "valor": 101.92, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Energia (Enel)", "categoria": "Energia", "valor": 123.39, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-10", "descricao": "Padaria", "categoria": "Alimentação", "valor": 16.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-11", "descricao": "Distribuidora", "categoria": "Alimentação", "valor": 37.46, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-12", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 14.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-12", "descricao": "Fatura do cartão", "categoria": "Fatura do cartão", "valor": 729.56, "observacao": ""}, {"tipo": "Aplicação RDB", "data": "2026-08-13", "descricao": "Aplicação RDB", "categoria": "RDB / investimento", "valor": 1000.0, "observacao": "Caixinha"}, {"tipo": "Saída", "data": "2026-08-13", "descricao": "Combustível", "categoria": "Combustível", "valor": 75.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "Mercado local", "categoria": "Alimentação", "valor": 16.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "Mercado", "categoria": "Alimentação", "valor": 86.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "Distribuidora", "categoria": "Alimentação", "valor": 10.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-14", "descricao": "Padaria", "categoria": "Alimentação", "valor": 10.6, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-16", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 100.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-16", "descricao": "Farmácia", "categoria": "Farmácia", "valor": 43.95, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-17", "descricao": "Padaria", "categoria": "Alimentação", "valor": 17.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-17", "descricao": "Padaria", "categoria": "Alimentação", "valor": 9.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-18", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 8.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-19", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 18.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "Padaria", "categoria": "Alimentação", "valor": 9.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "Água (BRK)", "categoria": "Água", "valor": 86.11, "observacao": ""}, {"tipo": "Aplicação RDB", "data": "2026-08-21", "descricao": "Aplicação RDB", "categoria": "RDB / investimento", "valor": 750.0, "observacao": "Caixinha"}, {"tipo": "Saída", "data": "2026-08-21", "descricao": "Serviço online", "categoria": "Pix enviado", "valor": 89.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-22", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 14.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Débito em conta", "categoria": "Outros", "valor": 19.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Padaria", "categoria": "Alimentação", "valor": 26.4, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-26", "descricao": "Supermercado", "categoria": "Alimentação", "valor": 75.33, "observacao": "Mercado"}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "Lazer", "categoria": "Lazer", "valor": 51.9, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "Mercado local", "categoria": "Alimentação", "valor": 28.5, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-28", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 12.0, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-29", "descricao": "Restaurante", "categoria": "Alimentação", "valor": 89.98, "observacao": "Restaurante"}, {"tipo": "Saída", "data": "2026-08-29", "descricao": "Bar / lazer", "categoria": "Lazer", "valor": 188.0, "observacao": "Bar"}, {"tipo": "Saída", "data": "2026-08-30", "descricao": "Alimentação", "categoria": "Alimentação", "valor": 4.8, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-30", "descricao": "Pet shop", "categoria": "Pet", "valor": 82.99, "observacao": ""}, {"tipo": "Saída", "data": "2026-08-31", "descricao": "Pix enviado", "categoria": "Pix enviado", "valor": 160.0, "observacao": ""}], "holerite": {"titulo": "Holerite — exemplo", "nota": "Valores fictícios de exemplo para a demo pública.", "bruto": 9000.0, "descontos": 2000.0, "liquido": 7000.0, "ganhos": [{"descricao": "Salário base (exemplo)", "valor": 5000}, {"descricao": "Adicionais (exemplo)", "valor": 4000}], "descontosLista": [{"descricao": "Encargos (exemplo)", "valor": 2000}], "entradaConta": [{"descricao": "Adiantamento salarial", "valor": 1500}, {"descricao": "Pagamento salarial", "valor": 5500}]}, "categorias": ["Salário", "Pix recebido", "Aluguel", "Faculdade", "Energia", "Internet/Celular", "Água", "Fatura do cartão", "Alimentação", "Lazer", "Combustível", "Pet", "Farmácia", "Manutenção moto", "Compras", "Pix enviado", "Outros", "RDB / investimento"]};

let state = null;
let lastProjection = [];

function deepClone(v) { return JSON.parse(JSON.stringify(v)); }
function round2(n) { return Math.round((Number(n) || 0) * 100) / 100; }

function monthLabel(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-').map(Number);
  const nomes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  return `${nomes[m - 1]} ${y}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  const s = deepClone(EMBEDDED_DATA);
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
    document.getElementById('saveHint').textContent =
      'Salvo neste navegador · ' + new Date().toLocaleTimeString('pt-BR');
  }
}

function recalcFromMovs() {
  const movs = state.movimentacoes;
  let entradas = 0, saidas = 0, rdb = 0;
  const catMap = {}, entMap = {};
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
  r.saidasPorCategoria = Object.entries(catMap).map(([categoria, valor]) => ({ categoria, valor: round2(valor) })).sort((a,b) => b.valor - a.valor);
  r.entradasPorTipo = Object.entries(entMap).map(([tipo, valor]) => ({ tipo, valor: round2(valor) })).sort((a,b) => b.valor - a.valor);
  r.mes = state.mes;
  r.mesLabel = monthLabel(state.mes) + (r.mesLabel && r.mesLabel.includes('exemplo') ? ' (exemplo)' : '');
}

function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = {
    resumo: document.getElementById('panel-resumo'),
    movs: document.getElementById('panel-movs'),
    investimento: document.getElementById('panel-investimento'),
    holerite: document.getElementById('panel-holerite'),
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
  const sobrou = r.resultadoContaAposRDB >= 0;
  document.getElementById('receipt').innerHTML = `
    <div class="pill"><span class="stat-label">Entrou</span><strong>${money.format(r.totalEntradas)}</strong></div>
    <div class="pill"><span class="stat-label">Gastou</span><strong>${money.format(r.totalSaidas)}</strong></div>
    <div class="pill"><span class="stat-label">Guardou (RDB)</span><strong>${money.format(r.aplicadoRDB)}</strong></div>
    <div class="pill ${sobrou ? 'pill-pos' : 'pill-neg'}"><span class="stat-label">Sobrou</span><strong>${money.format(r.resultadoContaAposRDB)}</strong></div>
  `;

  document.getElementById('resumoCards').innerHTML = `
    <article class="stat"><span class="stat-label">Mês</span><strong>${monthLabel(state.mes)}</strong></article>
    <article class="stat resumo-edit"><label class="field">Saldo inicial
      <input type="number" step="0.01" data-resumo="saldoInicial" value="${r.saldoInicial}" />
    </label></article>
    <article class="stat resumo-edit"><label class="field">Rendimento da conta
      <input type="number" step="0.01" data-resumo="rendimentoConta" value="${r.rendimentoConta}" />
    </label></article>
    <article class="stat"><span class="stat-label">Saldo final (calculado)</span><div class="auto-val">${money.format(r.saldoFinal)}</div></article>
  `;

  document.querySelectorAll('[data-resumo]').forEach((input) => {
    input.addEventListener('input', () => {
      state.resumo[input.dataset.resumo] = Number(input.value) || 0;
      saveState(true);
      const key = input.dataset.resumo;
      const pos = input.selectionStart;
      renderResumo();
      const el = document.querySelector(`[data-resumo="${key}"]`);
      if (el) { el.focus(); if (typeof pos === 'number') el.setSelectionRange(pos, pos); }
    });
  });

  const totalSaiu = r.tudoQueSaiu || 1;
  document.querySelector('#catTable tbody').innerHTML = (r.saidasPorCategoria || []).map((c) => `
    <tr><td>${c.categoria}</td><td>${money.format(c.valor)}</td><td>${pctFmt.format(c.valor / totalSaiu)}</td></tr>
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
  if ([...sel.options].some((o) => o.value === current)) sel.value = current;
}

function filteredIndexes() {
  const tipo = document.getElementById('filterTipo').value;
  const cat = document.getElementById('filterCat').value;
  const q = (document.getElementById('filterSearch').value || '').toLowerCase().trim();
  const out = [];
  state.movimentacoes.forEach((m, i) => {
    if (tipo !== 'todos' && m.tipo !== tipo) return;
    if (cat !== 'todas' && m.categoria !== cat) return;
    if (q) {
      const blob = `${m.descricao || ''} ${m.observacao || ''} ${m.categoria || ''}`.toLowerCase();
      if (!blob.includes(q)) return;
    }
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
    valor.addEventListener('input', () => { m.valor = Number(valor.value) || 0; saveState(true); renderResumo(); });
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
    <h2>${h.titulo || 'Holerite — exemplo'}</h2>
    <p class="hint">${h.nota || 'Valores de exemplo para a demo pública.'}</p>
    <div class="summary resumo-edit" style="margin:1rem 0">
      <article class="stat"><label class="field">Bruto<input type="number" step="0.01" id="holBruto" value="${h.bruto}" /></label></article>
      <article class="stat"><label class="field">Descontos<input type="number" step="0.01" id="holDesc" value="${h.descontos}" /></label></article>
      <article class="stat"><label class="field">Líquido<input type="number" step="0.01" id="holLiq" value="${h.liquido}" /></label></article>
    </div>
  `;
  const bind = (id, key) => document.getElementById(id).addEventListener('input', (e) => {
    state.holerite[key] = Number(e.target.value) || 0;
    saveState(true);
  });
  bind('holBruto', 'bruto');
  bind('holDesc', 'descontos');
  bind('holLiq', 'liquido');
}

function addRow() {
  state.movimentacoes.push({
    tipo: 'Saída', data: `${state.mes}-01`, descricao: '', categoria: 'Outros', valor: 0, observacao: '',
  });
  saveState(true);
  renderMovs();
  renderResumo();
}

function exportCsv() {
  const lines = [['Tipo','Data','Descricao','Categoria','Valor','Observacao'].join(';')];
  state.movimentacoes.forEach((m) => {
    lines.push([
      m.tipo, m.data,
      `"${String(m.descricao || '').replaceAll('"','""')}"`,
      m.categoria,
      (Number(m.valor) || 0).toFixed(2).replace('.', ','),
      `"${String(m.observacao || '').replaceAll('"','""')}"`,
    ].join(';'));
  });
  downloadText(`fluxo-${state.mes}.csv`, lines.join('\n'), 'text/csv;charset=utf-8;');
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, '').trim().split(/\r?\n/);
  if (lines.length < 2) throw new Error('CSV vazio');
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = splitCsvLine(lines[i]);
    if (cols.length < 5) continue;
    const [tipo, data, descricao, categoria, valor, observacao = ''] = cols;
    if (!tipo) continue;
    rows.push({
      tipo: tipo.trim(),
      data: normalizeDate(data.trim()),
      descricao: descricao.trim(),
      categoria: categoria.trim() || 'Outros',
      valor: parseBrNumber(valor),
      observacao: (observacao || '').trim(),
    });
  }
  if (!rows.length) throw new Error('Nenhuma linha válida no CSV');
  return rows;
}

function splitCsvLine(line) {
  const out = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if ((ch === ';' || ch === ',') && !inQ) {
      out.push(cur); cur = '';
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

function parseBrNumber(v) {
  const s = String(v).trim().replace(/\./g, '').replace(',', '.');
  return round2(Number(s) || 0);
}

function normalizeDate(d) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  const m = d.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (m) return `${m[3]}-${m[2]}-${m[1]}`;
  return d;
}

function importFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const text = String(reader.result || '');
      if (file.name.toLowerCase().endsWith('.json') || text.trim().startsWith('{')) {
        const parsed = JSON.parse(text);
        if (!parsed.resumo || !Array.isArray(parsed.movimentacoes)) throw new Error('JSON precisa de resumo e movimentacoes');
        state = {
          mes: parsed.resumo.mes || state.mes,
          resumo: parsed.resumo,
          movimentacoes: parsed.movimentacoes,
          holerite: parsed.holerite || state.holerite,
          categorias: parsed.categorias || state.categorias,
        };
      } else {
        state.movimentacoes = parseCsv(text);
      }
      document.getElementById('monthPicker').value = state.mes;
      saveState();
      renderAll();
      document.getElementById('saveHint').textContent = 'Importação concluída.';
    } catch (err) {
      alert('Falha ao importar: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function resetSeed() {
  if (!confirm('Restaurar o seed de exemplo e apagar edições deste navegador?')) return;
  localStorage.removeItem(STORAGE_KEY);
  // also clear old key
  localStorage.removeItem('fluxo-caixa-edit-v1');
  state = loadState();
  document.getElementById('monthPicker').value = state.mes;
  renderAll();
  document.getElementById('saveHint').textContent = 'Seed de exemplo restaurado.';
}

function simulateInvestment() {
  const saldo0 = Number(document.getElementById('invSaldo').value) || 0;
  const taxaPct = Number(document.getElementById('invTaxa').value) || 0;
  const aporte = Number(document.getElementById('invAporte').value) || 0;
  let meses = Number(document.getElementById('invMeses').value) || 12;
  meses = Math.max(1, Math.min(120, meses));
  const comIR = document.getElementById('invIR').checked;
  const taxa = taxaPct / 100;

  const rows = [];
  let saldo = saldo0;
  let totalAporte = 0;
  let mesMeta = null;
  for (let n = 1; n <= meses; n++) {
    const rendimento = round2(saldo * taxa);
    saldo = round2(saldo * (1 + taxa) + aporte);
    totalAporte += aporte;
    if (mesMeta == null && rendimento >= 1000) mesMeta = n;
    rows.push({ mes: n, aporte, rendimento, saldo });
  }
  lastProjection = rows;
  const saldoFinal = rows.length ? rows[rows.length - 1].saldo : saldo0;
  const juros = round2(saldoFinal - saldo0 - totalAporte);
  const liquido = comIR ? round2(saldo0 + totalAporte + juros * 0.85) : saldoFinal;
  const capital1000 = taxa > 0 ? round2(1000 / taxa) : null;

  document.getElementById('invCards').innerHTML = `
    <article class="stat"><span class="stat-label">Saldo final bruto</span><strong>${money.format(saldoFinal)}</strong></article>
    <article class="stat"><span class="stat-label">Total aportado</span><strong>${money.format(totalAporte)}</strong></article>
    <article class="stat"><span class="stat-label">Juros no período</span><strong>${money.format(juros)}</strong></article>
    <article class="stat"><span class="stat-label">${comIR ? 'Líquido est. (IR 15%)' : 'Líquido = bruto'}</span><strong>${money.format(liquido)}</strong></article>
    <article class="stat"><span class="stat-label">Saldo p/ R$ 1.000/mês</span><strong>${capital1000 == null ? '—' : money.format(capital1000)}</strong></article>
  `;
  document.getElementById('invMeta').textContent = mesMeta
    ? `Rendimento mensal passa de R$ 1.000 no mês ${mesMeta}.`
    : `No horizonte de ${meses} meses, o rendimento mensal ainda não chega a R$ 1.000 no ritmo atual.`;

  const show = [];
  rows.forEach((row) => {
    if (row.mes <= 12 || row.mes === meses || row.mes === mesMeta) show.push(row);
  });
  // unique by month
  const seen = new Set();
  const unique = show.filter((r) => (seen.has(r.mes) ? false : (seen.add(r.mes), true))).sort((a,b) => a.mes - b.mes);

  document.querySelector('#invTable tbody').innerHTML = unique.map((row) => `
    <tr class="${row.mes === mesMeta ? 'row-meta' : ''}">
      <td>${row.mes}</td>
      <td>${money.format(row.aporte)}</td>
      <td>${money.format(row.rendimento)}</td>
      <td>${money.format(row.saldo)}</td>
    </tr>
  `).join('');
}

function exportProjection() {
  if (!lastProjection.length) simulateInvestment();
  const lines = [['Mes','Aporte','Rendimento','Saldo'].join(';')];
  lastProjection.forEach((r) => {
    lines.push([
      r.mes,
      r.aporte.toFixed(2).replace('.', ','),
      r.rendimento.toFixed(2).replace('.', ','),
      r.saldo.toFixed(2).replace('.', ','),
    ].join(';'));
  });
  downloadText('projecao-rdb.csv', lines.join('\n'), 'text/csv;charset=utf-8;');
}

function downloadText(name, text, type) {
  const blob = new Blob([text], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
}

function renderAll() {
  renderResumo();
  renderMovs();
  renderHolerite();
  simulateInvestment();
}

function init() {
  state = loadState();
  document.getElementById('monthPicker').value = state.mes;
  document.getElementById('monthPicker').addEventListener('change', (e) => {
    state.mes = e.target.value;
    state.resumo.mes = state.mes;
    saveState(true);
    renderResumo();
  });
  document.getElementById('filterTipo').addEventListener('change', renderMovs);
  document.getElementById('filterCat').addEventListener('change', renderMovs);
  document.getElementById('filterSearch').addEventListener('input', renderMovs);
  document.getElementById('btnAdd').addEventListener('click', addRow);
  document.getElementById('btnEmptyAdd').addEventListener('click', addRow);
  document.getElementById('btnExport').addEventListener('click', exportCsv);
  document.getElementById('btnSave').addEventListener('click', () => saveState(false));
  document.getElementById('btnReset').addEventListener('click', resetSeed);
  document.getElementById('btnImport').addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) importFile(file);
    e.target.value = '';
  });
  document.getElementById('btnSimular').addEventListener('click', simulateInvestment);
  document.getElementById('btnExportProj').addEventListener('click', exportProjection);
  document.getElementById('btnUseSaldo').addEventListener('click', () => {
    recalcFromMovs();
    document.getElementById('invSaldo').value = state.resumo.saldoFinal;
    simulateInvestment();
  });
  ['invSaldo','invTaxa','invAporte','invMeses','invIR'].forEach((id) => {
    document.getElementById(id).addEventListener('change', simulateInvestment);
  });
  setupTabs();
  renderAll();
}

init();
