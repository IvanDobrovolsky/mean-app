(function () {
    'use strict';

    angular.module('mainCtrl', [])
        .controller('mainController', ["$http", function() {
            var vm = this;
            vm.message = 'This is my message!';
        }]);
}());