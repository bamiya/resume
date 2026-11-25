// 1) 상단 메뉴에서 현재 보고 있는 섹션 강조  2) 프로젝트 화면을 눌러 크게 보기
// 이 파일이 실행되지 않아도 모든 내용이 보입니다(이미지는 링크로 새 탭에서 열립니다).
(function () {
  if ('IntersectionObserver' in window) {
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
  }

  var shots = document.querySelectorAll('.shot a');
  if (shots.length && typeof HTMLDialogElement === 'function') {
    var dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.setAttribute('aria-label', '화면 크게 보기');
    var big = document.createElement('img');
    dlg.appendChild(big);
    document.body.appendChild(dlg);
    dlg.addEventListener('click', function () { dlg.close(); });

    shots.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var img = a.querySelector('img');
        big.src = a.getAttribute('href');
        big.alt = img ? img.alt : '';
        dlg.showModal();
      });
    });
  }
})();
