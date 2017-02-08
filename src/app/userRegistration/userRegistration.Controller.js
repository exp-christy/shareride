angular
  .module('app')
  .controller('userRegistrationController', userRegistrationController);

function userRegistrationController($timeout, $state, toastr) {
  var ctrl = this;
  ctrl.checkPass = checkPass;
  ctrl.userRegister = userRegister;
  ctrl.cancel = cancel;
  ctrl.usersCategory = usersCategory;

  function checkPass() {
    var pass1 = ctrl.formData.pass;
    var pass2 = ctrl.formData.password;
    // Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    // Set the colors we will be using ...
    var badColor = "#ff6666";
    // Compare the values in the password field and the confirmation field
    if (pass1 !== pass2) {
      // The passwords do not match.Set the color to the bad color andnotify the user.
      message.style.color = badColor;
      message.innerHTML = "Passwords Do Not Match!";
    } else {
      message.innerHTML = "";
    }
  }

  function userRegister() {
    toastr.success('Registration Successfull!');
    $state.go('userHome');
  }

  function cancel() {
    $state.go('myHome');
  }

  function usersCategory() {
    console.log(ctrl.formData.userCategory);
  }
}
