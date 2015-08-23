angular.module('myApp').directive('project', function (selectorService, $mdDialog) {
    return {
        restrict: 'E',
        templateUrl: 'components/project/project.html',
        link: function (scope) {
            scope.addSelectionObject = selectorService.addObject;
            scope.showConfirm = function (ev) {
                var confirm = $mdDialog.confirm()
                    .parent(angular.element(document.body))
                    .title('Would you like to query the data?')
                    .content('The selected range ' + selectorService.getFirstObject().column + ',' + selectorService.getSecondObject().column + ' will be sent to the server for investigation')
                    .ok('Please do it!')
                    .cancel('Sounds like a scam')
                    .targetEvent(ev);

                $mdDialog.show(confirm);
            };


            scope.isDisabled = function () {
                return selectorService.getCounter() != 2;
            }
        }
    };
});