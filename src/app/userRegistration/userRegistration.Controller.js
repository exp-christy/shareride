angular
  .module('app')
  .controller('userRegistrationController', userRegistrationController);

function userRegistrationController($timeout, $state, toastr, $firebaseArray) {
  var ctrl = this;
  ctrl.checkUserName = checkUserName;
  ctrl.checkPass = checkPass;
  ctrl.userRegister = userRegister;
  ctrl.cancel = cancel;
  var usersRef = firebase.database().ref().child('user');
  ctrl.userDetails = $firebaseArray(usersRef);
  ctrl.usernameNotValid = false;
  

  function checkUserName(){
    ctrl.userDetails.$loaded().then( function (){
      var usersListLength = ctrl.userDetails.length;
      var i;
      for(i = 0; i < usersListLength; i++){
        if(ctrl.formData.username === ctrl.userDetails[i].username){
          ctrl.usernameNotValid = true;
        }
        else{
          ctrl.usernameNotValid = false;
        }
      }
    });
  }

  function checkPass() {
    var pass1 = ctrl.formData.pass;
    var pass2 = ctrl.formData.password;
    // Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    // Set the colors we will be using ...
    var badColor = "#ff6666";
    // Compare the values in the password field and the confirmation field
    var match = pass1.localeCompare(pass2);
    if (match === 0) {
      message.innerHTML = "";
    } else {
      // The passwords do not match.Set the color to the bad color andnotify the user.
      message.style.color = badColor;
      message.innerHTML = "Passwords Do Not Match!";
    }
  }

  function userRegister() {
    ctrl.formData.userCategory = ctrl.formData.userCategory.value;
    ctrl.formData.userGender = ctrl.formData.userGender.value;
    ctrl.userDetails.$add(ctrl.formData);
    ctrl.formData = {};
    ctrl.registrationForm.$setUntouched();
    toastr.success('Registration Successfull!');
    $state.go('userHome');
  }

  function cancel() {
    $state.go('myHome');
  }
}
