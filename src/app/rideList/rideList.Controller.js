angular
    .module('app')
    .controller('RideListController',RideListController);

function RideListController($http,$stateParams,$state){
    var ctrl = this;
    ctrl.searchResult = [];
  ctrl.viewRideDetails = viewRideDetails;
  ctrl.filterDetail= {};
  ctrl.$onInit = init;
  ctrl.ampm;
  //Function searches ride details for the place from JSON file
  function init() { 
      $http.get("/data/rideDetails.json")
      .then(function (response) {
        var res = response.data.rides;
        var len = res.length;
        ctrl.searchResult = [];
        for(var i=0;i < len; i++){
              if(res[i].from.toUpperCase() == $stateParams.fromPlace.toUpperCase()){
                ctrl.searchResult.push(angular.copy(res[i]));
              }
        }
        if(ctrl.searchResult.length !== 0){
          ctrl.show="true";
          res=[];
        }
        else{
          alert("Sorry no rides were found!");
        }
        
      });
  }
  function viewRideDetails(Id){
    $state.go('viewride',{'rideID':Id});
  }
}