"use strict";

angular.module('navMenu').directive('navMenu', function () {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {

        },
        controller: 'navMenuController',
        templateUrl: "ext-module/navMenu/navMenuTemplate.html",
        link: function (scope, element, attr) {

        }
    };
});