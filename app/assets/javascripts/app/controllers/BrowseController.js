function BrowseController(googleStreetViewService, backEndService){
  var ctrl = this;

  this.BASE_URL = backEndService.BASE_URL;
  this.deck = [];

  this.showResult = function(){
    if (ctrl.submission){
      ctrl.image = googleStreetViewService.getStreetView(ctrl.browsed);
    };
  };

  if (this.deck){
    backEndService.getDeck().then(function(response){
      angular.copy(response.data, ctrl.deck);
    });
  }

}

angular
    .module('app')
    .controller('BrowseController', BrowseController);
