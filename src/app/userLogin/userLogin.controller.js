angular
  .module('app')
  .controller("userLoginController", userLoginController);

function userLoginController($state) {
  var ctrl = this;
  ctrl.usersLogin = usersLogin;
  ctrl.userReg = userReg;
  ctrl.ok = ok;
  ctrl.cancel = cancel;

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
    $state.go('userHome');
    ctrl.ok();
  }

  function userReg() {
    $state.go('userRegistration');
    ctrl.ok();
  }
}
