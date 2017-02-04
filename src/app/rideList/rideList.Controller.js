angular
    .module('app')
    .controller('RideListController',RideListController);

function RideListController($http,$stateParams,$state,$timeout,$firebaseArray){
    var ctrl = this;
  ctrl.searchResult = [];
  ctrl.viewRideDetails = viewRideDetails;
  ctrl.filterDetail= {};
  ctrl.$onInit = init;
  var ref = firebase.database().ref().child("rideDetailsList");
  ctrl.rides = $firebaseArray(ref);
  ctrl.ampm;
  
  //Function searches ride details for the place from JSON file
  function init(){
    
    ctrl.fromPlace = $stateParams.fromPlace.toUpperCase();
    ctrl.searchResult = [];
        for(var i=0;i < ctrl.len; i++){
              if(ctrl.rides[i].from.toUpperCase() == $stateParams.fromPlace.toUpperCase()){
                ctrl.searchResult.push(angular.copy(ctrl.rides[i]));
              }
        }
  }
  
  //Function to go to viewride page
  function viewRideDetails(Id){
    $state.go('viewride',{'rideID':Id});
  }
}