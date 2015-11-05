(function () {
    "use strict";
    var routerApp = angular.module('routerApp', ["ngRoute"])

        //Configure our routes
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                //Route for the home page
                .when('/', {
                    templateUrl : 'views/pages/home.html',
                    controller : 'HomeController',
                    controllerAs: 'home'
                })

                //Route for the about page
                .when('/about', {
                    templateUrl : 'views/pages/about.html',
                    controller : 'AboutController',
                    controllerAs: 'about'
                })
                //Route for the contact page
                .when('/contact', {
                    templateUrl : 'views/pages/contact.html',
                    controller : 'ContactController',
                    controllerAs: 'contact'
                });
// set our app up to have pretty URLS
            $locationProvider.html5Mode(true);
        })

}());

