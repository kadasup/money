const STORAGE_KEY = 'bnb_financial_data_v1';
const FALLBACK_DATA = {
  meta: {
    notes: [
      '只計住宿相關收入（含烤肉），排除 SUP',
      '附圖費用以四個月平均攤分：12864.75/月',
      '每月固定房租：70000'
    ],
    monthly_shared_attachment_expense: 12864.75,
    monthly_rent: 70000
  },
  months: [
    { month: '2026-01', details: [
      {date:'2026-01-03',type:'income',category:'住宿',item:'booking 雙人房',amount:2300},
      {date:'2026-01-13',type:'income',category:'住宿',item:'雙人房',amount:1500},
      {date:'2026-01-17',type:'income',category:'住宿',item:'包棟訂金/尾款',amount:15600},
      {date:'2026-01-27',type:'income',category:'住宿',item:'四人套房',amount:3600},
      {date:'2026-01-31',type:'income',category:'住宿',item:'雙人套房/升級/毛小孩',amount:1500},
      {date:'2026-01-01',type:'expense',category:'營運',item:'五金',amount:1000},
      {date:'2026-01-01',type:'expense',category:'營運',item:'雞飼料',amount:360},
      {date:'2026-01-01',type:'expense',category:'早餐',item:'早餐合計',amount:1950},
      {date:'2026-01-16',type:'expense',category:'房務',item:'房務',amount:700},
      {date:'2026-01-01',type:'expense',category:'固定支出',item:'房租',amount:70000},
      {date:'2026-01-01',type:'expense',category:'固定支出',item:'水電/稅金/網路',amount:12864.75},
      {date:'2026-01-01',type:'expense',category:'固定支出',item:'床單清洗',amount:4196}
    ]},
    { month: '2026-02', details: [
      {date:'2026-02-07',type:'income',category:'住宿',item:'10位',amount:9000},
      {date:'2026-02-14',type:'income',category:'住宿',item:'司領房',amount:1000},
      {date:'2026-02-17',type:'income',category:'住宿',item:'狗狗清潔費',amount:3700},
      {date:'2026-02-17',type:'income',category:'住宿',item:'春節櫻花/雅房',amount:8000},
      {date:'2026-02-14',type:'income',category:'住宿',item:'兩間梅花房',amount:10800},
      {date:'2026-02-18',type:'income',category:'住宿',item:'10間房包棟',amount:80000},
      {date:'2026-02-24',type:'income',category:'住宿',item:'學弟',amount:1800},
      {date:'2026-02-26',type:'income',category:'住宿',item:'司領房',amount:1000},
      {date:'2026-02-27',type:'income',category:'住宿',item:'包棟+烤肉車+紅茶',amount:91000},
      {date:'2026-02-01',type:'expense',category:'烤肉/食材',item:'食材與相關支出',amount:14280},
      {date:'2026-02-01',type:'expense',category:'營運',item:'錦鯉',amount:900},
      {date:'2026-02-01',type:'expense',category:'烤肉/食材',item:'木炭',amount:760},
      {date:'2026-02-01',type:'expense',category:'營運',item:'飲料紙碗',amount:1000},
      {date:'2026-02-01',type:'expense',category:'營運',item:'貨車加油',amount:500},
      {date:'2026-02-01',type:'expense',category:'營運',item:'魚飼料',amount:250},
      {date:'2026-02-01',type:'expense',category:'早餐',item:'早餐合計',amount:12110},
      {date:'2026-02-01',type:'expense',category:'房務',item:'房務合計',amount:5200},
      {date:'2026-02-01',type:'expense',category:'固定支出',item:'房租',amount:70000},
      {date:'2026-02-01',type:'expense',category:'固定支出',item:'水電/稅金/網路',amount:12864.75},
      {date:'2026-02-01',type:'expense',category:'固定支出',item:'床單清洗',amount:7574}
    ]},
    { month: '2026-03', details: [
      {date:'2026-03-01',type:'income',category:'住宿',item:'張道宮住宿',amount:22000},
      {date:'2026-03-21',type:'income',category:'住宿',item:'林宜樑包棟',amount:31200},
      {date:'2026-03-28',type:'income',category:'住宿/烤肉',item:'包棟+代購烤肉食材',amount:65800},
      {date:'2026-03-14',type:'income',category:'住宿',item:'施正峰現收+紅茶',amount:9200},
      {date:'2026-03-27',type:'income',category:'住宿',item:'廖小姐',amount:23800},
      {date:'2026-03-01',type:'expense',category:'烤肉/食材',item:'烤肉支出合計',amount:10720},
      {date:'2026-03-01',type:'expense',category:'營運',item:'雜費/用品/加油',amount:4070},
      {date:'2026-03-01',type:'expense',category:'房務',item:'房務合計',amount:4200},
      {date:'2026-03-01',type:'expense',category:'早餐',item:'早餐合計',amount:8850},
      {date:'2026-03-01',type:'expense',category:'固定支出',item:'房租',amount:70000},
      {date:'2026-03-01',type:'expense',category:'固定支出',item:'水電/稅金/網路',amount:12864.75},
      {date:'2026-03-01',type:'expense',category:'固定支出',item:'床單清洗',amount:7072}
    ]},
    { month: '2026-04', details: [
      {date:'2026-04-01',type:'income',category:'住宿',item:'7間包棟',amount:28000},
      {date:'2026-04-01',type:'income',category:'烤肉',item:'烤肉',amount:12000},
      {date:'2026-04-24',type:'income',category:'住宿',item:'金吉米住宿',amount:7000},
      {date:'2026-04-24',type:'income',category:'住宿/烤肉',item:'李雅雙住宿+代購烤肉',amount:15500},
      {date:'2026-04-01',type:'expense',category:'食材/營運',item:'4月支出合計',amount:36543},
      {date:'2026-04-01',type:'expense',category:'房務',item:'房務費用',amount:2500},
      {date:'2026-04-01',type:'expense',category:'早餐',item:'早餐',amount:2025},
      {date:'2026-04-01',type:'expense',category:'固定支出',item:'房租',amount:70000},
      {date:'2026-04-01',type:'expense',category:'固定支出',item:'水電/稅金/網路',amount:12864.75},
      {date:'2026-04-01',type:'expense',category:'固定支出',item:'床單清洗',amount:5355}
    ]}
  ]
};

