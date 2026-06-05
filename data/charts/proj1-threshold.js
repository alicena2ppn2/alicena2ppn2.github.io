const chartData = {
  thresholds: [0.00, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95, 1.00],
  dlMlp: [0.35, 0.35, 0.35, 0.35, 0.33, 0.32, 0.28, 0.10, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
  logReg: [0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.40, 0.43, 0.31, 0.31, 0.25, 0.20, 0.20, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
  randFor: [0.37, 0.37, 0.37, 0.37, 0.37, 0.35, 0.33, 0.05, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
};

function drawThresholdChart() {
  var thresholds = chartData.thresholds;
  var dlMlp = chartData.dlMlp;
  var logReg = chartData.logReg;
  var randFor = chartData.randFor;

  new Chart(document.getElementById('projectChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: thresholds.map(function(v) { return v.toFixed(2); }),
      datasets: [
        { label: 'logistic_regression', data: logReg, borderColor: '#2563eb', borderWidth: 3, pointRadius: 1.5, tension: 0.3, fill: false },
        { label: 'DL_MLP', data: dlMlp, borderColor: '#4fd1c5', borderWidth: 3, pointRadius: 1.5, tension: 0.3, fill: false },
        { label: 'random_forest', data: randFor, borderColor: '#f6ad55', borderWidth: 3, pointRadius: 1.5, tension: 0.3, fill: false }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#6b6b8a', font: { family: 'Inter', size: 12 }, boxWidth: 12 } },
        tooltip: { backgroundColor: '#fff', titleColor: '#1a1a2e', bodyColor: '#6b6b8a', borderColor: 'rgba(124,109,250,0.3)', borderWidth: 1 }
      },
      scales: {
        x: { ticks: { color: '#6b6b8a', font: { family: 'Inter', size: 11 }, maxTicksLimit: 11 }, grid: { color: 'rgba(0,0,0,0.12)' }, title: { display: true, text: 'threshold', color: '#6b6b8a', font: { family: 'Inter', size: 11 } } },
        y: { min: 0, max: 0.5, ticks: { color: '#6b6b8a', font: { family: 'Inter', size: 11 }, stepSize: 0.1 }, grid: { color: 'rgba(0,0,0,0.12)' }, title: { display: true, text: 'F1 Score', color: '#6b6b8a', font: { family: 'Inter', size: 11 } } }
      }
    }
  });
}
