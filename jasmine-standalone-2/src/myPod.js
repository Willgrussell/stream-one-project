angular.module('SnapCount')
.controller('myPod', function ($scope) {
        $scope.showMe = false;
        $scope.myFunc = function () {
            $scope.showMe = !$scope.showMe;
        }
    });