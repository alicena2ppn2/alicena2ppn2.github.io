// 다크 모드 — 선택은 브라우저(localStorage)에 저장되어 모든 페이지에서 유지됩니다.
(function () {
  var KEY = 'portfolio-theme';
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }
  function apply(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }

  // 페이지가 그려지기 전에 먼저 적용해서 깜빡임 방지
  apply(saved());

  function updateButton(btn) {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.innerHTML = dark ? '<i class="ph-sun"></i>' : '<i class="ph-moon"></i>';
    btn.setAttribute('aria-label', dark ? '밝은 화면으로' : '어두운 화면으로');
    btn.title = dark ? 'Light mode' : 'Dark mode';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelector('nav .nav-links');
    if (!links) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    updateButton(btn);
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      save(next);
      updateButton(btn);
    });
    links.appendChild(btn);
  });
})();
