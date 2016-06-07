function UsersController(backEndService, $stateParams, Auth){
  var ctrl = this;

  this.browsed =  this.browsed || backEndService.browsed;
  this.BASE_URL = backEndService.BASE_URL;
  this.deck = [];
  this.starred_cards = [];
  this.cards_starred = [];

  this.setBrowsed = function(){
    ctrl.browsed = angular.fromJson(event.target.attributes.data_card.value);
  };

  this.createCard = function(){
    if(ctrl.submission || ctrl.submission!==""){
      backEndService.newCard({'word':ctrl.submission});
    }
  };

  if (this.deck){
    backEndService.getUser($stateParams.userID).then(function(response){
      angular.copy(response.data.cards, ctrl.deck);
      angular.copy(response.data.starred_cards, ctrl.starred_cards);
      angular.copy(response.data.cards_starred, ctrl.cards_starred);
      console.log(response);
    });
  }


}

angular
    .module('app')
    .controller('UsersController', UsersController);
