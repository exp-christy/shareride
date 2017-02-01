angular.module("app")
  .controller("ViewRideController", ViewRideController);

function ViewRideController($uibModal, $log, $http) {
  var ctrl = this;

  ctrl.openComponentModal = openComponentModal;

  ctrl.rideID = 2;
  ctrl.result = {};
  ctrl.ab;

  ctrl.$onInit = init;
ctrl.update = update;
  function openComponentModal() {
    var modalInstance = $uibModal.open({
      component: 'viewModal',
    });
    modalInstance.result.then(function (formData) {
      $log.info(formData);
    }).catch(function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
      };

  function init() {
    $http.get('/data/rideDetails.json').then(function (response) {
      var rideDetails = response.data;
      var len = rideDetails.rides.length;
      for (var i = 0; i < len; i++) {
        if (rideDetails.rides[i].rideId === ctrl.rideID) {
          ctrl.result = rideDetails.rides[i];
          console.log(ctrl.result);
          break;
        }
      }
    });
  }

function update() {
location.href= '/searchRide';
}
}
