angular.module("app")
  .controller("VehicleDetailsController", VehicleDetailsController);

function VehicleDetailsController() {
  var ctrl = this;
  ctrl.$onInit = init;
  function init(){
    ctrl.vehicles=['MarutiSuzuki Swift','Volkswagon Polo','RoyalEnfield Classic350']
  }
}
