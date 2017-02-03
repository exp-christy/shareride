angular
  .module("app")
  .controller("RideDetailsController", RideDetailsController);

function RideDetailsController() {
  var ctrl = this;
  ctrl.$onInit = init;
  function init(){
    ctrl.stopPoints = ['Arakunnam','Tripunithura','Erumpanam','Kakkanad','Karingachira'];
    ctrl.from = ['Arakunnam','Tripunithura','Erumpanam','Kakkanad','Karingachira'];
  }

}
