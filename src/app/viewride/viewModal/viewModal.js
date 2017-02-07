angular
  .module('app')
  .component('viewModal', {
    templateUrl: 'app/viewride/viewModal/viewModal.html',
    controller: 'ViewModalController',
    controllerAs: 'ctrl',
    bindings: {
      formData: '=?',
      close: '&',
      dismiss: '&'
    }
  });
