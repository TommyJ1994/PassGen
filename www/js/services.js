angular.module('starter')

.factory('Environments', function($cordovaCapture, $cordovaDeviceMotion, $cordovaFile) {

  var factory = {};

    /*
     * Capture audio.
    */

  factory.captureAudio = function() {
    var options = { limit: 1, duration: 3 };
    $cordovaCapture.captureAudio(options).then(function(audioData) {
      console.log(audioData);
      factory.computeHash(audioData);
    }, function(err) {
      alert(err);
    });
  };

   /*
    * Capture an image.
   */
  factory.captureImage = function() {
    var options = { limit: 1 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
      factory.computeHash(imageData);
    }, function(err) {
      alert(err);
    });
  };

    /*
     * Capture motion.
    */
  factory.captureMotion = function() {
    function onSuccess(acceleration) {
      return {x: acceleration.x, y: acceleration.y, z: acceleration.z};
    }

    function onError() {
      return null;
    }

    return $cordovaDeviceMotion.getCurrentAcceleration(onSuccess, onError);
  };

  /*
  * Generate SHA3 hash value.
  * @param object - the object to generate a hash value for.
  * @return - the hash value of the file.
  */
  factory.computeHash = function(object) {
    var objectContent = factory.readFile("", object["0"].fullPath);
    console.log(objectContent);
    var hash = CryptoJS.SHA3(objectContent);
    return hash.toString();
  };

  /*
  * Read the file from disk.
  * @param path - The path to the file
  * @param file - Name of file to read from
  * @return - the file object
  */
  factory.readFile = function(path, file) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
    return $cordovaFile.readAsText(path, file);
  };

  /*
  * Encrypts a piece of text.
  * @param text - the text to encrypt.
  * @return - the encrypted text.
  */
  factory.encrypt = function(text) {

  };

  /*
  * Saves a password to local storage.
  * @param key - the key name.
  * @param value - the password data.
  */
  factory.savePassword = function(key, value) {

  };

  /*
  * Removes a password to local storage.
  * @param key - the key name.
  */
  factory.removePassword = function(key) {

  };

  /*
  * Retrieves passwords from local storage.
  * @return - the passwords.
  */
  factory.retrievePasswords = function() {

  };

  return factory;

});
