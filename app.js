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
    'sticky-broken',
    'invisible-text',
    'low-contrast',
    'focus-ring-gone',
    'placeholder-invisible',
    'overflow-hidden',
    'text-overflow-missing',
    'scrollbar-hidden',
    'wrong-z-index',
    'modal-behind',
    'dropdown-under',
    'hover-broken',
    'wrong-cursor',
    'active-state-gone',
    'disabled-looks-enabled',
    'link-not-underlined',
    'font-size-tiny',
    'font-size-huge',
    'line-height-cramped',
    'image-stretched',
    'input-too-narrow',
    'border-flash',
    'duplicate-content',
    'animation-flicker',
    'button-does-nothing'
  ];

  function pickBug() {
    var index = Math.floor(Math.random() * BUGS.length);
    return BUGS[index];
  }

  function init() {
    var bug = pickBug();
    document.documentElement.dataset.bug = bug;

    if (bug === 'button-does-nothing') {
      var btn = document.querySelector('.btn-primary');
      if (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
        });
      }
    }

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
