(function () {
    "use strict";

    angular.module('routerApp')
        //Home page specific controller
        .controller('HomeController', function() {

            var vm = this;

            vm.message = 'This is the home page!';
        })
}());