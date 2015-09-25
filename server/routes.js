/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/invites', require('./api/invite'));
  app.use('/api/kontragents', require('./api/kontragent'));
  app.use('/api/accounts', require('./api/account'));
  app.use('/api/operations', require('./api/operation'));
  app.use('/api/currency', require('./api/currency'));
  app.use('/api/agents', require('./api/agent'));
  app.use('/api/things', require('./api/thing'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
