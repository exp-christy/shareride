angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http,$state) {
  var ctrl = this;
   ctrl.startLocations = [];
    ctrl.$onInit = init;
  ctrl.searchRideDetails = searchRideDetails;
  function searchRideDetails(place){
    $state.go('rideList',{'fromPlace':place});
  }
  function init() {
      $http.get('/data/rideDetails.json').then(function (response) {
      var rideDetails = response.data.rides;
      var len = rideDetails.length;
      for (var i = 0; i < len; i++) {
        ctrl.startLocation = rideDetails[i].from;
        if(i>0)
        var repeatLoc  = ctrl.startLocation.localeCompare(startLocations[i]);
        if(repeatLoc!==0){
        ctrl.startLocations.push(angular.copy(ctrl.startLocation));   
        }  
      }
      console.log(ctrl.startLocations);
    });
  }
    
}
