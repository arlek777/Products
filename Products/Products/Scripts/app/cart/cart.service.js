(function() {
    'use strict';

    angular.module("app.services").factory("cartService", cartService);

    function cartService() {
        var sessionStorageKey = "products";

        return {
            add: add,
            getCount: getCount,
            getProducts: getProducts,
            clearCartData: clearCartData
        }

        function add(product) {
            // Get data from sessionStorage. Data is always a string type.
            var sessionStorageData = sessionStorage[sessionStorageKey];
            console.log("SessionStorage: ", sessionStorageData);

            // We need an array but we have a string. We need to convert it to array.
            // Call angular.fromJson() converts string to object. In our cause it's array.
            var savedProducts = angular.fromJson(sessionStorageData);

            // If it's first user product, we don't have any sessionStorage. 
            // So we need to create it.
            if (typeof savedProducts === 'undefined' || savedProducts === null) {
                savedProducts = [product];
            } else {
                // If it's not first product and sessionStorage exists. We just add new item to our array.
                savedProducts.push(product);
            }

            // We need to convert our object array back to string to store in sessionStorage.
            sessionStorageData = angular.toJson(savedProducts);

            // And put updated array back to session storage.
            sessionStorage.setItem(sessionStorageKey, sessionStorageData);
        }

        function getCount() {
            var sessionStorageData = sessionStorage[sessionStorageKey];
            var saveProducts = angular.fromJson(sessionStorageData);

            if (typeof saveProducts !== 'undefined') {
                return saveProducts.length;
            } else {
                return 0;
            }
        }

        function getProducts() {
            var sessionStorageData = sessionStorage[sessionStorageKey];
            var saveProducts = angular.fromJson(sessionStorageData);
            return saveProducts;
        }

        function clearCartData() {
            sessionStorage.clear();
        }
    }
})();