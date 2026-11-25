// 상단 메뉴에서 현재 보고 있는 섹션만 강조합니다.
// 이 파일이 없거나 실행되지 않아도 모든 내용이 그대로 보입니다.
(function () {
  if (!('IntersectionObserver' in window)) return;

  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('active'); });
      var a = map[e.target.id];
      if (a) a.classList.add('active');
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  Object.keys(map).forEach(function (id) {
    var s = document.getElementById(id);
    if (s) spy.observe(s);
  });
})();
