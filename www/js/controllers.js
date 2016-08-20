angular.module('starter')

.controller('AppCtrl', function($scope, $stateParams, Environments, $ionicPopup) {

  /*
  * Main method which triggers the generation of a password by invoking the generators.
  */
  $scope.generatePassword = function() {
    //showAlert("Record Some Audio And Tap Stop When Done!", 1);
    invokeAudioGenerator();
    //showAlert("Take A Picture!", 2);
    invokeImageGenerator();
    //showAlert("Start Moving Your Device And Then Click 'Ok'", 3);
    invokeMotionGenerator();
  };

  /*
  * Calls audio capture in Environments service.
  */
  function invokeAudioGenerator() {
    Environments.captureAudio();
  }

  /*
  * Calls image capture in Environments service.
  */
  function invokeImageGenerator() {
    Environments.captureImage();
  }

  /*
  * Calls image capture in Environments service.
  */
  function invokeMotionGenerator() {
    Environments.captureMotion();
  }

  function showAlert(text, step) {
    $ionicPopup.alert({
      title: 'Step ' + step + '/3',
      template: text
    });
  }

});
