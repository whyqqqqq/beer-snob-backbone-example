define( function (require) {
  var backbone = require('backbone');

  var beer = require('models/beer');

  var BeerView = Backbone.View.extend({

    tagName: 'li',

    className: 'list-group-item',

    initialize: function () {

      this.render();

    },

    render: function () {

      var beerName = this.model.get('beerName');
      var company = this.model.get('company');
      var style = this.model.get('style');

      this.$el.html(beerName + '<ul>' +
                     '<li>Company: ' + company + '</li>' +
                    '<li>Style: ' + style + '</li></ul>'
                    );

    }

  });

  return BeerView

});
