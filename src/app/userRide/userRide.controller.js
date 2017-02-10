angular.module("app")
  .controller("UserRideController", UserRideController);

function UserRideController($state) {
  var ctrl = this;
  ctrl.userCreateRide = userCreateRide;

  function userCreateRide() {
    $state.go('createRide');
  }

}
