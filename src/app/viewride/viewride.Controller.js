angular.module("app")
  .controller("ViewRideController", ViewRideController);

function ViewRideController($uibModal, $log, $http, $state, $stateParams, $firebaseArray, $firebaseAuth, toastr) {
  var ctrl = this;
  ctrl.openComponentModal = openComponentModal;
  ctrl.result = {};
  ctrl.$onInit = init;
  ctrl.update = update;
  ctrl.formData = {};
  var ref1 = firebase.database().ref().child('rideDetailsList');
  ctrl.rideDetail = $firebaseArray(ref1);
  var driverref = firebase.database().ref().child('drivers');
  ctrl.drivers = $firebaseArray(driverref);
  var vehicleref = firebase.database().ref().child('vehicles');
  ctrl.vehicles = $firebaseArray(vehicleref);
  ctrl.authObj = $firebaseAuth();
  var bookRef = firebase.database().ref().child('book');
  ctrl.bookDetail = $firebaseArray(bookRef);

  function openComponentModal() {
    var modalInstance = $uibModal.open({
      component: 'viewModal'
    });
    modalInstance.result.then(function (formData) {
      $log.info(formData);
      ctrl.formData.rideId = $stateParams.ride;
        ctrl.formData.firebaseUserId = ctrl.firebaseUserId;
        ctrl.bookDetail.$add(ctrl.formData);
        ctrl.result.vacantSeats = ctrl.result.vacantSeats - 1;
        ctrl.rideDetail.$save(ctrl.result);
        toastr.info('Booking Succcesssful');
        $state.go('userHome');
    }).catch(function (response) {
       // console.log(response);
       $state.go('viewride');
      //  $log.info('modal-component dismissed at: ' + new Date());
      //  console.log(response);
    });
  }

  function init() {
    ctrl.firebaseUser = ctrl.authObj.$getAuth();
    if (ctrl.firebaseUser) {
      ctrl.firebaseUserId = ctrl.firebaseUser.uid;
      ctrl.rideDetail.$loaded().then(function () {
        ctrl.ride = $stateParams.ride;
        ctrl.vehicles.$loaded().then(function () {
          ctrl.drivers.$loaded().then(function () {
            ctrl.result = ctrl.rideDetail.$getRecord(ctrl.ride);

            if (ctrl.result.startHour > 12) {
              ctrl.s = ctrl.result.startHour - 12;
            } else if (ctrl.result.startHour == 0) {
              ctrl.s = 12;
            } else {
              ctrl.s = ctrl.result.startHour;
            }

            if (ctrl.result.endHour > 12) {
              ctrl.e = ctrl.result.endHour - 12;
            } else if (ctrl.result.endHour == 0) {
              ctrl.e = 12;
            } else {
              ctrl.e = ctrl.result.endHour;
            }

            ctrl.vehicle = ctrl.vehicles.$getRecord(ctrl.result.vehicleId);
            ctrl.driver = ctrl.drivers.$getRecord(ctrl.result.driverId);
          });
        });
      });
    } else {
      ctrl.rideDetail.$loaded().then(function () {
        ctrl.ride = $stateParams.ride;
        ctrl.result = ctrl.rideDetail.$getRecord(ctrl.ride);
        toastr.warning('Only signed in users can view ride details');
        ctrl.update();
      });
    }


  }

  function update() {
    $state.go('rideList', {
      fromPlace: ctrl.result.from
    });
  }
}
