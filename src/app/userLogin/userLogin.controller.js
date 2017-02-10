angular
  .module('app')
  .controller("userLoginController", userLoginController);

function userLoginController($state, $firebaseAuth) {
  var ctrl = this;
  ctrl.usersLogin = usersLogin;
  ctrl.userReg = userReg;
  ctrl.ok = ok;
  ctrl.cancel = cancel;
  ctrl.authObj = $firebaseAuth();
  console.log(ctrl.authObj);

  function cancel() {
    ctrl.dismiss({
      $value: 'cancel'
    });
  }

  function ok() {
    ctrl.close({
      $value: ctrl.formData
    });
  };

  function usersLogin() {
    ctrl.authObj.$signInWithEmailAndPassword(ctrl.formData.email, ctrl.formData.password).then(function(firebaseUser) {
  console.log("Signed in as:", firebaseUser.uid);
}).catch(function(error) {
  console.error("Authentication failed:", error);
});
    $state.go('userHome');
    ctrl.ok();
  }

  function userReg() {
    $state.go('userRegistration');
    ctrl.ok();
  }
}
