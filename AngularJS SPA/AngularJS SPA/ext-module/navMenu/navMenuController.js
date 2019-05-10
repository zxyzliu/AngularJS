"use strict";

angular.module('navMenu').controller('navMenuController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        this.setActiveItem = function (element) {
            $scope.activeItem = element;
        };

        this.setRoute = function (route) {
            $rootScope.$broadcast('nav-menu-item-selected-event', { route: route });
        };

        this.getActiveItem = function () {
            return $scope.activeItem;
        }
    }
]);