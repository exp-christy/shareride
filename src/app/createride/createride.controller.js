angular.module("app")
  .controller("crController", crController);

function crController($timeout) {
  var ctrl = this;

  ctrl.$onInit = function () {
    console.log(ctrl.formData)
  }

  ctrl.count = 121;


  //update

  ctrl.update = function () {
    var x = ctrl.list.length;
    for (var i = 0; i < x; i++) {
      if (ctrl.list[i].id === ctrl.formData.id) {
        var index = i;
        break;
      }
    }
    
    ctrl.list.splice(index, 1, {
      id: ctrl.formData.id,
      firstName: ctrl.formData.firstName,
      lastName: ctrl.formData.lastName,
      phone: ctrl.formData.phone,

    });
    ctrl.formData = {};
    ctrl.Reset();
  }

