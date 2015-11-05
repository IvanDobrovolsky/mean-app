//Name our angular app
angular.module('firstApp', [])

    .controller('MainController', function () {
        //Bind this to vm (view-model)
        var vm = this;


        //Define variables and objects on this
        //This lets them to be available to our views

        //Define a basic variable
        vm.message = 'Hey, there! Come and see how good I look!';

        //Define a list of items
        vm.computers = [
            { name: 'Macbook Pro', color: 'Silver', nerdness: 7 },
            { name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6 },
            { name: 'Chromebook', color: 'Black', nerdness: 5 }
        ];

        //Information that comes from our form
        vm.computerData = {};

        vm.addComputer = function () {
            //Add computer to the list
            vm.computers.push({
                name: vm.computerData.name,
                color: vm.computerData.color,
                nerdness: vm.computerData.nerdness
            });
        };

        //After our computer has been added, clear the form
        vm.computerData = {}
    });