(function() {
    'use strict';

    angular.module("app", ["app.routes", "app.controllers"]);
    angular.module("app.controllers", ["app.services"]);
    angular.module("app.services", []);
})();