angular.module("app")
  .controller("ViewModalController", ViewModalController);

function ViewModalController($uibModal, $state, toastr) {
  var ctrl = this;
  ctrl.formData = {};
  ctrl.rideBook = rideBook;
  ctrl.cancel = cancel;
  ctrl.ok = function () {
    ctrl.close({
      $value: ctrl.formData
    });
  };

  function cancel() {
    ctrl.dismiss({
      $value: 'cancel'
    });
  }

  function rideBook() {
    ctrl.cancel();
    $state.go('myHome');
    toastr.success('Booking has been made!');
  }
}
