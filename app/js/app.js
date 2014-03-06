
var cleen = angular.module('cleen', [ 'ngRoute','cleencontroller']);


//
//app.get('/profile', isLoggedIn, function(req, res) {
//    console.log(req);
//    res.render(__dirname + '/app/partials/profile.html', {
//        user : req.user // get the user out of session and pass to template
//    });
//});


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
                controller: 'loginController',
                templateUrl: 'partials/profile.html'
            }).
            otherwise({
                redirectTo: '/home'
            });
  }]);
  

