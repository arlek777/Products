(function() {
    'use strict';

    cartController.$inject = ["cartService"];
    angular.module("app.controllers").controller("CartController", cartController);

    function cartController(cartService) {
        var vm = this;

        vm.countProductsInCart = cartService.getCount;
        vm.getProductsInCart = cartService.getProducts();
    }
})();