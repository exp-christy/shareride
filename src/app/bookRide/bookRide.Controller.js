angular
    .module('app')
    .controller('BookRideController',BookRideController);

function BookRideController($stateParams){
    var ctrl = this;
    ctrl.params = $stateParams;
}