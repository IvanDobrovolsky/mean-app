(function () {
    "use strict";

    angular.module('routerApp')
        //Contact page controller
        .controller('ContactController', function() {

            var vm = this;

            vm.message = 'Contact us! JK. This is just a demo.';
        })
}());