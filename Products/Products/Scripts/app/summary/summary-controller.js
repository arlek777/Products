(function () {
    'use strict';
    summaryController.$inject = ["cartService"];
    angular.module("app.controllers").controller("SummaryController", summaryController);

    function summaryController(cartService) {
        var vm = this;
        vm.productsInCart = cartService.getProducts();

        vm.totalPriceCount = function() {
            vm.sum = 0;

            for (var i = 0; i < vm.productsInCart.length; i++) {
                console.log(vm.productsInCart.length);
                vm.sum += vm.productsInCart[i].price;
            }
            return vm.sum;
        }

        vm.confirm = function() {
            alert("TEST click");
        }
    }
})();