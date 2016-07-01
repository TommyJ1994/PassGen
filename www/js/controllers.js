angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $stateParams, Environments) {

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
    var audio = Environments.captureAudio();
    var audioHash = Environments.computeHash(audio);
  }

});
