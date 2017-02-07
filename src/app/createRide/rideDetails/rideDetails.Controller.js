angular
  .module("app")
  .controller("RideDetailsController", RideDetailsController);

function RideDetailsController() {
  var ctrl = this;
  ctrl.$onInit = init;

  function init() {
    ctrl.formData.rideGender = "Both allowed";
    ctrl.stopPoints = ['Arakunnam', 'Tripunithura', 'Erumpanam', 'Kakkanad', 'Karingachira'];
    ctrl.from = ['Arakunnam', 'Tripunithura', 'Erumpanam', 'Kakkanad', 'Karingachira'];
  }
}
