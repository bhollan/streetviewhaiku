function CardsController(backEndService){
  var ctrl = this;

  this.test = 'YES!';
  this.submission = '';
  this.browsed =  this.browsed || backEndService.browsed;
  this.unit = "OORAH!";

  this.setBrowsed = function(){
    ctrl.browsed = event.target.textContent;
  };

  this.createCard = function(){
    if(ctrl.submission || ctrl.submission!==""){
      backEndService.newCard({'word':ctrl.submission});
    }
  };


}

angular
    .module('app')
    .controller('CardsController', CardsController);
