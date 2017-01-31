angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http) {
  var ctrl = this;
  ctrl.searchResult = [];
  ctrl.changeToString = changeToString;
  ctrl.searchRideDetails = searchRideDetails;
  ctrl.ampm;
  //Function searches ride details for the place from JSON file
  function searchRideDetails(place) { 
      $http.get("/data/rideDetails.json")
      .then(function (response) {
        var res = response.data.rides;
        var len = res.length;
        ctrl.searchResult = [];
        for(var i=0;i < len; i++){
            if(res[i].from.toUpperCase() == place.toUpperCase()){
                ctrl.searchResult.push(angular.copy(res[i]));
            }
        }
        res=[];
      });
  }
  function changeToString(){
    ctrl.searchDetail.startDate = ctrl.searchDetail.startDate.toLocaleDateString();
  };
}
