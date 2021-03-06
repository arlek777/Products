﻿(function() {
    'use strict';

    angular.module("app.services").factory("contactService", contactService);

    function contactService() {
        var sessionStorageKey = "contacts";

        return {
            saveContacts: saveContacts,
            getContacts: getContacts,
            clearContactData: clearContactData
        }

        function saveContacts(customer) {
            var sessionStorageData = sessionStorage[sessionStorageKey];
            var savedContacts = angular.fromJson(sessionStorageData);

            savedContacts = customer;

            sessionStorageData = angular.toJson(savedContacts);
            sessionStorage.setItem(sessionStorageKey, sessionStorageData);
        }

        function getContacts() {
            var sessionStorageData = sessionStorage[sessionStorageKey];
            var saveContacts = angular.fromJson(sessionStorageData);
            return saveContacts;
        }

        function clearContactData() {
            sessionStorage.clear();
        }
    }
})();