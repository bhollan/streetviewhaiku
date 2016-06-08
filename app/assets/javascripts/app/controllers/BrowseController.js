function BrowseController(backEndService){
  var ctrl = this;

  this.BASE_URL = backEndService.BASE_URL;
  this.API_KEY = backEndService.API_KEY;
  this.deck = [];
  this.sorterator = "'created_at'";
  this.searchText = "";

  if (this.deck){
    backEndService.getDeck().then(function(response){
      angular.copy(response.data, ctrl.deck);
    });
  }
}

angular
    .module('app')
    .controller('BrowseController', BrowseController);
