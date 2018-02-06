(function () {
    'use strict';

    summaryService.$inject = ["$http"];
    angular.module("app.services").factory("summaryService", summaryService);

    function summaryService($http) {

        var url = {
            postConfirmOrder: "/api/order/confirmOrder"
        }

        return {
            confirmOrder: confirmOrder
        }

        function confirmOrder(customerData) {
            return $http.post(url.postConfirmOrder, customerData);
        }
    }
})();