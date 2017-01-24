angular
  .module('app')
  .component('viewRide', {
    templateUrl: 'app/viewride/viewride.html',
    controller: 'viewrideController',
    controllerAs: 'ctrl',
    bindings: {
     // list: "=?",
      //formData: '=?'   
    }
    
  });