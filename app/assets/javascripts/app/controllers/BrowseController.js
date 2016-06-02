function BrowseController(googleStreetViewService, backEndService){
  var ctrl = this;

  this.BASE_URL = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&heading=151.78&pitch=-0.76&location=';

  this.showResult = function(){
    if (ctrl.submission){
      ctrl.image = googleStreetViewService.getStreetView(ctrl.browsed);
    };
  };

  this.deck = [];

  if (this.deck){
    backEndService.getDeck().then(function(response){
      angular.copy(response.data, ctrl.deck);
    });
  }

}

angular
    .module('app')
    .controller('BrowseController', BrowseController);
