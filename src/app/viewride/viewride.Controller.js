angular.module("app")
  .controller("ViewRideController", ViewRideController);

function ViewRideController($uibModal, $log) {
  var ctrl = this;
  ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      component: 'viewModal',
    });

    modalInstance.result.then(function (formData) {
      $log.info(formData);
    }).catch(function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

}
