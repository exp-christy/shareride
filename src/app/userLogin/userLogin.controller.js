angular
  .module('app')
  .controller("userLoginController", userLoginController);

function userLoginController($state, $firebaseAuth, toastr) {
  var ctrl = this;
  ctrl.usersLogin = usersLogin;
  ctrl.userReg = userReg;
  ctrl.ok = ok;
  ctrl.cancel = cancel;
  ctrl.authObj = $firebaseAuth();

  function cancel() {
    ctrl.dismiss({
      $value: 'cancel'
    });
  }

  function ok() {
    ctrl.close({
      $value: ctrl.formData
    });
  }

  function usersLogin() {
    ctrl.authObj.$signInWithEmailAndPassword(ctrl.formData.email, ctrl.formData.password).then(function (firebaseUser) {
      $state.go('userHome');
      ctrl.cancel();
    }).catch(function (error) {
      ctrl.formData = {};
      ctrl.userLogin.$setUntouched();
      toastr.error('You have not signed up');
    });
    //ctrl.ok();
  }

  function userReg() {
    $state.go('userRegistration');
    ctrl.ok();
  }
}
