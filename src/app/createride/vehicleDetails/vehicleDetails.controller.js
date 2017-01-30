angular.module("app")
  .controller("VehicleDetailsCtrl", VehicleDetailsCtrl);

function VehicleDetailsCtrl() {
  var ctrl = this;

  ctrl.$onInit = function () {
    console.log(ctrl.formData)
  }
  
  //add 

    // Creating a key for localStorage and initialising it to an array of object/s which will be the first list item when the app loads which will act as an example
    window.localStorage['items2'] = JSON.stringify([{ 
      
      vehicleId: 11,
      driverId: 11,
      vehicleNo: "KL-07-F1",
      vehicleMake: "FERRARI",
      vehicleModel: "ITALIA",
      seatCapacity: 2
     }]);

    // Cache the JSON object in [items2] to call later
    ctrl.contact2 = JSON.parse(localStorage.getItem('items2')) || [];

    // When submit button is pressed it will push the object to the array in localStorage
    ctrl.addRideDetails = function() {  
      ctrl.count = 11;

      ctrl.contact2.push({ vehicleId: ctrl.count++,
      driverId: 11,
      vehicleNo: ctrl.formData.vehicleNo,
      vehicleMake: ctrl.formData.vehicleMake,
      vehicleModel: ctrl.formData.vehicleModel,
      seatCapacity: ctrl.formData.seatCapacity });
console.log(ctrl.contact2)
      vehicleId:" ";
      driverId: " ";
      vehicleNo: " ";
      vehicleMake: " ";
      vehicleModel: " ";
      seatCapacity: " ";
      location.href = '/createride/rideDetails';
    };

    // When the delete button is pressed, it will find the corresponding item's index from localStorage and splice it
    ctrl.itemDelete = function(item) {
      ctrl.contact2.splice(ctrl.contact2.indexOf(item), 1);
    };
  }
