(function () {
    'use strict';
 var sharingsmiles = angular.module('sharingsmiles', ['ngRoute', 'ngCookies'])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'templates/home.html'
               
            })
            .when('/aboutus', {
                controller: 'AboutusController',
                templateUrl: 'templates/aboutus.html'
               
            })
            
            .when('/blog', {
                  controller: 'BlogController',
              templateUrl: 'templates/blog.html'
            
                
            })

            
            .otherwise({ redirectTo: '/home' });
    }

    

})();