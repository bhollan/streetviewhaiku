function googleStreetViewService($http){
  var ctrl = this;

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
