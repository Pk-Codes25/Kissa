(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('kissa-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var initial = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    setLabel(btn, initial);

    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('kissa-theme', next);
      setLabel(btn, next);
    });
  });

  function setLabel(btn, theme) {
    btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }
})();
