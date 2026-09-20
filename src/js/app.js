const STORAGE_KEY = 'aula-tabela-gastos-v1';
const CATEGORIES = ['Moradia', 'Alimentação', 'Transporte', 'Saúde', 'Educação', 'Lazer', 'Outros'];

const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const els = {
  monthPicker: document.getElementById('monthPicker'),
  body: document.getElementById('expenseBody'),
  empty: document.getElementById('emptyState'),
  table: document.getElementById('expenseTable'),
  totalPlanejado: document.getElementById('totalPlanejado'),
  totalRealizado: document.getElementById('totalRealizado'),
  saldoMes: document.getElementById('saldoMes'),
  budgetPct: document.getElementById('budgetPct'),
  budgetFill: document.getElementById('budgetFill'),
  rowTemplate: document.getElementById('rowTemplate'),
};

let state = loadState();

function defaultMonth() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function sampleRows() {
  return [
    { category: 'Moradia', description: 'Aluguel', planned: 1800, actual: 1800 },
    { category: 'Alimentação', description: 'Mercado', planned: 900, actual: 1040 },
    { category: 'Transporte', description: 'Combustível / app', planned: 450, actual: 390 },
    { category: 'Lazer', description: 'Streaming + lazer', planned: 200, actual: 260 },
  ];
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const month = defaultMonth();
      return { month, rowsByMonth: { [month]: sampleRows() } };
    }
    return JSON.parse(raw);
  } catch {
    const month = defaultMonth();
    return { month, rowsByMonth: { [month]: sampleRows() } };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentRows() {
  if (!state.rowsByMonth[state.month]) state.rowsByMonth[state.month] = [];
  return state.rowsByMonth[state.month];
}

function statusFor(planned, actual) {
  if (planned <= 0 && actual <= 0) return { key: 'ok', label: 'Sem valor', icon: '○' };
  if (actual <= planned) return { key: 'ok', label: 'No azul', icon: '✓' };
  if (actual <= planned * 1.1) return { key: 'warn', label: 'Atenção', icon: '!' };
  return { key: 'danger', label: 'Acima', icon: '↑' };
}

function render() {
  const rows = currentRows();
  els.body.innerHTML = '';
  const hasRows = rows.length > 0;
  els.empty.hidden = hasRows;
  els.table.hidden = !hasRows;

  let plannedTotal = 0;
  let actualTotal = 0;

  plannedTotal = rows.reduce((s, r) => s + (Number(r.planned) || 0), 0);
  actualTotal = rows.reduce((s, r) => s + (Number(r.actual) || 0), 0);

  rows.forEach((row, index) => {
    const planned = Number(row.planned) || 0;
    const actual = Number(row.actual) || 0;

    const tr = els.rowTemplate.content.firstElementChild.cloneNode(true);
    const category = tr.querySelector('.category');
    const description = tr.querySelector('.description');
    const plannedInput = tr.querySelector('.planned');
    const actualInput = tr.querySelector('.actual');
    const diffCell = tr.querySelector('.diff-cell');
    const pctCell = tr.querySelector('.pct-cell');
    const statusCell = tr.querySelector('.status-cell');

    category.innerHTML = CATEGORIES.map((c) => `<option value="${c}">${c}</option>`).join('');
    category.value = row.category || 'Outros';
    description.value = row.description || '';
    plannedInput.value = planned || '';
    actualInput.value = actual || '';

    const diff = planned - actual;
    const diffClass = diff >= 0 ? 'diff-ok' : Math.abs(diff) <= planned * 0.1 ? 'diff-warn' : 'diff-danger';
    const sign = diff > 0 ? '+' : '';
    diffCell.innerHTML = `<span class="${diffClass}">${sign}${money.format(diff)}</span>`;

    const pct = plannedTotal > 0 ? (actual / plannedTotal) * 100 : 0;
    pctCell.textContent = `${pct.toFixed(1)}%`;

    const st = statusFor(planned, actual);
    statusCell.innerHTML = `<span class="status-pill status-${st.key}"><span aria-hidden="true">${st.icon}</span>${st.label}</span>`;

    category.addEventListener('change', () => { row.category = category.value; persistAndRefresh(); });
    description.addEventListener('input', () => { row.description = description.value; saveState(); });
    plannedInput.addEventListener('input', () => {
      row.planned = Number(plannedInput.value) || 0;
      saveState();
      refreshTotalsAndRow(tr, row);
    });
    actualInput.addEventListener('input', () => {
      row.actual = Number(actualInput.value) || 0;
      saveState();
      refreshTotalsAndRow(tr, row);
    });
    tr.querySelector('.remove').addEventListener('click', () => {
      currentRows().splice(index, 1);
      persistAndRefresh();
    });

    els.body.appendChild(tr);
  });

  const saldo = plannedTotal - actualTotal;
  els.totalPlanejado.textContent = money.format(plannedTotal);
  els.totalRealizado.textContent = money.format(actualTotal);
  els.saldoMes.textContent = money.format(saldo);
  els.saldoMes.className = saldo >= 0 ? 'diff-ok' : 'diff-danger';

  const usage = plannedTotal > 0 ? Math.min((actualTotal / plannedTotal) * 100, 100) : 0;
  els.budgetPct.textContent = `${usage.toFixed(0)}%`;
  els.budgetFill.style.width = `${usage}%`;
}


function refreshTotalsAndRow(tr, row) {
  const rows = currentRows();
  const plannedTotal = rows.reduce((s, r) => s + (Number(r.planned) || 0), 0);
  const actualTotal = rows.reduce((s, r) => s + (Number(r.actual) || 0), 0);
  const planned = Number(row.planned) || 0;
  const actual = Number(row.actual) || 0;
  const diff = planned - actual;
  const diffClass = diff >= 0 ? 'diff-ok' : Math.abs(diff) <= planned * 0.1 ? 'diff-warn' : 'diff-danger';
  const sign = diff > 0 ? '+' : '';
  tr.querySelector('.diff-cell').innerHTML = `<span class="${diffClass}">${sign}${money.format(diff)}</span>`;
  const pct = plannedTotal > 0 ? (actual / plannedTotal) * 100 : 0;
  tr.querySelector('.pct-cell').textContent = `${pct.toFixed(1)}%`;
  const st = statusFor(planned, actual);
  tr.querySelector('.status-cell').innerHTML = `<span class="status-pill status-${st.key}"><span aria-hidden="true">${st.icon}</span>${st.label}</span>`;

  const saldo = plannedTotal - actualTotal;
  els.totalPlanejado.textContent = money.format(plannedTotal);
  els.totalRealizado.textContent = money.format(actualTotal);
  els.saldoMes.textContent = money.format(saldo);
  els.saldoMes.className = saldo >= 0 ? 'diff-ok' : 'diff-danger';
  const usage = plannedTotal > 0 ? Math.min((actualTotal / plannedTotal) * 100, 100) : 0;
  els.budgetPct.textContent = `${usage.toFixed(0)}%`;
  els.budgetFill.style.width = `${usage}%`;

  // keep % columns coherent for all rows without rebuilding inputs
  [...els.body.querySelectorAll('tr')].forEach((rowEl, i) => {
    const r = rows[i];
    if (!r) return;
    const a = Number(r.actual) || 0;
    const p = plannedTotal > 0 ? (a / plannedTotal) * 100 : 0;
    rowEl.querySelector('.pct-cell').textContent = `${p.toFixed(1)}%`;
  });
}

function persistAndRefresh() {
  saveState();
  render();
}

function addRow() {
  currentRows().push({ category: 'Outros', description: '', planned: 0, actual: 0 });
  persistAndRefresh();
}

function clearMonth() {
  if (!confirm('Limpar todos os gastos deste mês?')) return;
  state.rowsByMonth[state.month] = [];
  persistAndRefresh();
}

function exportCsv() {
  const rows = currentRows();
  const header = ['Mes', 'Categoria', 'Descricao', 'Planejado', 'Realizado', 'Diferenca', 'Status'];
  const lines = [header.join(';')];
  rows.forEach((row) => {
    const planned = Number(row.planned) || 0;
    const actual = Number(row.actual) || 0;
    const st = statusFor(planned, actual).label;
    lines.push([
      state.month,
      row.category,
      `"${(row.description || '').replaceAll('"', '""')}"`,
      planned.toFixed(2).replace('.', ','),
      actual.toFixed(2).replace('.', ','),
      (planned - actual).toFixed(2).replace('.', ','),
      st,
    ].join(';'));
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `gastos-${state.month}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = {
    gastos: document.getElementById('panel-gastos'),
    moda: document.getElementById('panel-moda'),
    casa: document.getElementById('panel-casa'),
  };
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      Object.entries(panels).forEach(([key, panel]) => {
        const active = key === id;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
    });
  });
}

els.monthPicker.value = state.month || defaultMonth();
state.month = els.monthPicker.value;
if (!state.rowsByMonth[state.month]) state.rowsByMonth[state.month] = sampleRows();

els.monthPicker.addEventListener('change', () => {
  state.month = els.monthPicker.value;
  if (!state.rowsByMonth[state.month]) state.rowsByMonth[state.month] = sampleRows();
  persistAndRefresh();
});

document.getElementById('btnAdd').addEventListener('click', addRow);
document.getElementById('btnEmptyAdd').addEventListener('click', addRow);
document.getElementById('btnExport').addEventListener('click', exportCsv);
document.getElementById('btnClear').addEventListener('click', clearMonth);

setupTabs();
render();
