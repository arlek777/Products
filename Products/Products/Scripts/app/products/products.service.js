(function() {
    'use strict';

    productsService.$inject = ["$http"];
    angular.module("app.services").factory("productsService", productsService);

    function productsService($http) {
        var urls = {
            getProducts: '/api/products/getProducts',
            getCategories: '/api/products/getCategories'
        }

        return {
            getProducts: getProducts,
            getCategories: getCategories
        }

        function getProducts() {
            return $http.get(urls.getProducts).then(function(response) {
                return response.data;
            });
        }

        function getCategories() {
            return $http.get(urls.getCategories).then(function (response) {
                return response.data;
            });
        }
        /*
        function getSearchProducts(searchingProduct) {
            return $http.get(urls.getProducts + "/" + searchingProduct).then(function (response) {
                return response.data;
            });
        }
        */
    }

})();