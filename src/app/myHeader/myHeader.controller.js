angular.module("app")
  .controller("HeaderController", HeaderController);

function HeaderController($firebaseAuth) {
  ctrl.authObj = $firebaseAuth();
  ctrl.firebaseUser = ctrl.authObj.$getAuth();
}
