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
    .state('createRide', {
      url: '/createRide',
      component: 'createRide'
    })
    .state('driverDetails', {
      url: '/createRide/driverDetails',
      component: 'driverDetails'
    })
    .state('vehicleDetails', {
      url: '/createRide/vehicleDetails',
      component: 'vehicleDetails'
    })
    .state('rideDetails', {
      url: '/createRide/rideDetails',
      component: 'rideDetails'
    })
    .state('searchRide', {
      url: '/searchRide',
      component: 'searchRide'
    })
    .state('myHeader', {
      url: '/myHeader',
      component: 'myHeader'
    })
    .state('myFooter', {
      url: '/myFooter',
      component: 'myFooter'
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
