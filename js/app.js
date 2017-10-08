angular.module('SnapCount', ['ngRoute', 'RouteControllers', 'ngAnimate']);

angular.module('SnapCount').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true); //Enables href routing without hashes
    
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/news', {
        templateUrl: 'templates/news.html',
        controller: 'NewsController'
    })
    .when('/media', {
        templateUrl: 'templates/media.html',
        controller: 'MediaController'
    })
    .when('/team', {
        templateUrl: 'templates/team.html',
        controller: 'TeamController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    });
});