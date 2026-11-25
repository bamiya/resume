// 1) 상단 메뉴에서 현재 보고 있는 섹션 강조
// 2) ERP 화면 슬라이드(이전·다음·점·스와이프·방향키)  3) 화면을 눌러 크게 보기
// 이 파일이 실행되지 않아도 모든 내용이 보입니다(슬라이드는 옆으로 스크롤, 이미지는 새 탭 링크).
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

  // ---- 슬라이드 ----
  var box = document.querySelector('.shots');
  var track = box && box.querySelector('.shots-track');
  var slides = track ? track.querySelectorAll('.shot') : [];
  if (track && slides.length > 1) {
    box.classList.add('is-enhanced');

    var stage = box.querySelector('.shots-stage');
    var nav = document.createElement('div');
    nav.className = 'shots-nav';
    // 이미지 양옆 가운데 화살표(이미지 높이 영역 안에서 세로 중앙)
    var arrows = document.createElement('div');
    arrows.className = 'shots-arrows';
    var prev = document.createElement('button');
    prev.type = 'button'; prev.className = 'shots-btn shots-prev'; prev.textContent = '\u2039'; prev.setAttribute('aria-label', '이전 화면');
    var next = document.createElement('button');
    next.type = 'button'; next.className = 'shots-btn shots-next'; next.textContent = '\u203A'; next.setAttribute('aria-label', '다음 화면');
    arrows.appendChild(prev); arrows.appendChild(next);
    stage.appendChild(arrows);
    var dots = document.createElement('div');
    dots.className = 'shots-dots';
    var count = document.createElement('span');
    count.className = 'shots-count';
    count.setAttribute('aria-live', 'polite');

    var dotEls = [];
    Array.prototype.forEach.call(slides, function (_, i) {
      var d = document.createElement('button');
      d.type = 'button'; d.className = 'shots-dot';
      d.setAttribute('aria-label', (i + 1) + '번째 화면');
      d.addEventListener('click', function () { go(i); });
      dots.appendChild(d); dotEls.push(d);
    });
    nav.appendChild(dots); nav.appendChild(count);
    box.appendChild(nav);

    var current = 0, target = 0, lockUntil = 0;
    function width() { return track.clientWidth || 1; }
    function go(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      target = i; lockUntil = Date.now() + 700;       // 연타해도 목표 위치부터 계산
      track.scrollTo({ left: i * width(), behavior: 'smooth' });
    }
    function sync() {
      var i = Math.round(track.scrollLeft / width());
      i = Math.max(0, Math.min(slides.length - 1, i));
      current = i;
      if (Date.now() > lockUntil) target = i;
      dotEls.forEach(function (d, k) {
        if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
      count.textContent = (i + 1) + ' / ' + slides.length;
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
    }
    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; sync(); });
    }, { passive: true });
    window.addEventListener('resize', function () {
      track.scrollTo({ left: current * width(), behavior: 'auto' });
      sync();
    });
    prev.addEventListener('click', function () { go(target - 1); });
    next.addEventListener('click', function () { go(target + 1); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(target - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(target + 1); }
    });
    sync();
  }

  // ---- 크게 보기 ----
  var shots = document.querySelectorAll('.shot a');
  if (shots.length && typeof HTMLDialogElement === 'function') {
    var dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.setAttribute('aria-label', '화면 크게 보기');
    var big = document.createElement('img');
    dlg.appendChild(big);
    document.body.appendChild(dlg);
    dlg.addEventListener('click', function () { dlg.close(); });

    Array.prototype.forEach.call(shots, function (a) {
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
