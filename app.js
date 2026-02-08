(function () {
  var BUG_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cellipse fill='%23c41e3a' cx='32' cy='40' rx='20' ry='14'/%3E%3Cellipse fill='%231a1a1a' cx='32' cy='28' rx='14' ry='12'/%3E%3Cellipse fill='%23c41e3a' cx='32' cy='26' rx='8' ry='6'/%3E%3Ccircle fill='%231a1a1a' cx='24' cy='38' r='3'/%3E%3Ccircle fill='%231a1a1a' cx='32' cy='42' r='3'/%3E%3Ccircle fill='%231a1a1a' cx='40' cy='38' r='3'/%3E%3Cpath fill='none' stroke='%231a1a1a' stroke-width='2' d='M18 22 Q20 14 32 12 Q44 14 46 22'/%3E%3C/svg%3E";

  function init() {
    var link = document.createElement('a');
    link.href = 'win.html';
    link.className = 'bug-link';

    var img = document.createElement('img');
    img.src = BUG_IMG;
    img.alt = 'Bug';
    img.className = 'bug-image';

    var padding = 8;
    var range = 100 - 2 * padding - 10;
    link.style.left = (padding + Math.random() * range) + '%';
    link.style.top = (padding + Math.random() * range) + '%';

    link.appendChild(img);
    document.body.appendChild(link);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
