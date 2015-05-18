'use strict';

/**
 * @ngdoc function
 * @name dynamicFormsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dynamicFormsApp
 */
angular.module('dynamicFormsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
