 angular.module("app")
   .controller("ViewModalController", ViewModalController);

 function ViewModalController($uibModal, $state, $timeout,toastr) {
   var ctrl = this;
   ctrl.formData = {};
   ctrl.rideBook= rideBook;
   ctrl.cancel = cancel;
   ctrl.ok = function () {
     ctrl.close({
       $value: ctrl.formData
     });
   };
   function cancel() {
     ctrl.dismiss({
       $value: 'cancel'
     });
   };
   function rideBook(){
     $timeout(ctrl.ok,3000);
     toastr.success('success', 'Booking has been made!');
     $state.go('searchRide');
   }

 }
