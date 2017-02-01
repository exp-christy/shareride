angular
    .module('app')
    .controller("DriverDetailController",DriverDetailController);

function DriverDetailController(){
    var ctrl= this;
    ctrl.addDriverDetails= addDriverDetails;
    function addDriverDetails(){
       
        location.href = '/createride/vehicleDetails';
    }

     ctrl.cancel = function() {
         location.href = '/myHome';
     }
}