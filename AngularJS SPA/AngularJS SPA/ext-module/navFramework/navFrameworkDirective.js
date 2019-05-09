"use strict";

angular.module("navFramework").directive("navFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "navFrameworkController",
        templateUrl: "ext-module/navFramework/navFrameworkTemplate.html"
    };
});