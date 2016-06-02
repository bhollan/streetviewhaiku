function backEndService($http){
  var ctrl = this;
  this.browsed = '';

  this.getDeck = function(){
    return $http.get('/cards.json');
  };

  this.newCard = function(card){
    return $http.post('/cards.json', card);
  };
}

angular
    .module('app')
    .service('backEndService', backEndService);
