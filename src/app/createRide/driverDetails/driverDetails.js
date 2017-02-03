angular
    .module('app')
    .component('driverDetails',{
        templateUrl: 'app/createRide/driverDetails/driverDetails.html',
        controller: 'DriverDetailController',
        controllerAs: 'ctrl',
        bindings :{
           formData: '='
        }
    });