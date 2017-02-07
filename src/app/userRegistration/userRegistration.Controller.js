angular
  .module('app')
  .controller('userRegistrationController', userRegistrationController);

function userRegistrationController($timeout,$state,toastr) {
     var ctrl = this;
  ctrl.checkPass = checkPass;
  ctrl.userRegister= userRegister;
  ctrl.cancel= cancel;
  ctrl.usersCategory = usersCategory;
function checkPass(){
    console.log("hello....");  
       var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value != pass2.value){
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }  
    else{
      message.innerHTML = "";
    }
}
function userRegister(){
  toastr.success('Registration Successfull!');
  $state.go('userHome');
} 
function cancel(){
  $state.go('myHome');
}
function usersCategory(){
 
   console.log(ctrl.formData.userCategory);
}
}