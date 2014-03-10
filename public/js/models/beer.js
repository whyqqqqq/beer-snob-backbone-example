define( function (require) {
  var backbone = require('backbone');

    //create a BeerModel class

  var Beer = Backbone.Model.extend({

    defaults: {
      "beerName":  "Titan",
      "company":   "Great Divide",
      "style":    "IPA"
    }

  });

  return Beer;

});
