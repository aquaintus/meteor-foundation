Package.describe({
  summary: "the most advanced responsive front-end framework in the world"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    // css
    'css/foundation.css',
    'css/foundation.min.css',
    'css/normalize.css',
    // images
    // javascript
    'js/foundation/foundation.alerts.js',
    'js/foundation/foundation.clearing.js',
    'js/foundation/foundation.cookie.js',
    'js/foundation/foundation.dropdown.js',
    'js/foundation/foundation.forms.js',
    'js/foundation/foundation.joyride.js',
    'js/foundation/foundation.js',
    'js/foundation/foundation.magellan.js',
    'js/foundation/foundation.orbit.js',
    'js/foundation/foundation.placeholder.js',
    'js/foundation/foundation.reveal.js',
    'js/foundation/foundation.section.js',
    'js/foundation/foundation.tooltips.js',
    'js/foundation/foundation.topbar.js',
    'js/foundation.min.js',
    'js/vendor/custom.modernizr.js',
    'js/vendor/jquery.js',
    'js/vendor/zepto.js',
    //text
    'humans.txt',
    'robots.txt',
  ], 'client');
});
