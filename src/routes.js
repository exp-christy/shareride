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
    .state('myHeader', {
      url: '/myHeader',
      component: 'myHeader'
    })
    .state('myFooter', {
      url: '/myFooter',
      component: 'myFooter'
    })
    .state('userHome', {
      url: '/userHome',
      component: 'userHome'
    })
    .state('userHeader', {
      url: '/userHeader',
      component: 'userHeader'
    })
    .state('userFooter', {
      url: '/userFooter',
      component: 'userFooter'
    })
    .state('userRegistration', {
      url: '/userRegistration',
      component: 'userRegistration'
    })
    .state('userLogin', {
      url: '/userLogin',
      component: 'userLogin'
    })
    .state('createRide', {
      url: '/createRide',
      component: 'createRide'
    })
    .state('searchRide', {
      url: '/searchRide',
      component: 'searchRide'
    })
    .state('rideList', {
      url: '/rideList/:fromPlace',
      component: 'rideList'
    })
    .state('viewride', {
      url: '/viewride/:ride',
      component: 'viewRide'
    })
    .state('fireBase', {
      url: '/fireBase',
      component: 'fireBase'
    });
}
