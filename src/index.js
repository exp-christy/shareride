angular
<<<<<<< HEAD
  .module('app', ['ui.router','ui.bootstrap', 'ngAnimate', 'toastr']);
=======
  .module('app', ['ui.router', 'ui.bootstrap', 'firebase']);

var config = {
  apiKey: "AIzaSyCexbbGcO-lskcQ2bhMK2qVQRpRKX2_aCA",
  authDomain: "sample-95dc3.firebaseapp.com",
  databaseURL: "https://sample-95dc3.firebaseio.com",
  storageBucket: "sample-95dc3.appspot.com",
  messagingSenderId: "28749619647"
};
firebase.initializeApp(config);
>>>>>>> bbfed6fb3329e2d3ab5fe6afbf0adff5acfa0afc
