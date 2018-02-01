(function () {
    'use strict';
    summaryController.$inject = ["cartService", "contactService"];
    angular.module("app.controllers").controller("SummaryController", summaryController);

    function summaryController(cartService, contactService) {
        var vm = this;
        vm.productsInCart = cartService.getProducts();
        vm.customerContacts = contactService.getContacts();

        vm.totalPriceCount = function() {
            var sum = 0;

            for (var i = 0; i < vm.productsInCart.length; i++) {
                sum += vm.productsInCart[i].price;
            }
            return sum;
        }

        vm.confirm = function() {
            alert("TEST click");
        }

    }
})();