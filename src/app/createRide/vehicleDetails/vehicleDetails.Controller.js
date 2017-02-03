angular.module("app")
  .controller("VehicleDetailsController", VehicleDetailsController);

function VehicleDetailsController($firebaseArray, $state, $stateParams){
  var ctrl = this;
  var ref = firebase.database().ref().child("vehicles");
  ctrl.vehicleList= $firebaseArray(ref);
  //ctrl.addVehicleDetails= addVehicleDetails;
  ctrl.$onInit = init;

  function init()
  {
    ctrl.vehicles=['MarutiSuzuki Swift','Volkswagen Polo','Ford Ecosport','Other'];
  }

  /*function addVehicleDetails(){
   ctrl.formdata.vehicleId =ctrl.vehicleList.length + 1;
   ctrl.formdata.driverId =$stateParams.driverId;
   ctrl.vehicleList.$add(ctrl.formdata);
   $state.go('rideDetails',{'vehicleId':ctrl.formdata.vehicleId});
  }*/
  
}
