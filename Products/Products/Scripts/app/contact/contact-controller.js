﻿(function() {
    'use strict';

    angular.module("app.controllers").controller("ContactController", contactController);

    function contactController() {
        var vm = this;
        vm.checkValidation = true;

        vm.customer = {
            fullName: null,
            address: null,
            email: null
        };

        vm.confirmContact = function() {
            alert("Form is Valid");
        }

        vm.checkContactForm = function() {
            if (contactForm.$valid) {
                vm.checkValidation = false;
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
                }
            }
        }
    }
})();