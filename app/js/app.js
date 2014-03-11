
var cleen = angular.module('cleen', [ 'ngRoute','cleencontroller']);




cleen.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/clothes/:sex/:type', {
                templateUrl: 'partials/attribute.html',
                controller: 'clothesController'
            }).
            when('/brand', {
                templateUrl: 'partials/brand.html',
                controller: 'clothesController'
            }).
            when('/brand/:brand', {
                templateUrl: 'partials/attribute.html',
                controller: 'clothesController'
            }).
            when('/materials', {
                templateUrl: 'partials/attribute.html',
                controller: 'clothesController'
            }).
            when('/materials/:materials', {
                templateUrl: 'partials/attribute.html',
                controller: 'clothesController'
            }).
            when('/color', {
                templateUrl: 'partials/colors.html',
                controller: 'clothesController'
            }).
            when('/color/:color', {
                templateUrl: 'partials/attribute.html',
                controller: 'clothesController'
            }).
            when('/clothes/men', {
                templateUrl: 'partials/clothes_M.html',
                controller: 'clothesController'
            }).
            when('/clothes/women', {
                templateUrl: 'partials/clothes_F.html',
                controller: 'clothesController'
            }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: ''
            }).
            when('/clothes/:sex/:type/:nameid', {
                templateUrl: 'partials/clothe.html',
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
            when('/faq', {
                templateUrl: 'partials/faq.html',
                controller: ''
            }).
            otherwise({
                redirectTo: '/home'
            });
  }]);
  

