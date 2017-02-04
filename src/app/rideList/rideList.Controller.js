angular
    .module('app')
    .controller('RideListController',RideListController);

function RideListController($http,$stateParams,$state,$timeout,$firebaseArray){
    var ctrl = this;
    ctrl.searchResult = [];
  ctrl.viewRideDetails = viewRideDetails;
  ctrl.filterDetail= {};
  ctrl.$onInit = init;
  var ref = firebase.database().ref().child("rides");
  ctrl.rides = $firebaseArray(ref);
  ctrl.ampm;
  //Function searches ride details for the place from JSON file
  function init(){
    var len = ctrl.rides.length;
    ctrl.fromPlace = $stateParams.fromPlace.toUpperCase();
  }
  /*function init() { 
      $http.get("/data/rideDetails.json")
      .then(function (response) {
        var res = response.data.rides;
        var len = res.length;
        ctrl.fromPlace = $stateParams.fromPlace.toUpperCase();
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
        
      });
  }*/
  //Function to go to viewride page
  function viewRideDetails(Id){
    $state.go('viewride',{'rideID':Id});
  }
}