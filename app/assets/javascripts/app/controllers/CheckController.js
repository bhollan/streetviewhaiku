function CheckController(googleStreetViewService, backEndService){
  var ctrl = this;

  this.BASE_URL = backEndService.BASE_URL;
  this.API_KEY = backEndService.API_KEY;

  this.showResult = function(){
    if (ctrl.submission){
      ctrl.image = googleStreetViewService.getStreetView(ctrl.submission);
    };
  };

}

angular
    .module('app')
    .controller('CheckController', CheckController);
