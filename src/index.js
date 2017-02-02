angular
  .module('app', ['ui.router','ui.bootstrap', 'ngAnimate', 'toastr', 'firebase']);
var config = {
  apiKey: "AIzaSyCexbbGcO-lskcQ2bhMK2qVQRpRKX2_aCA",
  authDomain: "sample-95dc3.firebaseapp.com",
  databaseURL: "https://sample-95dc3.firebaseio.com",
  storageBucket: "sample-95dc3.appspot.com",
  messagingSenderId: "28749619647"
};
firebase.initializeApp(config);

