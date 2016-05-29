angular
    .module('app', ['ui.router', 'templates'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'app/views/home.html',
          controller: 'HomeController as home'
        })
        .state('words',{
          url: '/words',
          templateUrl: 'app/views/words.html',
          controller: 'WordsController as words'
        })
        .state('words.browse',{
          url: '/browse',
          templateUrl: 'app/views/words/browse.html',
          controller: 'BrowseWordsController as worder'
        })
        .state('words.check',{
          url: '/check',
          templateUrl: 'app/views/words/check.html',
          controller: 'CheckWordsController as checker'
        });
      $urlRouterProvider.otherwise('/');
    });
