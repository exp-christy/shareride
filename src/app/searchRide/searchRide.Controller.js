angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http, toastr, $state, $firebaseArray) {
  var ctrl = this;
  ctrl.startLocations = [];
  ctrl.searchRideDetails = searchRideDetails;
  ctrl.$onInit = init;
  var rideref = firebase.database().ref().child("rideDetailsList");
  ctrl.rideDetailsList = $firebaseArray(rideref);

  function init() {
    var j;
    var placeListLength;
    var i;
    ctrl.places = ["pala", "Piravom", "Kochi", "Nettoor", "Kottayam", "Perumbavur"];
    placeListLength = ctrl.places.length;
    ctrl.rideDetailsList.$loaded().then(function () {
      var totalRides = ctrl.rideDetailsList.length; // Number of rides in ride table
      for (i = 0; i < totalRides; i++) {
        for (j = 0; j < placeListLength; j++) { //  Checking whether place already exist in the list
          if (ctrl.places[j] === ctrl.rideDetailsList[i].from) {
            break;
          }
        }
        if (j >= placeListLength) { // Inserting the new place to suggestion
          ctrl.places.push(ctrl.rideDetailsList[i].from);
        }
      }
    });
  }

  function searchRideDetails(place) {
    if (angular.isDefined(place)) {
      var placeNotFound = 'true';
      for (var i = 0; i < ctrl.places.length; i++) {
        var str = place.toUpperCase().localeCompare(ctrl.places[i].toUpperCase());
        if (str === 0) {
          placeNotFound = 'false';
          $state.go('rideList', {
            fromPlace: place});
        }
      }
      if(placeNotFound === 'true')
      {
        toastr.info('Sorry no rides were found');
      }
    }
    else{
        console.log(placeNotFound,angular.isDefined(place));
        toastr.info('Please enter a place');
        ctrl.frmSearchRide.$setUntouched();  
    }
  }
}
