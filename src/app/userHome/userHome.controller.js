angular.module("app")
  .controller("UserHomeController", UserHomeController);

function UserHomeController($state) {
  var ctrl = this;
  ctrl.searchRideDetails = searchRideDetails;

  function searchRideDetails(place) {
    $state.go('rideList', {
      fromPlace: place
    });
  }
}