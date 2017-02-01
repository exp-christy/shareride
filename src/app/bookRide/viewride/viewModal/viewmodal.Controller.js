 angular.module("app")
   .controller("ViewModalController", ViewModalController);

 function ViewModalController($uibModal) {
   var ctrl = this;
   ctrl.formData = {};
   ctrl.$onInit = function(){
     console.log(angular.copy(ctrl));
   }
   ctrl.ok = function () {
     console.log(ctrl)
     ctrl.close({
       $value: ctrl.formData
     });
   };
   $(".btn").on("click", function() {
    $(".alert").removeClass("in").show();
	$(".alert").delay(200).addClass("in").fadeIn();
});


   ctrl.cancel = function () {
     ctrl.dismiss({
       $value: 'cancel'
     });
   };
   ctrl.psssengerDetails= function() {
     console.log("Hello...");
     
   }
 }
