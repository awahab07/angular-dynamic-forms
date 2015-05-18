'use strict';

/**
 * @ngdoc function
 * @name dynamicFormsApp.controller:SpaceCtrl
 * @description
 * # SpaceCtrl
 * Controller of the dynamicFormsApp
 */
angular.module('dynamicFormsApp')
  .controller('SpaceCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });