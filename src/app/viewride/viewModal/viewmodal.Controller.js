angular.module("app")
  .controller("ViewModalController", ViewModalController);

function ViewModalController($uibModal, $state, toastr, $firebaseArray, $firebaseAuth) {
  var ctrl = this;

  ctrl.cancel = cancel;
  ctrl.ok = ok;

  function ok() {
    ctrl.close({
      $value: 'ok'
    });
  }

  function cancel() {
    ctrl.dismiss({
      $value: 'cancel'
    });
  }
}
