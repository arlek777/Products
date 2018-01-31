(function () {
    'use strict';
    summaryController.$inject = ["cartService"];
    angular.module("app.controllers").controller("SummaryController", summaryController);

    function summaryController() {
        var vm = this;
        vm.productsInCart = cartService.getProducts();

        vm.confirm = function () {
            alert("TEST click");
        }
    }
})();