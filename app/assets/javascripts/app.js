angular
    .module('app', [
        'ui.router',
        'templates',
        'Devise',
        'yaru22.angular-timeago'])
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
              //redirect authenticated users to 'home'
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
              //redirect authenticated users to 'home'
              $state.go('home');
            })
          }]
        })
        .state('users',{
          url: '/users/:userID',
          templateUrl:'app/views/users.html',
          controller: 'UsersController as users'
        })
        .state('cards',{
          url: '/cards',
          templateUrl: 'app/views/cards.html',
          controller: 'CardsController as cards'
        })
        .state('cards.explore',{
          url: '/explore',
          templateUrl: 'app/views/cards/explore.html',
          controller: 'ExploreController as explore'
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
