function backEndService($http){
  var ctrl = this;
  this.browsed = '';
  this.BASE_URL = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&heading=151.78&pitch=-0.76&location=';

  //key not for access/security, just for metrics
  this.API_KEY = '&key=AIzaSyDpBxnXwOB7uhkOI9GUdLx6ow_o6EpYxsk';

  this.getDeck = function(){
    return $http.get('/cards.json');
  };

  this.newCard = function(card){
    return $http.post('/cards.json', card);
  };

  this.newStar = function(star_params){
    return $http.post('/cards/' + star_params.word.id + '/stars.json', star_params);
  };

  this.getUser = function(id){
    return $http.get('/users/' + id + '.json');
  };

  this.changePublic = function(id){
    return $http.patch('/cards/' + id + '.json');
  };

}

angular
    .module('app')
    .service('backEndService', backEndService);
