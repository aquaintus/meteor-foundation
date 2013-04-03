Package.describe({
  summary: "the most advanced responsive front-end framework in the world"
});

Package.on_use(function (api) {
  api.use('zepto', 'client');

  api.add_files([
    'js/vendor/custom.modernizr.js',
    'js/vendor/jquery.js',
    'js/vendor/zepto.js'
  ], 'client');

  api.add_files([
    'js/foundation.min.js',
    'js/foundation/foundation.js'
  ], 'client');

  api.add_files([
    'css/foundation.css',
    'css/foundation.min.css',
    'css/normalize.css',
    'humans.txt',
    'js/foundation/foundation.alerts.js',
    'js/foundation/foundation.clearing.js',
    'js/foundation/foundation.cookie.js',
    'js/foundation/foundation.dropdown.js',
    'js/foundation/foundation.forms.js',
    'js/foundation/foundation.joyride.js',
    'js/foundation/foundation.magellan.js',
    'js/foundation/foundation.orbit.js',
    'js/foundation/foundation.placeholder.js',
    'js/foundation/foundation.reveal.js',
    'js/foundation/foundation.section.js',
    'js/foundation/foundation.tooltips.js',
    'js/foundation/foundation.topbar.js',
    'robots.txt'
  ], 'client');
});
