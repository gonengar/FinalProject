angular.module('myApp').directive('graphOptionsSelector', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/graph-options-selector/graph-options-selector.html',
        link: function (scope) {
            scope.graphOptions = ['Pie', 'Chart'];
        }
    };
});

