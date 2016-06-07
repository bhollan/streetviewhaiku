function UsersController(backEndService, $stateParams, Auth){
  var ctrl = this;

  this.browsed =  this.browsed || backEndService.browsed;
  this.BASE_URL = backEndService.BASE_URL;
  this.deck = [];
  this.starred_cards = [];
  this.cards_starred = [];
  this.current_user = {};

  Auth.currentUser().then(function(user){
    ctrl.current_user = user;
  });

  this.editable = function(){
    return ctrl.current_user.id === ctrl.browsed.user_id;
  };

  this.togglePublic = function(){
    backEndService.changePublic(ctrl.browsed.id)
      .then(function(response){
        console.log(response);
      });
  }

  this.setBrowsed = function(){
    ctrl.browsed = angular.fromJson(event.target.attributes.data_card.value);
  };

  if (this.deck){
    backEndService.getUser($stateParams.userID).then(function(response){
      angular.copy(response.data.cards, ctrl.deck);
      angular.copy(response.data.starred_cards, ctrl.starred_cards);
      angular.copy(response.data.cards_starred, ctrl.cards_starred);
    });
  }

  ;

}

angular
    .module('app')
    .controller('UsersController', UsersController);
