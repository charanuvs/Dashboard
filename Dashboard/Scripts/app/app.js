var dashboard = angular.module('dashboard', ['ngRoute', 'ngVis']);

dashboard.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "pages/tree.html",
        controller: "homeController"
    });
});