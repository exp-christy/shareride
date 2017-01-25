angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http) {
  var ctrl = this;
  ctrl.searchResult = [];
  ctrl.searchRideDetails = searchRideDetails;

  function searchRideDetails(place) {
    $http.get("/data/rideDetails.json")
      .then(function (response) {
        var res = response.data.rides;
        var len = res.length;
        ctrl.searchResult = [];
        for(var i=0;i < len; i++){
            if(res[i].from === place){
                ctrl.searchResult.push(angular.copy(res[i]));
            }
        }
        res=[];
      });

  };
}
