(function () {
  var BUGS = [
    '',
    'misaligned-button',
    'broken-spacing',
    'off-screen',
    'stacked-wrong',
    'centering-broken',
    'grid-gap-zero',
    'max-width-gone',
    'invisible-text',
    'low-contrast',
    'placeholder-invisible',
    'overflow-hidden',
    'text-overflow-missing',
    'scrollbar-hidden',
    'wrong-z-index',
    'disabled-looks-enabled',
    'link-not-underlined',
    'font-size-tiny',
    'font-size-huge',
    'line-height-cramped',
    'image-stretched',
    'input-too-narrow',
    'border-flash',
    'duplicate-content'
  ];

  function pickBug() {
    var index = Math.floor(Math.random() * BUGS.length);
    return BUGS[index];
  }

  var BUG_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cellipse fill='%23c41e3a' cx='32' cy='40' rx='20' ry='14'/%3E%3Cellipse fill='%231a1a1a' cx='32' cy='28' rx='14' ry='12'/%3E%3Cellipse fill='%23c41e3a' cx='32' cy='26' rx='8' ry='6'/%3E%3Ccircle fill='%231a1a1a' cx='24' cy='38' r='3'/%3E%3Ccircle fill='%231a1a1a' cx='32' cy='42' r='3'/%3E%3Ccircle fill='%231a1a1a' cx='40' cy='38' r='3'/%3E%3Cpath fill='none' stroke='%231a1a1a' stroke-width='2' d='M18 22 Q20 14 32 12 Q44 14 46 22'/%3E%3C/svg%3E";

  function placeBugImage() {
    var img = document.createElement('img');
    img.src = BUG_IMG;
    img.alt = '';
    img.className = 'bug-image';
    img.setAttribute('aria-hidden', 'true');
    var padding = 8;
    var maxX = Math.max(0, 100 - 12);
    var maxY = Math.max(0, 100 - 12);
    img.style.left = (padding + Math.random() * (maxX - 2 * padding)) + '%';
    img.style.top = (padding + Math.random() * (maxY - 2 * padding)) + '%';
    document.body.appendChild(img);
  }

  function init() {
    var bug = pickBug();
    document.documentElement.dataset.bug = bug;

    placeBugImage();

    if (location.search.indexOf('debug=1') !== -1) {
      var badge = document.getElementById('debug-badge');
      if (badge) {
        badge.textContent = 'Bug: ' + (bug || 'none');
        badge.classList.add('visible');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
