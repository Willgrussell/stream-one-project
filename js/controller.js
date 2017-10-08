angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = 'Welcome to the SnapCount';
    })
    .controller('contactForm', function($scope) {
        
        $scope.contactForm = {};
    
        $scope.contactMe = function() {
            if ($scope.contactForm.$valid) {
                $scope.contactForm.email = $scope.contact.email;
            }
            
            alert("Thank you for joining the SnapCount team \nWe hope you enjoy all the latest news coming up during the year")
        };
    })
    .controller('NewsController', function($scope) {
        $scope.news = 'Latest News';
    
        $scope.aug17 = false;
    
        $scope.sept17 = false;
    
        $scope.oct17 = false;
    
        $scope.nov17 = false;
    })
    .controller('MediaController', function($scope) {
        $scope.media = 'This is the locker room';
    
        $scope.podcast = false;
    
        $scope.image = false;
    
        $scope.video = false;
    })
    .controller('TeamController', function($scope) {
        $scope.team = 'The Podcast Team Members';
    })
    .controller('ContactController', function($scope) {
        
        $scope.contact = 'Please Register';
    
        $scope.registrationUser = {};
        
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.firstName = $scope.register.firstName;
                $scope.registrationUser.lastName = $scope.register.lastName;
                $scope.registrationUser.email = $scope.register.email;
                $scope.registrationUser.event = $scope.register.event;
                $scope.registrationUser.date = $scope.register.date;
            }
             
            alert("Hello " + $scope.registrationUser.firstName + " " + $scope.registrationUser.lastName + "\nCongratulations on registering your email and event option\n" + $scope.registrationUser.email + "\n" + $scope.registrationUser.event + "\nOn your choosen date " + $scope.registrationUser.date + "\nThank you for booking with the SNAPCOUNT Team!")
        };
    });