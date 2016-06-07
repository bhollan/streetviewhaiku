function CardsController(backEndService){
  var ctrl = this;

  this.submission = '';
  this.browsed =  this.browsed || backEndService.browsed;
  this.unit = "OORAH!";

  this.setBrowsed = function(){
    ctrl.browsed = angular.fromJson(event.target.attributes.data_card.value);
  };

  this.createCard = function(){
    if(ctrl.submission || ctrl.submission!==""){
      backEndService.newCard({'word':ctrl.submission});
    }
  };

  this.addStar = function(){
    if(ctrl.browsed){
      backEndService.newStar({'word':ctrl.browsed});
    }
  };

}

angular
    .module('app')
    .controller('CardsController', CardsController);
