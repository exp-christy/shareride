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
      component: 'myHome',
      css: 'myHome/myHome.css'
    })
    .state('createRide', {
      url: '/createRide',
      component: 'createRide',
      css: 'createRide/createRide.css'
    })
    .state('userHome', {
      url: '/userHome',
      component: 'userHome'
    })
    .state('userHeader', {
      url: '/userHeader',
      component: 'userHeader'
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
      component: 'myHeader',
      css: 'myHeader/myHeader.css'
    })
    .state('myFooter', {
      url: '/myFooter',
      component: 'myFooter',
      css: 'myFooter/myFooter.css'
    })
    .state('fireBase', {
      url: '/fireBase',
      component: 'fireBase'
    })
    .state('viewride', {
      url: '/viewride/:ride',
      component: 'viewRide'
    })
    .state('userRegistration', {
      url: '/userRegistration',
      component: 'userRegistration',
      css: 'userRegistration/userRegistration.css'
    })
    .state('userLogin', {
      url: '/userLogin',
      component: 'userLogin',
      css: 'userLogin/userLogin.css'
    })
    .state('bookRide', {
      url: '/bookRide/:id',
      component: 'bookRide'
    })
    .state('rideList', {
      url: '/rideList/:fromPlace',
      component: 'rideList',
      css: 'rideList/rideList.css'
    });
}
