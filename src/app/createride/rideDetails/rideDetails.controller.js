angular.module("app")
  .controller("RideDetailsCtrl", RideDetailsCtrl);

function RideDetailsCtrl( $state, $timeout,toastr) {
  var ctrl = this;

  ctrl.$onInit = function () {
    console.log(ctrl.formData)
  }
  
  
     
  
  //add 

    // Creating a key for localStorage and initialising it to an array of object/s which will be the first list item when the app loads which will act as an example
    window.localStorage['items3'] = JSON.stringify([{ 
      
      rideId: 11,
      from: "Piravom",
      stopPoints: "Arakunnam,Chottanikara",
      startDate: "12/02/2017",
      endDate: "17/02/2017",
      startHour: 8,
      startMinute: 15,
      endHour: 18,
      endMinute: 15,
      vacantSeats: 4,
      fare: 100
     }]);

    // Cache the JSON object in [items3] to call later
    ctrl.contact3 = JSON.parse(localStorage.getItem('items3')) || [];

    // When submit button is pressed it will push the object to the array in localStorage
    ctrl.addRideDetails = function() {  
      ctrl.count = 11;

    var sdate = ctrl.formData.startDate;
    var edate = ctrl.formData.endDate;
    var stime = ctrl.formData.startTime;
    var etime = ctrl.formData.endTime;
    
      ctrl.contact3.push({ rideId: ctrl.count++,
      from: ctrl.formData.From,
      stopPoints: ctrl.formData.stopPoints,
      startDate: sdate.toLocaleDateString(),
      endDate: edate.toLocaleDateString(),
      startHour: stime.getHours(),
      startMinute: stime.getMinutes(),
      endHour: etime.getHours(),
      endMinute: etime.getMinutes(),
      vacantSeats: ctrl.formData.vacantSeats,
      fare: ctrl.formData.Fare, });
console.log(ctrl.contact3)
      rideId:" ";
      from: " ";
      stopPoints: " ";
      startDate: " ";
      endDate: " ";
      startHour: " "
      startMinute: " ";
      endHour: " ";
      endMinute:" ";
      vacantSeats:" ";
      fare: " ";

      $timeout(ctrl.ok,3000);
     toastr.success('success','New ride has been created');
     $state.go('myHome');
     
    };
  }
