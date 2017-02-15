angular
    .module('app')
    .controller("UserProfileController",UserProfileController);
function UserProfileController($firebaseArray,$firebaseAuth){
    var ctrl = this;
    ctrl.$onInit = init;
    ctrl.authObj = $firebaseAuth();
    ctrl.firebaseUser = ctrl.authObj.$getAuth();
    var bookref = firebase.database().ref().child("book").orderByKey().equalTo(ctrl.firebaseUser.uid);
    ctrl.bookList = $firebaseArray(bookref);
    
    function init(){
        ctrl.bookList.$loaded().then(function(){
            console.log(ctrl.bookList);
        });
        
    }
}