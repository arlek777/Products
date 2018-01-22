(function() {
    'use strict';

    routesConfig.$inject = ["$routeProvider", "$locationProvider"];
    angular.module("app.routes", ["ngRoute"]).config(routesConfig);

    function routesConfig($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when("/", {
            templateUrl: "NgViews/Products.html",
            controller: "Products",
            controllerAs: "vm"
        });
    }
})();