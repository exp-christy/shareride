angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('myHome', {
      url: '/',
      component: 'myHome'
    })
    .state('createride', {
      url: '/createride',
      component: 'createRide'
    })
    .state('driverDetails', {
      url: '/createride/driverDetails',
      component: 'driverDetails'
    })
    .state('vehicleDetails', {
      url: '/createride/vehicleDetails/:driverId',
      component: 'vehicleDetails'
    })
    .state('rideDetails', {
      url: '/createride/rideDetails/:vehicleId',
      component: 'rideDetails'
    })
    .state('searchRide', {
      url: '/searchRide',
      component: 'searchRide'
    })
    .state('fireBase', {
      url: '/fireBase',
      component: 'fireBase'
    })
    .state('viewride', {
      url: '/viewride/:rideID',
      component: 'viewRide'
    })
    .state('bookRide', {
      url: '/bookRide/:id',
      component: 'bookRide'
    })
    .state('rideList', {
      url: '/rideList/:fromPlace',
      component: 'rideList'
    });
}
