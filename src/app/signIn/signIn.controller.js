angular.module("app")
  .controller("SignInController", SignInController);

function SignInController($state, $uibModal, $log, $firebaseAuth) {
  var ctrl = this;
  ctrl.$onInit = init;
  ctrl.authObj = $firebaseAuth();
  ctrl.openComponentModal = openComponentModal;

  function init() {
    ctrl.firebaseUser = ctrl.authObj.$getAuth();
    if (!ctrl.firebaseUser) {
      $state.go('myHome');
    }
  }

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
