(function() {
    'use strict';

    angular.module("app.services").factory("contactService", contactService);

    function contactService() {
        var sessionStorageKey = "contacts";

        return {
            saveContacts: saveContacts
        }

        function saveContacts(customer) {
            var sessionStorageData = sessionStorage(sessionStorageKey);
            console.log("IsDATA: ", sessionStorageData);

            var savedContacts = angular.fromJson(sessionStorageData);

            if (typeof savedContacts === 'undefined' || savedContacts === null) {
                savedContacts = customer;
            }

            sessionStorageData = angular.toJson(savedContacts);
            sessionStorage.setItem(sessionStorageKey, sessionStorageData);
        }
    }
})();