angular
  .module('app')
  .controller('RideListController', RideListController);

function RideListController($http, $stateParams, $state,toastr, $timeout, $firebaseArray, $firebaseAuth) {
  var ctrl = this;
  ctrl.searchResult = [];
  ctrl.viewRideDetails = viewRideDetails;
  ctrl.filterDetail = {};
  ctrl.$onInit = init;
  var ref = firebase.database().ref().child("rideDetailsList");
  ctrl.rideDetailsList = $firebaseArray(ref);
  ctrl.authObj = $firebaseAuth();
  //  Function searches ride details for the place from JSON file
  function init() {
    ctrl.firebaseUser = ctrl.authObj.$getAuth();
    if(ctrl.firebaseUser){
      ctrl.showUserHeader = true;
      ctrl.showMyHeader = false;
      ctrl.showUserFooter = true;
      ctrl.showMyFooter = false;
    }
    else{
      ctrl.showUserHeader = false;
      ctrl.showMyHeader = true;
      ctrl.showUserFooter = false;
      ctrl.showMyFooter = true;
    }
   
    if(angular.isDefined($stateParams.fromPlace)){
       ctrl.fromPlace = $stateParams.fromPlace.toUpperCase();
      ctrl.rideDetailsList.$loaded().then(function () {
        ctrl.len = ctrl.rideDetailsList.length;
        ctrl.searchResult = [];
        for (var i = 0; i < ctrl.len; i++) {
          if ((ctrl.rideDetailsList[i].from.toUpperCase() === $stateParams.fromPlace.toUpperCase()) && (ctrl.rideDetailsList[i].vacantSeats > 0))  {
            ctrl.searchResult.push(angular.copy(ctrl.rideDetailsList[i]));
          }
        }
      });
    }
  }
  //  Function to go to viewride page
  function viewRideDetails(Id) {
    $state.go('viewride', {ride: Id});
  }
}
