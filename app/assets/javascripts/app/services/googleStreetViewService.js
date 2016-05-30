function googleStreetViewService($http){
  var ctrl = this;

  this.BASE_URL = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&heading=151.78&pitch=-0.76&location=';

  this.getStreetView = function(searchTerm){
    return $http.get(ctrl.BASE_URL + searchTerm)
      .then(function(response){
        return response.data;
      });
  };
}

angular
    .module('app')
    .service('googleStreetViewService', googleStreetViewService);
