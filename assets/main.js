// 인쇄 버튼만 담당합니다. JS가 꺼져 있어도 페이지는 그대로 읽힙니다.
document.querySelectorAll('[data-print]').forEach(function (btn) {
  btn.addEventListener('click', function () { window.print(); });
});
