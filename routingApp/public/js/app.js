angular.module('routerApp', ["ngRoute"])
    // configure our routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
// route for the home page
            .when('/', {
                templateUrl : 'views/pages/home.html',
                controller : 'homeController',
                controllerAs: 'home'
            })
// route for the about page
            .when('/about', {
                templateUrl : 'views/pages/about.html',
                controller : 'aboutController',
                controllerAs: 'about'
            })
// route for the contact page
            .when('/contact', {
                templateUrl : 'views/pages/contact.html',
                controller : 'contactController',
                controllerAs: 'contact'
            });
// set our app up to have pretty URLS
        $locationProvider.html5Mode(true);
    })


// create the controllers
// this will be the controller for the ENTIRE site
    .controller('mainController', function() {
        var vm = this;
// create a bigMessage variable to display in our view
        vm.bigMessage = 'A smooth sea never made a skilled sailor.';
    })
// home page specific controller
    .controller('homeController', function() {
        var vm = this;

        vm.message = 'This is the home page!';
    })
// about page controller
    .controller('aboutController', function() {
        var vm = this;
        vm.message = 'Look! I am an about page.';
    })
// contact page controller
    .controller('contactController', function() {
        var vm = this;
        vm.message = 'Contact us! JK. This is just a demo.';
    });