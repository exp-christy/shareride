angular.module("app")
  .controller("SignOutController", SignOutController);

function SignOutController($state , $firebaseAuth , $firebase) {
  var ctrl = this;
  ctrl.authObj = $firebaseAuth();
 // ctrl.signOut = signOut;

  //function signOut() {

   // $state.go('myHome');
  //}
}
