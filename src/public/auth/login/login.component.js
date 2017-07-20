(function () {
  'use strict';

  var login={
    templateUrl:'src/public/auth/login/login.html',
    bindings:{

    },
    controller: 'LoginController',
    controllerAs: 'loginCtrl'
  };
  angular.module('public.auth')
  .component('login', login)
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/auth/login');
    // *** Set up UI states ***
    $stateProvider
    // Home page
    .state('auth', {
      url : '/auth',
      template: '<div ui-view></div>',
      redirectTo: 'auth.login'
    })
    .state('auth.login',{
      url : '/login',
      component: 'login'
    });
  };
})();
