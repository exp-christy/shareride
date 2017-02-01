angular.module("app")
  .controller("ViewRideController", ViewRideController);

function ViewRideController($uibModal, $log, $http,$stateParams) {
  var ctrl = this;
  ctrl.openComponentModal = openComponentModal;
  ctrl.result = {};
  ctrl.ab;
  ctrl.$onInit = init;
ctrl.update = update;
var value='';
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
    
    //console.log($stateParams);
    ctrl.rideID = $stateParams.rideID;
    $http.get('/data/rideDetails.json').then(function (response) {
      var rideDetails = response.data;
      var len = rideDetails.rides.length;
      for (var i = 0; i < len; i++) {
        if (rideDetails.rides[i].rideId == ctrl.rideID) {
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
