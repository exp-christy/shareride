angular.module("app")
  .controller("UserHomeController", UserHomeController);

function UserHomeController($state, $firebaseAuth, $firebaseArray) {
  var ctrl = this;
  var userref = firebase.database().ref().child("user");
  ctrl.userList = $firebaseArray(userref);
  ctrl.$onInit = init;
  ctrl.authObj = $firebaseAuth();


  var storageRef = firebase.storage().ref();
  var newRef = storageRef.child('login.jpg');
  var newImagesRef = storageRef.child('images/login.jpg');
  storageRef.child('images/login.jpg').getDownloadURL().then(function (url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function (event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    var img = document.getElementById('myimg');
    img.src = url;
 // }).catch(function (error) {

  });

  function init() {
    ctrl.firebaseUser = ctrl.authObj.$getAuth();
    if (ctrl.firebaseUser) {
      console.log("Signed in");
      ctrl.userList.$loaded().then(function () {
        var numberOfUsers = ctrl.userList.length;
        var i;
        for (i = 0; i < numberOfUsers; i++) {
          if (ctrl.firebaseUser.uid === ctrl.userList[i].firebaseUserId) {
            ctrl.userName = ctrl.userList[i].firstName;
            ctrl.userName1 = ctrl.userList[i].lastName;
            ctrl.company = ctrl.userList[i].company;
          }
        }
      });
    } else {
      $state.go('myHome');
      console.log("Signed out");
    }
  }
}
