angular.module('starter.services', [])

.factory('Environments', function() {

  var factory = {};

	factory.captureAudio = function() {
      var options = { limit: 1, duration: 10 };
      $cordovaCapture.captureAudio(options).then(function(audioData) {
        // Success! Audio data is here
      }, function(err) {
        // An error occurred. Show a message to the user
      });
		}

	factory.captureImage = function() {
        var options = { limit: 1 };

        $cordovaCapture.captureImage(options).then(function(imageData) {
          // Success! Image data is here
        }, function(err) {
          // An error occurred. Show a message to the user
        });
		}

    factory.getHash = function()
    {

    }

    factory.savePassword = function()
    {

    }

    factory.encrypt = function()
    {

    }

	return factory;

});
