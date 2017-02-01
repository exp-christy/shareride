angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http,$state) {
  var ctrl = this;
  ctrl.searchResult = [];
  ctrl.searchRideDetails = searchRideDetails;
  ctrl.viewRideDetails = viewRideDetails;
  ctrl.filterDetail= {};
  ctrl.ampm;
  //Function searches ride details for the place from JSON file
  function searchRideDetails(place) { 
      $http.get("/data/rideDetails.json")
      .then(function (response) {
        ctrl.show="true";
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
  function viewRideDetails(Id){
    console.log(Id);
    $state.go('viewride',{'rideID':Id});
  }
}
