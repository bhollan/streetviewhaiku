function ExploreController(backEndService){
  var ctrl = this;

  this.BASE_URL = backEndService.BASE_URL;
  this.deck = [];

  if (this.deck){
    backEndService.getDeck().then(function(response){
      angular.copy(response.data, ctrl.deck);
      ctrl.deck = ctrl.shuffleArray(ctrl.deck);
      ctrl.deck = ctrl.deck.slice(0,4);
    });
  }

  // -> Fisher–Yates shuffle algorithm
  this.shuffleArray = function(array) {
    var array = ctrl.deck
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

};

angular
    .module('app')
    .controller('ExploreController', ExploreController);
