angular.module("app")
  .controller("ViewModalController", ViewModalController);

function ViewModalController($uibModal, $state, toastr,  $firebaseArray) {
  var ctrl = this;
  ctrl.formData = {};
  ctrl.rideBook = rideBook;
  ctrl.cancel = cancel;
  ctrl.formData = {};
  var bookRef = firebase.database().ref().child('book');
  ctrl.bookDetail = $firebaseArray(bookRef);
  var ref1 = firebase.database().ref().child('rideDetailsList');
  ctrl.rideDetail = $firebaseArray(ref1);
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
    $state.go('userHome');
    toastr.success('Booking has been made!');
    // ctrl.formData.rideId = $stateParams.ride;
    // ctrl.formData.firebaseUserId = ctrl.firebaseUserId;
    // ctrl.bookDetail.$add(ctrl.formData);
     ctrl.result = ctrl.rideDetail.$getRecord(ctrl.formData.rideId);
     ctrl.result.vacantSeats = ctrl.result.vacantSeats - 1;
     ctrl.rideDetail.$save(ctrl.result);
  }
}
