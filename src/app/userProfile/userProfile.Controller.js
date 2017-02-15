angular
  .module('app')
  .controller("UserProfileController", UserProfileController);

function UserProfileController($firebaseArray, $firebaseAuth, $state) {
  var ctrl = this;
  ctrl.$onInit = init;
  ctrl.cancelBook = cancelBook;
  ctrl.authObj = $firebaseAuth();
  ctrl.firebaseUser = ctrl.authObj.$getAuth();
  var bookref = firebase.database().ref().child('book');
  var rideref = firebase.database().ref().child('rideDetailsList');
  ctrl.rideList = $firebaseArray(rideref);
  ctrl.rideDetail = [];
  ctrl.show = true;
  
  function init() {
    ctrl.authObj.$onAuthStateChanged(function (firebaseUser) {
        if(firebaseUser){
            var query = bookref.orderByChild('firebaseUserId').equalTo(firebaseUser.uid);
            ctrl.bookList = $firebaseArray(query);
            ctrl.bookList.$loaded().then(function (res) {
                var i;
                var numberOfBookedRides = ctrl.bookList.length;
                if(numberOfBookedRides > 0){
                    ctrl.show = true;
                    for(i = 0; i < numberOfBookedRides; i++){
                        ctrl.rideDetail[i] = angular.copy(ctrl.rideList.$getRecord(ctrl.bookList[i].rideId));
                        ctrl.rideDetail[i].bookId = angular.copy(ctrl.bookList[i].$id);
                        ctrl.rideDetail[i].firebaseUserId = angular.copy(ctrl.bookList[i].firebaseUserId);
                        ctrl.rideDetail[i].rideId = angular.copy(ctrl.bookList[i].rideId);
                    }
                }
                else{
                    ctrl.show = false;
                }
            });
        }
    });

  }
  function cancelBook(bookId, userId, rdId){
    var deleteBook = ctrl.bookList.$getRecord(bookId);
    ctrl.bookList.$remove(deleteBook);
    var updateRide = ctrl.rideList.$getRecord(rdId);
    updateRide.vacantSeats = updateRide.vacantSeats + 1;
    ctrl.rideList.$save(updateRide);
    location.reload();
  }
}
