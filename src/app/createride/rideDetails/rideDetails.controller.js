angular.module("app")
  .controller("RideDetailsCtrl", RideDetailsCtrl);

function RideDetailsCtrl() {
  var ctrl = this;

  ctrl.$onInit = function () {
    console.log(ctrl.formData)
  }
  
  //add 

    // Creating a key for localStorage and initialising it to an array of object/s which will be the first list item when the app loads which will act as an example
    window.localStorage['items'] = JSON.stringify([{ 
      
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

    // Cache the JSON object in [items] to call later
    ctrl.contacts = JSON.parse(localStorage.getItem('items')) || [];

    // When submit button is pressed it will push the object to the array in localStorage
    ctrl.addRideDetails = function() {  
      ctrl.count = 11;

    var sdate = ctrl.formData.startDate;
    var edate = ctrl.formData.endDate;
    var stime = ctrl.formData.startTime;
    var etime = ctrl.formData.endTime;
    
      ctrl.contacts.push({ rideId: ctrl.count++,
      from: ctrl.formData.From,
      stopPoints: ctrl.formData.stopPoints,
      startDate: sdate.toLocaleDateString(),
      endDate: edate.toLocaleDateString(),
      startHour: stime.getHours(),
      startMinute: stime.getMinutes(),
      endHour: etime.getHours(),
      endMinute: etime.getMinutes(),
      vacantSeats: ctrl.formData.Seat,
      fare: ctrl.formData.Fare, });
console.log(ctrl.contacts)
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
     
    };

    // When the delete button is pressed, it will find the corresponding item's index from localStorage and splice it
    ctrl.itemDelete = function(item) {
      ctrl.contacts.splice(ctrl.contacts.indexOf(item), 1);
    };
  }
