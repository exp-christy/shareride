angular
  .module('app')
  .controller('userRegistrationController', userRegistrationController);

function userRegistrationController($timeout, $state, toastr, $firebaseArray) {
  var ctrl = this;
  ctrl.checkPass = checkPass;
  ctrl.userRegister = userRegister;
  ctrl.cancel = cancel;
var usersRef = firebase.database().ref().child('user');
  ctrl.userDetails = $firebaseArray(usersRef);
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
    ctrl.userDetails.$add(ctrl.formData);
    usersRef.on('child_added', function (snapshot) {
      ctrl.formData.userId = snapshot.key;
    });
    ctrl.formData = {};
    ctrl.registrationForm.$setUntouched();
    toastr.success('Registration Successfull!');
    $state.go('userHome');
  }

  function cancel() {
    $state.go('myHome');
  }
}
