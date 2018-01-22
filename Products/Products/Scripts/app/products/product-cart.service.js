(function() {
    'use strict';

    //TODO in future it can be service for working with server session for storing cart or local storage
    angular.module("app.services").factory("productCartService", productCartService);

    function productCartService() {
        var savedProducts = [];

        return {
            add: add,
            getCount: getCount
        }

        function add(item) {
            savedProducts.push(item);
        }

        function getCount() {
            return savedProducts.length;
        }
    }
})();