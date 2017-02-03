angular
  .module("app")
  .controller("RideDetailsCtrl", RideDetailsCtrl);

function RideDetailsCtrl( $state,$stateParams,$timeout,toastr,$firebaseArray) {
  var ctrl = this;
  var ref = firebase.database().ref().child("rides");
  ctrl.rideDetailsList = $fireBaseArray(ref);
  ctrl.addRideDetails = addRideDetails;

  ctrl.$onInit = function () {
    console.log(ctrl.formData)
  }

  function addRideDetails(){
    ctrl.formdata.rideId = ctrl.rideDetailsList.length + 1;
    ctrl.formdata.vehicleId = $stateParams.vehicleId;
    ctrl.rideDetails.$add(ctrl.formdata);
  }
  
  }
