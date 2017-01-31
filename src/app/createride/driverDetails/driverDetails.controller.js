angular
    .module('app')
    .controller("DriverDetailController",DriverDetailController);

function DriverDetailController($http){
    var ctrl= this;
    ctrl.addDriverDetails= addDriverDetails;
    function addDriverDetails(){
        ctrl.fileVal= document.getElementById("uploadImage").value;
        location.href ='/createride/vehicleDetails';
    }
}