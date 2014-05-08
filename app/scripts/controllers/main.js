'use strict';

var pollingApp = angular.module('pollingApp');

pollingApp
    .factory('PollerService', ['$http', '$resource', 'poller', function ($http, $resource, poller) {

        return {
            start: function () {

                console.log('start');

                var resource1 = $resource('http://localhost:5000/api/poll1');
                var resource2 = $resource('http://localhost:5000/api/poll2');

                var poller1 = poller.get(resource1, {
                    action: 'save',
                    delay: 500
                });

                var poller2 = poller.get(resource2, {
                    action: 'save',
                    delay: 500
                });
            },
            stop: function () {

                console.log('save');
                poller.stopAll();

            },
            save: function () {

                console.log('save');
                return $http.post('http://localhost:5000/api/save');

            }
        };
    }])
    .controller('MainCtrl', ['$scope', 'PollerService', function ($scope, PollerService) {

        $scope.start = function () {

            if (!$scope.started) {
                $scope.started = true;
                PollerService.start();
            }
        };

        $scope.stop = function () {

            if ($scope.started) {
                $scope.started = false;
                PollerService.stop();
            }
        };

        $scope.save = function () {

            PollerService.save();
        };
    }]);
