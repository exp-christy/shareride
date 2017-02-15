angular
  .module('app')
  .controller("CreateRideController", CreateRideController);

function CreateRideController($state, $stateParams, $timeout, toastr, $firebaseArray, $firebaseAuth) {
  var ctrl = this;
  var userref = firebase.database().ref().child("user");
  var ref1 = firebase.database().ref().child("drivers");
  var ref2 = firebase.database().ref().child("vehicles");
  var ref3 = firebase.database().ref().child("rideDetailsList");
  ctrl.authObj = $firebaseAuth();
  ctrl.userList = $firebaseArray(userref);
  ctrl.driverList = $firebaseArray(ref1);
  ctrl.vehicleList = $firebaseArray(ref2);
  ctrl.rideDetailsList = $firebaseArray(ref3);
  ctrl.addRideDetails = addRideDetails;
  ctrl.clearDetails = clearDetails;
  ctrl.$onInit = init;
  ctrl.goHome = goHome;
  ctrl.formData = {};
  ctrl.formDataDriver = {};
  ctrl.formDataVehicle = {};
  ctrl.formDataRide = {};

  function init() {
    ctrl.authObj.$onAuthStateChanged(function (firebaseUser){
      if(firebaseUser){
        ctrl.userList.$loaded().then(function () {
        var numberOfUsers = ctrl.userList.length;
        var i;
        for (i = 0; i < numberOfUsers; i++) {
          if (firebaseUser.uid === ctrl.userList[i].firebaseUserId) {
            ctrl.formDataDriver.contactNumber = ctrl.userList[i].contactNumber;
            ctrl.formDataDriver.driverName = ctrl.userList[i].firstName + ctrl.userList[i].lastName;
            ctrl.formDataDriver.licenseNumber = ctrl.userList[i].licenseNumber;
            ctrl.formDataDriver.company = ctrl.userList[i].company;
          }
        }
      });
    }
    else {
      $state.go('myHome');
    }
      
    });
  }

  function addRideDetails() {
    ctrl.rideDetailsList.$loaded().then(function(){
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
      ctrl.formData.amPmStart = ctrl.formDataRide.startTime.toLocaleTimeString().slice(-2);
      ctrl.formData.amPmEnd = ctrl.formDataRide.endTime.toLocaleTimeString().slice(-2);
      ctrl.formData.startMinute = ctrl.formDataRide.startTime.getMinutes();
      ctrl.formData.endMinute = ctrl.formDataRide.endTime.getMinutes();
      ctrl.formData.fare = ctrl.formDataRide.fare;
      ctrl.formData.genderRestriction = ctrl.formDataRide.rideGender;
      ctrl.rideDetailsList.$add(ctrl.formData);
      ctrl.clearDetails();
      toastr.success('Ride has been created');
      ctrl.goHome();
    });
  }

  function goHome() {
    $state.go('userHome');
  }

  function clearDetails() {
    ctrl.formDataDriver = {};
    ctrl.formDataVehicle = {};
    ctrl.formDataRide = {};
    ctrl.frmCreateRide.$setUntouched();
  }
}
