/**
 * Widget Directive
 */

angular
    .module('DragonBoard')
    .directive('rdWidget', rdWidget);

function rdWidget() {
    var directive = {
        transclude: true,
        template: '<a class="widget" ng-transclude></a>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};
