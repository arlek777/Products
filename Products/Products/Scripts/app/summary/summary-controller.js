(function () {
    'use strict';
    summaryController.$inject = ["cartService", "contactService", "summaryService", "$location"];
    angular.module("app.controllers").controller("SummaryController", summaryController);

    function summaryController(cartService, contactService, summaryService, $location) {
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

        var customerData = {
            fullName: vm.customerContacts.fullName,
            address: vm.customerContacts.address,
            email: vm.customerContacts.email,
            totalPrice: vm.totalPriceCount()
        }
        
        vm.confirmOrder = function() {
            summaryService.confirmOrder(customerData).then(function() {
                contactService.clearContactData();
                cartService.clearCartData();
                $location.path("/");
                alert("Your order was registered");
            });
        }
    }
})();