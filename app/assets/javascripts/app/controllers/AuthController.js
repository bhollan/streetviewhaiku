function AuthController ($scope, $state, $window, Auth){
  $scope.login = function(){
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function(){
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.logout = function(){
    $window.location.reload();
  };
};

angular
    .module('app')
    .controller('AuthController', AuthController);
