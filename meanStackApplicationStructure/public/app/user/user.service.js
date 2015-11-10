(function () {
    "use strict";

    angular.module('user')

        .factory('User', function ($http) {

            //Create a new object
            var userFactory = {};

            //Get a single user
            userFactory.get = function (id) {
              return $http.get('/api/users/' + id);
            };

            //Get all users
            userFactory.all = function () {
                return $http.get('/api/users');
            };

            //Create a user
            userFactory.update = function (id, userData) {
                return $http.put('/api/users/' + id, userData);
            };

            //Delete a user
            userFactory.delete = function (id) {
                return $http.delete('/api/users' + id);
            };

            //Return our entire userFactory object
            return userFactory;
        })
}());