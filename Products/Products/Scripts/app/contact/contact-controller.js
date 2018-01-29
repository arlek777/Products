(function() {
    'use strict';

    angular.module("app.controllers").controller("ContactController", contactController);

    function contactController() {
        var vm = this;

        vm.customer = {
            fullName: null, adress: null, email: null
        };

        vm.showAlert = function() {
            alert("Form is Valid");
        }
    }
})();