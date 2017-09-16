angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = 'Welcome to the SnapCount';
    })
    .controller('ContactController', function($scope) {
        $scope.registrationUser = {};
        
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.firstName = $scope.user.firstName;
                $scope.registrationUser.lastName = $scope.user.lastName;
                $scope.registrationUser.email = $scope.user.email;
            }
             
            console.log($scope.registrationUser.firstName + " " + $scope.registrationUser.lastName + " " + $scope.registrationUser.email);
        };
    });