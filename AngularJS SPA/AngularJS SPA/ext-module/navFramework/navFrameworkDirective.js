"use strict";

angular.module("navFramework").directive("navFramework", function () {
    return {
        transclude: true,
        scope: {
            
        },
        controller: "navFrameworkController",
        templateUrl: "ext-module/navFramework/navFrameworkTemplate.html"
    };
});