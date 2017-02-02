angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http, $state) {
  var ctrl = this;
  ctrl.startLocations = [];
  ctrl.searchRideDetails = searchRideDetails;
  var same = 0;

  function searchRideDetails(place) {
    $state.go('rideList', {
      'fromPlace': place
    });
  }
 ctrl.places = ["pala","Piravom","Kochi","Kottayam","Perumbaavoor"];

}
