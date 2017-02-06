angular
  .module('app')
  .controller("CreateRideController", CreateRideController);

function CreateRideController($state, $stateParams, $timeout, toastr, $firebaseArray) {
  var ctrl = this;
  var ref1 = firebase.database().ref().child("drivers");
  var ref2 = firebase.database().ref().child("vehicles");
  var ref3 = firebase.database().ref().child("rideDetailsList");
  ctrl.driverList = $firebaseArray(ref1);
  ctrl.vehicleList = $firebaseArray(ref2);
  ctrl.rideDetailsList = $firebaseArray(ref3);
  ctrl.addRideDetails = addRideDetails;
  ctrl.clearDetails = clearDetails;
  ctrl.goHome = goHome;
  ctrl.formData = {};
  ctrl.formDataDriver = {};
  ctrl.formDataVehicle = {};
  ctrl.formDataRide = {};

  function addRideDetails() {
    ctrl.formData.rideId = ctrl.rideDetailsList.length + 1;
    ctrl.vehicleList.$add(ctrl.formDataVehicle);
    ref2.on('child_added', function (snapshot) {
      ctrl.formData.vehicleId = snapshot.key;
    });
    ctrl.driverList.$add(ctrl.formDataDriver);
    ref1.on('child_added', function (snapshot) {
      ctrl.formData.driverId = snapshot.key;
    });
    ctrl.formData.from = ctrl.formDataRide.from;
    ctrl.formData.stopPoints = ctrl.formDataRide.stopPoints;
    ctrl.formData.vacantSeats = ctrl.formDataRide.vacantSeats;
    ctrl.formData.startDate = ctrl.formDataRide.startDate.toLocaleDateString();
    ctrl.formData.endDate = ctrl.formDataRide.endDate.toLocaleDateString();
    ctrl.formData.startHour = ctrl.formDataRide.startTime.getHours();
    ctrl.formData.endHour = ctrl.formDataRide.endTime.getHours();
    ctrl.formData.startMinute = ctrl.formDataRide.startTime.getMinutes();
    ctrl.formData.endMinute = ctrl.formDataRide.endTime.getMinutes();
    ctrl.formData.fare = ctrl.formDataRide.fare;
    ctrl.formData.genderRestriction = ctrl.formDataRide.rideGender;
    ctrl.rideDetailsList.$add(ctrl.formData);
    ctrl.clearDetails();
    toastr.success('Ride has been created');
    $timeout(ctrl.goHome, 3000);
  }

  function goHome() {
    $state.go('myHome');
  }

  function clearDetails() {
    ctrl.formDataDriver = {};
    ctrl.formDataVehicle = {};
    ctrl.formDataRide = {};
    ctrl.frmCreateRide.$setUntouched();
  }
}
