angular.module("app")
  .controller("ViewRideController", ViewRideController);

function ViewRideController($uibModal, $log, $http, $state, $stateParams, $firebaseArray, $firebaseAuth) {
  var ctrl = this;
  ctrl.openComponentModal = openComponentModal;
  ctrl.result = {};
  ctrl.$onInit = init;
  ctrl.update = update;
  var ref1 = firebase.database().ref().child('rideDetailsList');
  ctrl.rideDetail = $firebaseArray(ref1);
  var driverref = firebase.database().ref().child('drivers');
  ctrl.drivers = $firebaseArray(driverref);
  var vehicleref = firebase.database().ref().child('vehicles');
  ctrl.vehicles = $firebaseArray(vehicleref);
  ctrl.authObj = $firebaseAuth();

  function openComponentModal() {
    var modalInstance = $uibModal.open({
      component: 'viewModal'
    });
    modalInstance.result.then(function (formData) {
      $log.info(formData);
    }).catch(function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  }

  function init() {
    ctrl.firebaseUser = ctrl.authObj.$getAuth();
    if(ctrl.firebaseUser){
      ctrl.rideDetail.$loaded().then(function () {
        ctrl.ride = $stateParams.ride;
        ctrl.vehicles.$loaded().then(function (){
          ctrl.drivers.$loaded().then(function (){
            ctrl.result = ctrl.rideDetail.$getRecord(ctrl.ride);
            ctrl.vehicle = ctrl.vehicles.$getRecord(ctrl.result.vehicleId);
            ctrl.dirver = ctrl.drivers.$getRecord(ctrl.result.driverId);
          });
        });
      });
    }
    else
    {
      ctrl.rideDetail.$loaded().then(function(){
        ctrl.ride = $stateParams.ride;
        ctrl.result = ctrl.rideDetail.$getRecord(ctrl.ride);
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
