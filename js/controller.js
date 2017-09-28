angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = 'Welcome to the SnapCount';
    })
    .controller('NewsController', function($scope) {
        $scope.news = 'Latest News';
    
        $scope.showMe = false;
        $scope.myFunc = function() {
            $scope.showMe = !$scope.showMe;
        }
    })
    .controller('MediaController', function($scope) {
        $scope.media = 'This is the locker room';
    
        $scope.showMe = false;
        $scope.myFunc = function() {
            $scope.showMe = !$scope.showMe;
        }
    })
    .controller('TeamController', function($scope) {
        $scope.team = 'The Podcast Team Members';
    })
    .controller('ContactController', function($scope) {
        
        $scope.contact = 'Please Register';
    
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