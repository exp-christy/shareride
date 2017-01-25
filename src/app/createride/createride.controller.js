angular.module("app")
  .controller("CreateRideCtrl", CreateRideCtrl);

function CreateRideCtrl() {
  var ctrl = this;

  ctrl.$onInit = function () {
    console.log(ctrl.formData)
  }
  ctrl.data = [];
  ctrl.count = 11;
  //add 

  ctrl.addRideDetails = addRideDetails;

  function addRideDetails() {
    var sdate = ctrl.formData.startDate;
    var edate = ctrl.formData.endDate;
    var stime = ctrl.formData.startTime;
    var etime = ctrl.formData.endTime
    var shr = stime.getHours();
    var smm = stime.getMinutes();
    var ehr = etime.getHours();
    var emm = etime.getMinutes();
    ctrl.data = {
      "rideId": ctrl.count++,
      "from": "ctrl.formData.From",
      "stopPoints": "ctrl.formData.stopPoints",
      "startDate": "ctrl.formData.startDate",
      "endDate": "ctrl.formData.endDate",
      "startHour": shr,
      "startMinute": smm,
      "endHour": ehr,
      "endMinute": emm,
      "vacantSeats": "ctrl.formData.Seat",
      "fare": "ctrl.formData.Fare",
      "driver": {
        "driverId": 1,
        "driverName": "Ram",
        "company": "Experion",
        "contactNumber": "9546241919",
        "licenseNumber": "KL/2016/039"
      },
      "vehicle": {
        "vehicleId": 1,
        "VehicleNumber": "KL-39K-3302",
        "vehicleModel": "Swift",
        "seatCapacity": 5
      }
    }

  }
}
