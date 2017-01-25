angular.module("app")
  .controller("CreateRideCtrl", CreateRideCtrl);

function CreateRideCtrl() {
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



  // reset

  ctrl.Reset = function () {
    ctrl.formData.firstName = '';
    ctrl.formData.lastName = '';
    ctrl.formData.phone = '';
    ctrl.formData.id = -1 ;
    ctrl.addForm.$setPristine();
  }



  // add data

  ctrl.Add = function () {

      
    var index = -1;
    for (var i = 0; i < ctrl.list.length; i++) {
      if ((ctrl.list[i].firstName === ctrl.formData.firstName) &&
        (ctrl.list[i].lastName === ctrl.formData.lastName) &&
        (ctrl.list[i].phone === ctrl.formData.phone)) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      ctrl.formData = {};
      alert("Person already exists");
    }
     else {
      ctrl.formData.id = ctrl.count++;
      ctrl.list.push(angular.copy(ctrl.formData));
      ctrl.formData = {};
      ctrl.Reset();
    }
      
  }

  //undo

  ctrl.Undo = function () {
    ctrl.Reset();
    // Add last / most recent historical record to the main records
    ctrl.list.push(ctrl.history[ctrl.history.length - 1]);
    // Remove last / most recent historical record
    ctrl.history.pop();
  }
}
