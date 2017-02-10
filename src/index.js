angular
  .module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'toastr']);
var config = {
  apiKey: "AIzaSyCtT4Y-HLlHkS9C8pRzQZYHXImWJjxsSbc",
  authDomain: "shareride-fe79d.firebaseapp.com",
  databaseURL: "https://shareride-fe79d.firebaseio.com",
  storageBucket: "shareride-fe79d.appspot.com",
  messagingSenderId: "685827960392"
};
firebase.initializeApp(config);
