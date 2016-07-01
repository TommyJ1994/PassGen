angular.module('starter.services', [])

.factory('Environments', function($cordovaCapture) {

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

    /*
    * Generate SHA3 hash value.
    * @param file - the file to generate a hash value for.
    * @return - the hash value of the file.
    */
    factory.computeHash = function(file)
    {
      var hash = CryptoJS.SHA3(file);
      return hash.toString();
    }

    /*
    * Encrypts a piece of text.
    * @param text - the text to encrypt.
    * @return - the encrypted text.
    */
    factory.encrypt = function(text)
    {

    }

    /*
    * Saves a password to local storage.
    * @param key - the key name.
    * @param value - the password data.
    */
    factory.savePassword = function(key, value)
    {

    }

    /*
    * Removes a password to local storage.
    * @param key - the key name.
    */
    factory.removePassword = function(key)
    {

    }

    /*
    * Retrieves passwords from local storage.
    * @return - the passwords.
    */
    factory.retrievePasswords = function()
    {

    }

	return factory;

});
