# NoodleFeed

RSS Reader.

## Installing

> mkvirtualenv noodlefeed

> pip install -r requirements.txt

> cp noodlefeed/settings.py-local noodlefeed/settings.py

## Setting up nunjucks

This will allow you to compile your templates for production

To read more about nunjucks, check out the [documentation](http://nunjucks.jlongster.com)

Install [node](http://nodejs.org)

> npm install

Download nunjucks and add it to detour/static/js/lib/nunjucks.js

If you are on development mode, use [nunjucks-dev.js](https://github.com/jlongster/nunjucks/blob/master/browser/nunjucks-dev.js)

If you are on production and have precompiled your templates, use [nunjucks-min.js](https://github.com/jlongster/nunjucks/blob/master/browser/nunjucks-min.js)

## Precompiling templates for nunjucks

In development mode, make sure noodlefeed/static/js/templates.js only has the following:
    define(function() {});

In production mode, run the following:

    node_modules/nunjucks/bin/precompile noodlefeed/static/templates > noodlefeed/static/js/templates.js

## Minifying files with Grunt

> grunt

## Configure client-side settings

If you need to override noodlefeed/static/js/settings.js, create noodlefeed/static/js/local_settings.js and return the new values. For example:

    define([],
      function () {

      'use strict';

      return {
        DEBUG: true
      };
    });

## Creating the database

Copy the following steps to set up and create the initial database::

    cd noodlefeed
    ./migration.py version_control
    ./migration.py upgrade

## Run the app

> python noodlefeed/app.py

## Tests

In the top level of the project, run the following

> nosetests
