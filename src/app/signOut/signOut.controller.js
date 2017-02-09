angular.module("app")
  .controller("SignOutController", SignOutController);

function SignOutController($state) {
  var ctrl = this;
  ctrl.signOut = signOut;

  function signOut() {

    $state.go('myHome');
  }
}
