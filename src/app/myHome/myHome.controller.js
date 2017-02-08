angular.module("app")
  .controller("HomeController", HomeController);

function HomeController($state) {
  var ctrl = this;
  ctrl.searchRideDetails = searchRideDetails;

  function searchRideDetails(place) {
    $state.go('rideList', {
      fromPlace: place
    });
  }
}
