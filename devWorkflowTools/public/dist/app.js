!function(){"use strict";angular.module("myApp",["mainCtrl","app.routes"])}(),function(){"use strict";angular.module("app.routes",["ngRoute"]).config(["$routeProvider","$locationProvider",function(t,o){t.when("/",{templateUrl:"app/views/pages/home.html",controller:"mainController",controllerAs:"main"}),o.html5Mode(!0)}])}(),function(){"use strict";angular.module("mainCtrl",[]).controller("mainController",["$http",function(){var t=this;t.message="This is my message!"}])}();