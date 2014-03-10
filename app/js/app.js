
var cleen = angular.module('cleen', [ 'ngRoute','cleencontroller']);




cleen.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/clothes/:sex/:type', {
                templateUrl: 'partials/robes.html',
                controller: 'clothesController'
            }).
            when('/brand/:brand', {
                templateUrl: 'partials/robes.html',
                controller: 'clothesController'
            }).
            when('/materials/:materials', {
                templateUrl: 'partials/robes.html',
                controller: 'clothesController'
            }).
            when('/color/:color', {
                templateUrl: 'partials/robes.html',
                controller: 'clothesController'
            }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: ''
            }).
            when('/clothes/:sex/:type/:nameid', {
                templateUrl: 'partials/robe2.html',
                controller: ''
            }).
            when('/profile', {
                controller: 'authController',
                templateUrl: 'partials/moncompte.html'
            }).
            when('/login', {
                templateUrl: '/partials/login.html',
                controller: 'loginController'
            }).
            when('/signup', {
                templateUrl: '/partials/signup.html',
                controller: 'signupController'
            }).
            when('/new', {
                templateUrl: '/partials/new.html',
                controller: 'authController'
            }).
            otherwise({
                redirectTo: '/home'
            });
  }]);
  

