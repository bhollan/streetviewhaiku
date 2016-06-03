angular
    .module('app', ['ui.router', 'templates', 'Devise'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'app/views/home.html',
          controller: 'CardsController as cards'
        })
        .state('login',{
          url: '/login',
          templateUrl: 'app/views/_login.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth){
            Auth.currentUser().then(function(user){
              $state.go('home');
            })
          }]
        })
        .state('register',{
          url: '/register',
          templateUrl: 'app/views/_register.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth){
            Auth.currentUser().then(function(user){
              $state.go('home');
            })
          }]
        })
        .state('cards',{
          url: '/cards',
          templateUrl: 'app/views/cards.html',
          controller: 'CardsController as cards'
        })
        .state('cards.browse',{
          url: '/browse',
          templateUrl: 'app/views/cards/browse.html',
          controller: 'BrowseController as browse'
        })
        .state('cards.check',{
          url: '/check',
          templateUrl: 'app/views/cards/check.html',
          controller: 'CheckController as check'
        });
      $urlRouterProvider.otherwise('home');
    });
