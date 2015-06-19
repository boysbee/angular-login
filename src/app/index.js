'use strict';

angular.module('testLogin', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
