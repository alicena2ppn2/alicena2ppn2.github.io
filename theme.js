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

    // 휴대폰(600px 이하): 메뉴 글자 대신 ☰ 버튼 → 아래로 펼쳐지는 메뉴
    var nav = links.closest('nav') || links.parentNode;
    var burger = document.createElement('button');
    burger.type = 'button';
    burger.className = 'nav-burger';
    burger.setAttribute('aria-label', '메뉴 열기');
    burger.innerHTML = '<span></span><span></span>';
    var menu = document.createElement('div');
    menu.className = 'm-menu';
    links.querySelectorAll('a').forEach(function (a) {
      var c = a.cloneNode(true);
      c.addEventListener('click', function () { nav.classList.remove('menu-open'); });
      menu.appendChild(c);
    });
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('menu-open');
      burger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    nav.appendChild(burger);
    nav.appendChild(menu);

    // 휴대폰: 화면 아래 떠 있는 아이콘 메뉴 바
    var icons = { TIMELINE: 'ph-clock', PROJECTS: 'ph-grid-four', ACTIVITIES: 'ph-sparkle', CONTACT: 'ph-paper-plane-tilt' };
    var dock = document.createElement('div');
    dock.className = 'm-dock';
    links.querySelectorAll('a').forEach(function (a) {
      var key = a.textContent.trim().toUpperCase();
      if (!icons[key]) return;
      var d = document.createElement('a');
      d.href = a.getAttribute('href');
      d.setAttribute('aria-label', a.textContent.trim());
      d.innerHTML = '<i class="' + icons[key] + '"></i>';
      if (location.pathname.split('/').pop() === d.getAttribute('href')) d.className = 'on';
      dock.appendChild(d);
    });
    document.body.appendChild(dock);
  });
})();
