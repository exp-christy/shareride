angular
  .module('app')
  .controller('ImageUploadController', ImageUploadController);

function ImageUploadController() {
  var ctrl = this;

  ctrl.images = [];
  ctrl.imagePressed = imagePressed;
  var options = {
    maximumImagesCount: 1,
    width: 200,
    height: 200,
    quality: 80
  };

  function imagePressed() {
    $cordovaImagePicker.getPictures(options)
      .then(function (results) {

        for (var i = 0; i < results.length; i++) {
          ctrl.images.push(results);
          console.log('Image URI: ' + results[i]);
        }
      }, function (error) {
        // error getting photos
      });
  }

};
