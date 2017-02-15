angular
  .module('app')
  .controller('ImageUploadController', ImageUploadController);


function ImageUploadController($firebaseArray) {
  var ctrl = this;
  ctrl.uploadFile = uploadFile;
  ctrl.onchange = onchange;
  var storageRef = firebase.storage().ref();
  var picRef = storageRef.child('rides.jpg');
  var picImagesRef = storageRef.child('images/rides.jpg');
  $('#nameImg').change(onchange);

  function onchange(event) {
    var file = event.originalEvent.currentTarget.files[0];
    uploadFile(file);

  }

  function uploadFile(file) {
    var uploadTask = storageRef.child(file.name).put(file);
  }
};
