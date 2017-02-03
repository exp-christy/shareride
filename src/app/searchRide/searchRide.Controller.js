angular
  .module('app')
  .controller('SearchRideController', SearchRideController);

function SearchRideController($http,toastr,$state) {
  var ctrl = this;
  ctrl.startLocations = [];
  ctrl.searchRideDetails = searchRideDetails;
  
  ctrl.places = ["pala","Piravom","Kochi","Kottayam","Perumbavur"];
  function searchRideDetails(place) {
    for(var i=0;i<ctrl.places.length;i++){
        var str1=place.toUpperCase();
        var str2=ctrl.places[i].toUpperCase();
          var str=str1.localeCompare(str2);
   
      if(str===0){break;}
    }


if(str===0){
      $state.go('rideList', {
      'fromPlace': place
    });
       
    }
    else{
       toastr.info('Sorry no rides were found!');
          $state.go('myHome');
    }
}
}