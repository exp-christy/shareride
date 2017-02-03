angular
  .module("app")
  .controller("RideDetailsController", RideDetailsController);

function RideDetailsController( $state,$stateParams,$timeout,toastr,$firebaseArray) {
  var ctrl = this;
  var ref = firebase.database().ref().child("rides");
  ctrl.rideDetailsList = $firebaseArray(ref);
  }
