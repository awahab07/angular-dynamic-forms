'use strict';

/**
 * @ngdoc overview
 * @name dynamicFormsApp
 * @description
 * # dynamicFormsApp
 *
 * Main module of the application.
 */
angular
  .module('dynamicFormsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formly',
    'formlyBootstrap',
    /*'ionic',
    'formlyIonic',*/
    'mgo-angular-wizard'
  ])
  .config(function ($routeProvider, formlyConfigProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
