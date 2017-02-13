angular
  .module('app')
  .controller('userRegistrationController', userRegistrationController);

function userRegistrationController($timeout, $state, toastr, $firebaseArray, $firebaseAuth) {
  var ctrl = this;
  ctrl.checkUserName = checkUserName;
  ctrl.checkPass = checkPass;
  ctrl.userRegister = userRegister;
  ctrl.cancel = cancel;
  var usersRef = firebase.database().ref().child('user');
  ctrl.userDetails = $firebaseArray(usersRef);
  ctrl.authObj = $firebaseAuth();
  ctrl.usernameNotValid = false;
  ctrl.formData = {
    userCategory: "driver",
    userGender: "Male"
  };

  function checkUserName() {
    ctrl.userDetails.$loaded().then(function () {
      // Finding the number of registered users
      var usersListLength = ctrl.userDetails.length;
      var i;
      for (i = 0; i < usersListLength; i++) {
        // Comparing the provided email id with existing email id
        if (ctrl.formData.email === ctrl.userDetails[i].email) {
          // Setting the email id as not valid as it already exist
          ctrl.usernameNotValid = true;
        } else {
          // Setting the email id as valid once it does not match with existing email id
          ctrl.usernameNotValid = false;
        }
      }
    });
  }

  function checkPass() {
    if (angular.isDefined(ctrl.formData.pass) && angular.isDefined(ctrl.formData.password)) {
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
  }

  function userRegister() {
    if (angular.isDefined(ctrl.formData)) {
      ctrl.authObj.$createUserWithEmailAndPassword(ctrl.formData.email, ctrl.formData.pass)
        .then(function (firebaseUser) {
          ctrl.formData.firebaseUserId = firebaseUser.uid;
          delete ctrl.formData.pass;
          ctrl.userDetails.$add(ctrl.formData);
          ctrl.formData = {};
          ctrl.registrationForm.$setUntouched();
          $state.go('userHome', {
            userId: firebaseUser.uid
          });
          toastr.success('Registration Successfull!');
        }).catch(function (error) {
          toastr.error(error);
        });
    }
  }

  function cancel() {
    $state.go('myHome');
  }
}
