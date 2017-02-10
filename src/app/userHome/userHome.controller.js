angular.module("app")
  .controller("UserHomeController", UserHomeController);

function UserHomeController($state, $firebaseAuth, $firebaseArray) {
  var ctrl = this;
  var userref = firebase.database().ref().child("user");
  ctrl.userList = $firebaseArray(userref);
  ctrl.$onInit = init;
  ctrl.authObj = $firebaseAuth();

  function init() {
    ctrl.firebaseUser = ctrl.authObj.$getAuth();
    if (ctrl.firebaseUser) {
      ctrl.userList.$loaded().then(function () {
        var numberOfUsers = ctrl.userList.length;
        var i;
        for (i = 0; i < numberOfUsers; i++) {
          if (ctrl.firebaseUser.uid === ctrl.userList[i].firebaseUserId) {
            ctrl.userName = ctrl.userList[i].firstName
            ctrl.userName1 = ctrl.userList[i].lastName;
            ctrl.company = ctrl.userList[i].company;
            console.log(ctrl.formData.userName);
          }
        }
      });
    }
  }
}
