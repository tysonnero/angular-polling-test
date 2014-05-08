'use strict';

angular.module('pollingApp', ['ngRoute', 'ngResource', 'emguo.poller'])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
            when('/', {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            });
      }]);
