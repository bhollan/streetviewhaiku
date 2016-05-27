function HomeController(){
  this.unit = "YO, you got street?";
}

angular
    .module('app')
    .controller('HomeController', HomeController);
