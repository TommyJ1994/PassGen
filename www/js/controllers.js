angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $stateParams, $cordovaCapture) {

  /*
  * Main method which triggers the generation of a password by invoking the generators.
  */
  $scope.generatePassword = function()
  {
    invokeAudioGenerator();
  }

  /*
  *
  */
  function invokeAudioGenerator()
  {

  }

});
