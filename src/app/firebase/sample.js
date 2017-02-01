(function () {

  angular
    .module('app')
    .component('fireBase', fireBaseComp());


  function fireBaseComp() {

    function fireBaseController($firebaseArray) {
      var ctrl = this;
      var ref = firebase.database().ref().child("datas"); // get reference

      ctrl.onSubmit = onSubmit; // function to add a record
      ctrl.remove = remove; // function to remove a record
      ctrl.selectItem = selectItem; // function to remove a record
      ctrl.datas = $firebaseArray(ref); // data array
      ctrl.formData = {};

      function onSubmit(data) {
        if (data.$id) {
          ctrl.datas.$save(data);
        } else {
          ctrl.datas.$add(data);
        }
        ctrl.formData = {};
      }

      function remove(data) {
        ctrl.datas.$remove(data);
      }

      function selectItem(data) {
        console.log('Working ...');
        ctrl.formData = data;
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
