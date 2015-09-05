angular.module('utils', []);

/**
 * Directive for setting focus on an element when it is initialized.
 */
angular.module('utils').directive('autoFocus', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            $timeout(function () {
                element[0].focus();
            }, 0);
        }
    };
});

/**
 * HTTP request interceptor which keeps track of all possibly content modifying requests, and all open requests.
 */
angular.module('utils').factory('GlobalCountInterceptor', function ($rootScope, $q) {

    $rootScope.$httpOpen = 0;
    $rootScope.$httpModifying = 0;

    var update = function (method, amount) {
        if (method == 'POST' || method == 'PUT' || method == 'DELETE') {
            $rootScope.$httpModifying = $rootScope.$httpModifying + amount;
        }
        $rootScope.$httpOpen = $rootScope.$httpOpen + amount;
    };

    return {
        request: function (config) {
            update(config.method, 1);
            return config;
        },
        requestError: function (config) {
            return config;
        },
        response: function (response) {
            update(response.config.method, -1);
            return response;
        },
        responseError: function (response) {
            update(response.config.method, -1);
            return $q.reject(response);
        }
    };

});

angular.module('utils').config(['$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push('GlobalCountInterceptor');

}]);
