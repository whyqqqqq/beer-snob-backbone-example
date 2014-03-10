define( function (require) { //pass require as an argument to avoid standard require.js pattern
                              // allows us to do require statements below
  var backbone = require('backbone'); // lib dependency

  var BeerView = require('./beerview'); // bring in our beer view

  var AppView = Backbone.View.extend({ //create an AppView class

    el: '#beer-list-page',            //where we want the app view to go

    events: {
      'click #submit-beer': 'updateBeerList' //when click of #submit-beer
                                            // update the #beer-list view / app view
    },

    initialize: function () {
      this.childViews = [];       //start with an empty list of beers
      this.listenTo(this.collection, 'add', this.render); // listen to collection, trigger render
      this.$beerList = this.$el.find('#beer-list'); //save jquery element as variable
      this.render();
    },

    render: function () {

      var self = this; // maintain scope of 'this' inside closures

      this.childViews.forEach(function (view) {
        view.remove(); //removes all beer views from DOM and stops listeners
      });

      this.childViews = []; //removes beer views from this local array

      this.collection.each(function (everyBeer) {
        var beerView = new BeerView({model: everyBeer});   // make new beer view instance
                                                           // with an associated model
        self.$beerList.append(beerView.$el);               // add the element property of the beerview
                                                          // to the #beer-list view/ app view
        self.childViews.push(beerView);                   // add beer view to array/ list of beers
      });

    },

    updateBeerList: function () { //get inputs
      var $beerNameInput = this.$el.find('#input-beer').val();
      var $beerCompanyInput = this.$el.find('#input-beer-company').val();
      var $beerStyleInput = this.$el.find('#input-beer-style').val();
                                    //set model values from input values
      this.collection.add({  beerName: $beerNameInput,
                             company: $beerCompanyInput,
                             style: $beerStyleInput
                         });

      this.$el.find('input').val(''); //empty the inputs each time
    }
  });

  return AppView; // returns this module so require can do magic things
                  // this is what the callback function inside of the
                  // define function call is returning
                  // define( function (require) {...});

});
