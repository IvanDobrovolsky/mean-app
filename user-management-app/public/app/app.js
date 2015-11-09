(function () {
    "use strict";

    var app = angular.module('main', ["user"]);

    app.controller('main', MainController);

    function MainController(Stuff){
        var vm = this;

        //Get all the stuff
        Stuff.all()

            //Promise object
            .success(function (data) {

                // bind the data to a controller variable
                // this comes from the stuffService
                vm.data = data;
            })
    }

}());