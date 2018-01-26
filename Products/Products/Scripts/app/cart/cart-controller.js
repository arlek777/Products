(function() {
    'use strict';

    cartController.$inject = ["productCartService"];
    angular.module("app.controllers").controller("CartController", cartController);

    function cartController(productCartService) {
        var vm = this;

        vm.countProductsInCart = productCartService.getCount;
        vm.getProductsInCart = productCartService.getProducts();
    }
})();