angular
  .module('app')
  .controller('userLoginController', userLoginController)

function userLoginController($state) {
  var ctrl = this;
  ctrl.usersLogin = usersLogin;
  ctrl.userReg = userReg;

  function usersLogin() {
    $state.go('userHome');
  }

  function userReg() {
    $state.go('userRegistration');
  }

  function userLoginController() {}
}
