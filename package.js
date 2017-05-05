(function() {
  Package.info = {
    name: 'export-lazily',
    version: '0.0.1',
    documentation: 'README.md',
  };
  Package.describe(Package.info);

  Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use('ecmascript');

    api.mainModule('example.client.js', 'client');
    api.mainModule('example.server.js', 'server');
  });

  Package.onTest(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use('ecmascript');
    api.use('dispatch:mocha-browser');

    api.mainModule('example.tests.js');
  });
})();
