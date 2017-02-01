(function () {

  angular
    .module('app')
    .component('fireBase', fireBaseComp());


  function fireBaseComp() {

    function fireBaseController($firebaseArray) {
      var ctrl = this;
      var ref = firebase.database().ref().child("datas");
      console.log(ref);
      ctrl.onSubmit = onSubmit;
      ctrl.datas = $firebaseArray(ref);

      function onSubmit(data) {
        ctrl.datas.$add(data);
      }
    }

    return {
      bindings: {},
      controller: fireBaseController,
      controllerAs: 'ctrl',
      templateUrl: 'app/firebase/sample.html'
    }
  }

}());
