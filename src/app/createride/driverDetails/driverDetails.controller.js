angular
    .module('app')
    .controller("DriverDetailController",DriverDetailController);

function DriverDetailController($firebaseArray,$state){
    var ctrl= this;
    var ref = firebase.database().ref().child("drivers");
    ctrl.driverList= $firebaseArray(ref);
    ctrl.addDriverDetails= addDriverDetails;
    function addDriverDetails(){
            ctrl.formdata.driverId= ctrl.driverList.length + 1;
            ctrl.driverList.$add(ctrl.formdata);
            $state.go('vehicleDetails',{'driverId':ctrl.formdata.driverId});         
    }
}