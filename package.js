Package.describe({
  name: 'jonshaffer:microsoft',
  version: '1.0.1',
  summary: 'An implementation of the Microsoft OAuth flow.',
  git: 'https://github.com/jonshaffer/meteor-microsoft',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.export('Microsoft');

  api.addFiles('client/configure.html', 'client');
  api.addFiles('server/server.js', 'server');
  api.addFiles(['client/client.js', 'client/configure.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('jonshaffer:microsoft');

  // Tests will follow soon!
  api.addFiles([]);
});
