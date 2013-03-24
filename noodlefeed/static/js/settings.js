define(['jquery'],
  function ($) {

  'use strict';

  var statusTimer = function (status) {
    setTimeout(function () {
      status.removeClass('on');
    }, 2200); // milliseconds
  };

  return {
    body: $('body'),
    status: $('#status'),
    statusTimer: statusTimer,
    API_VERSION: '1.0',
    DEBUG: false
  };
});
