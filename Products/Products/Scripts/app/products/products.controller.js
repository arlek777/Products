(function() {
    'use strict';

    productsController.$inject = ["productsService", "cartService"];
    angular.module("app.controllers").controller("Products", productsController);

    function productsController(productsService, cartService) {
        var vm = this;

        // properties
        vm.products = [];
        vm.categories = [];

        vm.selectedCategory = null;

        // methods interfaces
        vm.isCategoryActive = isCategoryActive;
        vm.filterByCategory = filterByCategory;
        vm.addToCart = cartService.add;
        vm.getCartElementCount = cartService.getCount;
        vm.searchingProduct = '';
        vm.selectCategory = selectCategory;

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

        function selectCategory(category) {
            vm.selectedCategory = category;
            vm.searchingProduct = '';
        }
    }

})();