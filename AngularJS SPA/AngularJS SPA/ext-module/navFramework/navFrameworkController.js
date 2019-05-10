"use strict";

angular.module("navFramework").controller("navFrameworkController", [
    '$scope',
    function ($scope) {
        $scope.isMenuButtonVisible = true;
        $scope.$on('nav-menu-item-selected-event', function (evt, data) {
            $scope.routeString = data.route;
        });
    }
]);