angular.module("app")
  .controller("HomeCtrl", HomeCtrl);


function HomeCtrl($state) {
  var ctrl = this;
  ctrl.searchRideDetails = searchRideDetails;
  function searchRideDetails(place){
    $state.go('rideList',{'fromPlace':place});
  }

}
