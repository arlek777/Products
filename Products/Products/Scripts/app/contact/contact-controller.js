(function() {
    'use strict';

    angular.module("app.controllers").controller("ContactController", contactController);

    function contactController() {
        var vm = this;
        vm.checkValidation = false;
        vm.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        vm.confirm = ''; 

        vm.customer = {
            fullName: null,
            address: null,
            email: null
        };

        vm.confirmContactForm = function(valid) {
            if (valid) {
                vm.checkValidation = false;
                alert("valid");
            } else {
                vm.checkValidation = true;
            }
        }

        vm.errorAlert = function(error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Input is required";
                } else if (error.minlength) {
                    return "Not valid length";
                } else if (error.email) {
                    return "Not valid email address";
                } else if (error.pattern) {
                    return "Not valid email address pattern";
                }
            }
        }
    }
})();