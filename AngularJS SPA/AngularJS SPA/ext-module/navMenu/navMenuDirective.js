"use strict";

angular.module('navMenu').directive('navMenu', function () {
    return {
        transclude: true,
        scope: {

        },
        controller: 'navMenuController',
        templateUrl: "ext-module/navMenu/navMenuTemplate.html",
        link: function (scope, element, attr) {

        }
    };
});