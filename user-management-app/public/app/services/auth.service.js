(function () {
    "use strict";

    angular.module('authentication')

        // ===================================================
        // auth factory to login and get information
        // inject $http for communicating with the API
        // inject $q to return promise objects
        // inject AuthToken to manage tokens
        // ===================================================
    
        .factory('AuthService', function ($http, $q, AuthToken) {

            //Create auth factory object
            var authFactory = {};

            //Log a user in
            authFactory.login = function (username, password) {
                return $http.post('/api/authenticate', {
                    username: username,
                    password: password
                }).success(function (data) {
                        AuthToken.setToken(data.token);
                        return data;
                    });
            };


            //Log a use out by clearing the token
            authFactory.logout = function () {
                //Clear the token
                AuthToken.setToken();
            };


            //Check if a user is logged in
            //checks if there is a local token
            authFactory.isLoggedIn = function () {
                return AuthToken.getToken();
            };


            //Get the logged in user
            authFactory.getUser = function () {
                if (AuthToken.getToken())
                    return $http.get('/api/me');
                else
                    return $q.reject({message: 'User has no token'});
            };



            // return auth factory object
            return authFactory;
        })


        // ===================================================
        // Factory for handling tokens
        // inject $window to store token client-side
        // ===================================================
        .factory('AuthTokenService', function ($window) {

            var authTokenFactory = {};

            //Get the token out of the local storage
            authTokenFactory.getToken = function () {
              return $window.localStorage.getItem('token');
            };


            // Set the token or clear the token
            // if a token is passed, set the token
            // if there is no token, clear it from local storage
            authTokenFactory.setToken = function (token) {
              if(token){
                  $window.localStorage.setItem('token', token);
              }else{
                  $window.localStorage.removeItem('token');
              }
            };

            return authTokenFactory;
        })

        // ===================================================
        // application configuration to integrate token into requests
        // ===================================================
        .factory('AuthInterceptorService', function($q, AuthToken) {

            var InterceptorFactory = {};

            //This will happen on all HTTP requests
            InterceptorFactory.request = function (config) {
                //Grab the token
                var token = AuthToken.getToken();

                //If the token exists, add it to the header as x-access-token
                if(token){
                    config.headers['x-access-token'] = token;
                }

                return config;
            };

            //Happens on response errors
            InterceptorFactory.responseError = function (response) {
                //If our server returns a 403 forbidden response
                if(response.status == 403){
                    AuthToken.setToken();

                    //Redirect if a token doesn't authenticate
                    $location.path('/login');
                }

                //Returns the errors from the server as a promise
                return $q.reject(response);
            };

            return InterceptorFactory;
        });

}());