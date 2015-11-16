(function () {
    'use strict';

    let app = angular.module('main', []);


    //Route configuration
    app.config(($routeProvider, $locationProvider) => {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html',
                controller: 'mainController',
                controllerAs: 'main'
            });

        $locationProvider.html5Mode(true);
    });


}());