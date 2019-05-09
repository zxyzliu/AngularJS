"use strict";

angular.module('navMenu').directive('navMenuItem', function () {
    return {
        require: '^navMenu',
        scope: {
            label: '@'
        },
        templateUrl: "ext-module/navMenu/navMenuItemTemplate.html",
        link: function (scope, element, attr, ctrl) {

        }
    };
});