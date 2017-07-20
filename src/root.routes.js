(function () {
  'use strict';

  angular.module('MoniToreOApp')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/auth/login');
    // *** Set up UI states ***
    $stateProvider
    // Home page
    .state('auth', {
      url : '/',
      template: '<div ui-view>TT</div>',
      redirectTo: 'auth.login'
    })
    .state('auth.login',{
      url : '/auth/login',
      template: '<login>EE</login>'

    });
  };
})();