function money(n) {
  const value = Math.round(Number(n) || 0);
  return `$${value.toLocaleString('zh-TW')}`;
}

function typeLabel(type) {
  return type === 'income' ? '收入' : '支出';
}

function sortDetails(details) {
  return details
    .map((d, index) => ({ d, index }))
    .sort((a, b) => {
      // 先分組：收入整區在前，支出整區在後
      if (a.d.type !== b.d.type) {
        return a.d.type === 'income' ? -1 : 1;
      }
      // 同組內依日期由小到大（舊→新）排序
      return a.d.date.localeCompare(b.d.date);
    });
}

function normalizeDataLabels(data) {
  for (const m of data.months || []) {
    for (const d of m.details || []) {
      if (d.item === '附圖費用攤分') d.item = '水電/稅金/網路';
    }
  }
  return data;
}

function isValidDataShape(data) {
  return !!(
    data &&
    typeof data === 'object' &&
    Array.isArray(data.months) &&
    data.months.every((m) => m && typeof m.month === 'string' && Array.isArray(m.details))
  );
}

async function loadData() {
  // Prefer repo data (GitHub-tracked financial_data.json) as source of truth.
  if (window.location.protocol !== 'file:') {
    try {
      const res = await fetch('financial_data.json');
      if (res.ok) {
        const remote = normalizeDataLabels(await res.json());
        if (isValidDataShape(remote)) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
          return remote;
        }
      }
    } catch (_) {
      // Continue to local fallback below.
    }
  }

  const local = localStorage.getItem(STORAGE_KEY);
  if (local) {
    try {
      const parsed = normalizeDataLabels(JSON.parse(local));
      if (!isValidDataShape(parsed)) throw new Error('Invalid data shape');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      return parsed;
    } catch (_) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(FALLBACK_DATA));
  return FALLBACK_DATA;
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let editState = { month: null, index: -1 };

