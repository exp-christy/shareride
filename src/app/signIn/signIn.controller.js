angular.module("app")
  .controller("SignInController", SignInController);

function SignInController($uibModal) {
  var ctrl = this;
  ctrl.openComponentModal = openComponentModal;
  function openComponentModal() {
    var modalInstance = $uibModal.open({
      component: 'userLogin'
    });
    modalInstance.result.then(function (formData) {
      $log.info(formData);
    }).catch(function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  }
}
