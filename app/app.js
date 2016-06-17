var app = angular.module('weatherApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'app/templates/home.html',
          controller: 'homeCtrl'
      })
      .state('weather', {
          url: '/weather',
          templateUrl: 'app/templates/weather.html',
          controller: 'weatherCtrl'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'app/templates/about.html',
          controller: 'aboutCtrl'
      });

  $urlRouterProvider
      .otherwise('/');

});
