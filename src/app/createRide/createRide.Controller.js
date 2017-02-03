angular
    .module('app')
    .controller("CreateRideController",CreateRideController);

function CreateRideController($state,$stateParams,$timeout,toastr,$firebaseArray)
{
    var ctrl = this;
    var ref1 = firebase.database().ref().child("drivers");
    var ref2 = firebase.database().ref().child("vehicles");
    var ref3 = firebase.database().ref().child("rides");
    ctrl.driverList= $firebaseArray(ref1);
    ctrl.vehicleList= $firebaseArray(ref2);
    ctrl.rideDetailsList = $firebaseArray(ref3);
    ctrl.addRideDetails=addRideDetails();

    function addRideDetails()
    {
        
    }
} 
