angular
    .module('app', ['ui.router', 'templates'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'HomeController as home'
        });
      $urlRouterProvider.otherwise('/');
    });
