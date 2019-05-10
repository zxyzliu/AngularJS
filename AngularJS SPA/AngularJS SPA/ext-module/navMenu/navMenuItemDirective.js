"use strict";

angular.module('navMenu').directive('navMenuItem', function () {
    return {
        require: '^navMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: "ext-module/navMenu/navMenuItemTemplate.html",
        link: function (scope, element, attr, ctrl) {
            scope.isActive = function () {
                return element === ctrl.getActiveItem();
            };

            element.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveItem(element);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});