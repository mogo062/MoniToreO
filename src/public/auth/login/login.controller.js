(function () {
  'use strict';

  angular.module('public.auth')
  .controller('LoginController', LoginController);

  LoginController.$inject=[];
  function LoginController() {
    var loginCtrl = this;
    console.log(loginCtrl);
  };
})();