function buildMonthlySummary(data) {
  return (data.months || []).map((m) => {
    let income = 0;
    let expense = 0;
    for (const d of m.details || []) {
      const amt = Number(d.amount) || 0;
      if (d.type === 'income') income += amt;
      else expense += amt;
    }
    return { month: m.month, income, expense, net: income - expense };
  });
}

function renderMonthlySummary(data) {
  const body = document.querySelector('#monthlySummaryTable tbody');
  if (!body) return;
  body.innerHTML = '';

  for (const row of buildMonthlySummary(data)) {
    const tr = document.createElement('tr');
    const netClass = row.net < 0 ? 'negative' : 'positive';
    tr.innerHTML = `
      <td>${row.month}</td>
      <td>${money(row.income)}</td>
      <td>${money(row.expense)}</td>
      <td class="${netClass}">${money(row.net)}</td>
    `;
    body.appendChild(tr);
  }
}

function renderTotalSummary(data) {
  const body = document.querySelector('#totalSummaryTable tbody');
  if (!body) return;
  body.innerHTML = '';

  const monthly = buildMonthlySummary(data);
  const totalIncome = monthly.reduce((sum, x) => sum + x.income, 0);
  const totalExpense = monthly.reduce((sum, x) => sum + x.expense, 0);
  const totalNet = totalIncome - totalExpense;
  const netClass = totalNet < 0 ? 'negative' : 'positive';

  const rows = [
    ['總收入', money(totalIncome), 'positive'],
    ['總支出', money(totalExpense), 'negative'],
    ['總淨利', money(totalNet), netClass]
  ];

  for (const [name, value, cls] of rows) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${name}</td><td class="${cls}">${value}</td>`;
    body.appendChild(tr);
  }
}

function resetFormUI() {
  document.getElementById('formTitle').textContent = '新增明細';
  document.getElementById('submitBtn').textContent = '新增';
  document.getElementById('cancelEditBtn').hidden = true;
  document.getElementById('deleteBtn').hidden = true;
  editState = { month: null, index: -1 };
}

function render(data, selectedMonth) {
  renderMonthlySummary(data);
  renderTotalSummary(data);

  const summaryBody = document.querySelector('#summaryTable tbody');
  const detailBody = document.querySelector('#detailTable tbody');
  summaryBody.innerHTML = '';
  detailBody.innerHTML = '';

  const monthData = data.months.find((m) => m.month === selectedMonth);
  if (!monthData) return;

  let income = 0;
  let expense = 0;

  const sortedDetails = sortDetails(monthData.details);
  sortedDetails.forEach(({ d, index: originalIndex }) => {
    if (d.type === 'income') income += Number(d.amount);
    else expense += Number(d.amount);

    const tr = document.createElement('tr');
    tr.className = d.type === 'income' ? 'row-income' : 'row-expense';
    tr.dataset.index = String(originalIndex);
    tr.dataset.month = monthData.month;
    tr.innerHTML = `
      <td>${d.date}</td>
      <td>${typeLabel(d.type)}</td>
      <td>${d.category}</td>
      <td>${d.item}</td>
      <td>${money(d.amount)}</td>
    `;
    tr.addEventListener('click', () => {
      document.getElementById('month').value = monthData.month;
      document.getElementById('date').value = d.date;
      document.getElementById('type').value = d.type;
      document.getElementById('category').value = d.category;
      document.getElementById('item').value = d.item;
      document.getElementById('amount').value = Math.round(Number(d.amount) || 0);
      document.getElementById('formTitle').textContent = '修改明細';
      document.getElementById('submitBtn').textContent = '更新';
      document.getElementById('cancelEditBtn').hidden = false;
      document.getElementById('deleteBtn').hidden = false;
      editState = { month: monthData.month, index: originalIndex };
    });
    detailBody.appendChild(tr);
  });

  const tr = document.createElement('tr');
  const net = income - expense;
  const netClass = net < 0 ? 'negative' : 'positive';
  tr.innerHTML = `
    <td>${monthData.month}</td>
    <td>${money(income)}</td>
    <td>${money(expense)}</td>
    <td class="${netClass}">${money(net)}</td>
  `;
  summaryBody.appendChild(tr);
}

function setupForm(data) {
  const form = document.getElementById('entryForm');
  const cancelBtn = document.getElementById('cancelEditBtn');
  const deleteBtn = document.getElementById('deleteBtn');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const month = document.getElementById('month').value;
    const entry = {
      date: document.getElementById('date').value,
      type: document.getElementById('type').value,
      category: document.getElementById('category').value,
      item: document.getElementById('item').value,
      amount: Number(document.getElementById('amount').value)
    };

    const target = data.months.find((x) => x.month === month);
    if (!target) return;
    if (editState.index >= 0 && editState.month === month) {
      target.details[editState.index] = entry;
    } else {
      target.details.push(entry);
    }

    saveData(data);
    const currentViewMonth = document.getElementById('viewMonth').value;
    render(data, currentViewMonth);
    form.reset();
    document.getElementById('month').value = currentViewMonth;
    resetFormUI();
  });

  cancelBtn.addEventListener('click', () => {
    form.reset();
    document.getElementById('month').value = document.getElementById('viewMonth').value;
    resetFormUI();
  });

  deleteBtn.addEventListener('click', () => {
    if (editState.index < 0 || !editState.month) return;
    const target = data.months.find((x) => x.month === editState.month);
    if (!target) return;
    if (editState.index >= target.details.length) return;

    target.details.splice(editState.index, 1);
    saveData(data);
    const currentViewMonth = document.getElementById('viewMonth').value;
    render(data, currentViewMonth);
    form.reset();
    document.getElementById('month').value = currentViewMonth;
    resetFormUI();
  });
}

function setupMonthSelectors(data) {
  const viewMonth = document.getElementById('viewMonth');
  const month = document.getElementById('month');
  viewMonth.innerHTML = '';
  month.innerHTML = '';

  for (const m of data.months) {
    const opt1 = document.createElement('option');
    opt1.value = m.month;
    opt1.textContent = m.month;
    viewMonth.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = m.month;
    opt2.textContent = m.month;
    month.appendChild(opt2);
  }

  viewMonth.addEventListener('change', () => {
    render(data, viewMonth.value);
    month.value = viewMonth.value;
  });

  if (data.months.length > 0) {
    viewMonth.value = data.months[0].month;
    month.value = data.months[0].month;
  }
}

function setupDataActions(data) {
  const exportBtn = document.getElementById('exportJsonBtn');
  const syncBtn = document.getElementById('syncXlsxBtn');
  const resetBtn = document.getElementById('resetLocalBtn');
  if (!exportBtn || !syncBtn || !resetBtn) return;

  exportBtn.addEventListener('click', () => {
    const content = JSON.stringify(data, null, 2);
    const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'financial_data.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  syncBtn.addEventListener('click', async () => {
    if (window.location.protocol === 'file:') {
      alert('請改用 http://localhost 開啟，才能一鍵同步到 XLSX。');
      return;
    }

    syncBtn.disabled = true;
    const originalText = syncBtn.textContent;
    syncBtn.textContent = '同步中...';
    try {
      const res = await fetch('/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(`sync failed: ${res.status}`);
      alert('同步完成：已回寫 financial_data.json 並更新 financial_report.xlsx');
    } catch (err) {
      console.error(err);
      alert('同步失敗，請確認你是用 server.py 啟動網站。');
    } finally {
      syncBtn.disabled = false;
      syncBtn.textContent = originalText;
    }
  });

  resetBtn.addEventListener('click', async () => {
    localStorage.removeItem(STORAGE_KEY);
    const refreshed = await loadData();
    data.meta = refreshed.meta;
    data.months = refreshed.months;
    setupMonthSelectors(data);
    const currentViewMonth = document.getElementById('viewMonth').value;
    render(data, currentViewMonth);
    resetFormUI();
  });
}

(function main() {
  loadData()
    .then((data) => {
      if (!isValidDataShape(data)) throw new Error('Invalid loaded data');
      setupMonthSelectors(data);
      render(data, document.getElementById('viewMonth').value);
      setupForm(data);
      setupDataActions(data);
      resetFormUI();
    })
    .catch((err) => {
      console.error(err);
      const data = FALLBACK_DATA;
      setupMonthSelectors(data);
      render(data, document.getElementById('viewMonth').value);
      setupForm(data);
      setupDataActions(data);
      resetFormUI();
    });
})();


