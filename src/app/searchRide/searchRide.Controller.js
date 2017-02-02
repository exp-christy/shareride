angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http,$state) {
  var ctrl = this;
  ctrl.searchRideDetails = searchRideDetails;
  function searchRideDetails(place){
    $state.go('rideList',{'fromPlace':place});
  }
  
}
