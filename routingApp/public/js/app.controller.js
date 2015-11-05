(function () {
    "use strict";

    angular.module('routerApp')

        //App page specific controller
        .controller('AppController', function() {
            var vm = this;
        //Create a bigMessage variable to display in our view
            vm.bigMessage = 'A smooth sea never made a skilled sailor.';
        })
}());
