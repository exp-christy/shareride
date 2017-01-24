angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('createride', {
      url: '/createride',
      component: 'createRide'
    })
    .state('searchRide', {
      url: '/searchRide',
      component: 'searchRide'
    })
    .state('viewRide',{
      url:'/createRide',
      component: 'createRide'
    });
}
