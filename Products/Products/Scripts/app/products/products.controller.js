(function() {
    'use strict';

    productsController.$inject = ["productsService", "productCartService"];
    angular.module("app.controllers").controller("Products", productsController);

    function productsController(productsService, productCartService) {
        var vm = this;

        // properties
        vm.products = [];
        vm.categories = [];

        vm.selectedCategory = null;

        // methods interfaces
        vm.isCategoryActive = isCategoryActive;
        vm.filterByCategory = filterByCategory;
        vm.addToCart = productCartService.add;
        vm.getCartElementCount = productCartService.getCount;

        // methods implementations
        activate();

        function activate() {
            productsService.getCategories().then(function(data) {
                vm.categories = data;
                vm.categories.splice(0, 0, { title: 'All' });
                vm.selectedCategory = vm.categories[0];
            });

            productsService.getProducts().then(function(data) {
                vm.products = data;
            });
        }

        function isCategoryActive(category) {
            return category && vm.selectedCategory && category.title === vm.selectedCategory.title;
        }

        function filterByCategory() {
            return function (product) {
               if (vm.selectedCategory && vm.selectedCategory.title === 'All') {
                   return true;
               }

               return vm.selectedCategory && product.category && vm.selectedCategory.title === product.category.title;
           }
        }
    }

})();