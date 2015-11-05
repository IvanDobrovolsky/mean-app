(function () {
    "use strict";

    angular.module('routerApp')
        //About page controller
        .controller('AboutController', function() {

            var vm = this;

            vm.message = 'Look! I am an about page.';
        })
}());