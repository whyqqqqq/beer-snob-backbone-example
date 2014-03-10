define( function (require) {
  var backbone = require('backbone');

  var Beer = require('../models/beer');

  //create a BeerList collection class

  var BeerList = Backbone.Collection.extend({

    model: Beer

  });

  return BeerList;
});
