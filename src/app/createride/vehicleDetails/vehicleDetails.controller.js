angular.module("app")
  .controller("VehicleDetailsCtrl", VehicleDetailsCtrl);

function VehicleDetailsCtrl($firebaseArray, $state, $stateParams){
  var ctrl = this;
  var ref = firebase.database().ref().child("vehicles");
  ctrl.vehicleList= $firebaseArray(ref);
  ctrl.addVehicleDetails= addVehicleDetails;

  function addVehicleDetails(){
   ctrl.formdata.vehicleId =ctrl.vehicleList.length + 1;
   ctrl.formdata.driverId =$stateParams.driverId;
   ctrl.vehicleList.$add(ctrl.formdata);
   $state.go('rideDetails',{'vehicleId':ctrl.formdata.vehicleId});
  }
  
}
