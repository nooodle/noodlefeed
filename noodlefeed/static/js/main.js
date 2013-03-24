define(['jquery', 'settings', 'local_settings', 'nunjucks', 'templates'],
  function($, settings, localSettings, nunjucks) {

  'use strict';

  var DEBUG = localSettings.DEBUG || settings.DEBUG;

  if (DEBUG || !nunjucks.env) {
    // If not precompiled, create an environment with an HTTP loader
    nunjucks.env = new nunjucks.Environment(new nunjucks.HttpLoader('/static/templates'));
  }


  var currentUser = localStorage.getItem('personaEmail');

  navigator.id.watch({
    loggedInUser: currentUser,
    onlogin: function (assertion) {
      body.find('.overlay').fadeIn();
      $.ajax({
        type: 'POST',
        url: '/authenticate',
        data: { assertion: assertion },
        cache: false,
        success: function (res, status, xhr) {
          localStorage.setItem('personaEmail', res.email);
          body.find('#inner-wrapper').html(
            nunjucks.env.getTemplate('dashboard.html').render()
          );
          message.getAll(nunjucks);
        },
        error: function(res, status, xhr) {
          self.status
            .addClass('error')
            .text('There was an error logging in')
            .addClass('on');

          settings.statusTimer(self.status);
        }
      });
    },
    onlogout: function() {
      $.ajax({
        url: '/logout',
        type: 'POST',
        cache: false,
        success: function(res, status, xhr) {
          localStorage.removeItem('personaEmail');
          window.location.reload();
        },
        error: function(res, status, xhr) {
          console.log('logout failure ', res);
        }
      });
    }
  });

  body.on('click', function (ev) {
    var self = $(ev.target);

    switch (self.data('action')) {
      case 'login-persona':
        ev.preventDefault();
        navigator.id.request();
        break;

      case 'logout':
        ev.preventDefault();
        navigator.id.logout();
        break;

      // TODO: Add other click events
    }
  });

  body.on('submit', 'form', function (ev) {
    var self = $(ev.target);

    // TODO: add forms
  });
});
