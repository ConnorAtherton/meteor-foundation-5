Package.describe({
  summary: "A meteor package for foundation 5 - the most advanced front-end framework in the world."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');

  var path = Npm.require('path'),
      asset_path = path.join('foundation');

  // js
  api.add_files(path.join(asset_path, 'js/vendor/custom.modernizr.js'), 'client');
  api.add_files(path.join(asset_path, 'js/vendor/fastclick.js'), 'client');
  api.add_files(path.join(asset_path, 'js/vendor/jquery.autocomplete.js'), 'client');
  api.add_files(path.join(asset_path, 'js/vendor/jquery.cookie.js'), 'client');
  api.add_files(path.join(asset_path, 'js/vendor/placeholder.js'), 'client');
  api.add_files(path.join(asset_path, 'js/foundation.js'), 'client');
  api.add_files(path.join(asset_path, 'js/activate-foundation.js'), 'client');

  // css
  // Include unminified version because meteor will
  // minify before deploying
  api.add_files(path.join(asset_path, 'css', 'normalize.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'foundation.css'), 'client');

  // included after the standard foundation css so
  // that its styles take precedence.
  api.add_files(path.join('foundation-override.css'), 'client');
});
