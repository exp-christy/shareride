angular.module("app")
  .controller("HeaderController", HeaderController);

function HeaderController($firebaseAuth) {
  var ctrl = this;
  ctrl.authObj = $firebaseAuth();
  ctrl.firebaseUser = ctrl.authObj.$getAuth();
}
