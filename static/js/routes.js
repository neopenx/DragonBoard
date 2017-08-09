'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('DragonBoard').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                cache:'false',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                cache:'false',
                templateUrl: 'templates/tables.html'
            })
			.state('graph', {
                url: '/graph',
                cache:'false',
                templateUrl: 'templates/graph.html'
            })
			;
    }
]);