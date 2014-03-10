require.config({  //config info goes in top-level js file.
                  //alternatively, we might put this object in a separate config file
  baseUrl: 'js',  //base url path for main.js
  paths: {        //aliases so that we don't have to put 'libs/backbone' in every module
      'require': 'libs/require',
      'underscore': 'libs/underscore',
      'backbone': 'libs/backbone',
      'jquery': 'libs/jquery'
  }

});

define( function (require) { //pass in require to do node-like require statements

  var backbone = require('backbone'); //some dependencies

  var Beers = require('collections/beers'); //my modules
  var AppView = require('views/app');

  $(function () { //on ready

    var app = {};
    window.app = app; //makes app object visible in chrome dev Tools console

    var beers = new Beers({}); //instantiate a new beers collection

    var appView = new AppView({collection: beers}); //new app view,
                                                    //tied to a particular collection
    app.appView = appView; // makes appView visible in chrome dev tools console
    app.beers = beers; //makes beer model visible in chrome dev Tools console

  });

});
