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
    // .state('myHeader', {
    //   url: '/myHeader',
    //   component: 'myHeader'
    // })
    // .state('myFooter', {
    //   url: '/myFooter',
    //   component: 'myFooter'
    // })
    .state('userHome', {
      url: '/userHome',
      component: 'userHome'
    })
    .state('userProfile', {
      url: '/userProfile',
      component: 'userProfile'
    })
    .state('imageUpload', {
      url: '/imageUpload',
      component: 'imageUpload'

    })
    // .state('userHeader', {
    //   url: '/userHeader',
    //   component: 'userHeader'
    // })
    // .state('userFooter', {
    //   url: '/userFooter',
    //   component: 'userFooter'
    // })
    .state('userRegistration', {
      url: '/userRegistration',
      component: 'userRegistration'
    })
    .state('userLogin', {
      url: '/userLogin',
      component: 'userLogin'
    })
    .state('signIn', {
      url: '/signIn',
      component: 'signIn'
    })
    .state('createRide', {
      url: '/createRide',
      component: 'createRide'
    })
    .state('searchRide', {
      url: '/searchRide',
      component: 'searchRide'
    })
    .state('userSearchRide', {
      url: '/userSearchRide',
      component: 'userSearchRide'
    })
    .state('rideList', {
      url: '/rideList/:fromPlace',
      component: 'rideList'
    })
    .state('userRideList', {
      url: '/userRideList/:fromPlace',
      component: 'userRideList'
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
