

var cleen = angular.module('cleen', []);

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
            otherwise({
                redirectTo: '/home'
            });
  }]);
  
cleen.controller('mainNavBar', function ($scope, $http) {
    $scope.makeMenus=function(){
        $http.get('/typesM')
            .success(function(data){
                if (data!='err'){
                    $scope.typesM=data;
                }
            });
        $http.get('/typesW')
            .success(function(data){
                if (data!='err'){
                    $scope.typesW=data;
                }
            });
        $http.get('/brands')
            .success(function(data){
                if (data!='err'){
                    $scope.brands=data;
                }
             });
        $http.get('/materials')
            .success(function(data){
                if (data!='err'){
                    $scope.materials=data;
                }
            });
        $http.get('/colors')
            .success(function(data){
                if (data!='err'){
                    $scope.colors=data;
                }
            });
    };
    $scope.makeMenus();
});

cleen.controller('clothesController', function($scope,$http,$location) {
    $scope.makeClothes=function() {
        var whichCategorie = $location.path().split('/')[1];
        if (whichCategorie == 'clothes') {
            var whichSex =$location.path().split('/')[2];
            var whichOne = $location.path().split('/')[3];
            var path = whichCategorie+'/'+whichSex+'/'+whichOne;
        }
        else {
            var whichOne = $location.path().split('/')[2];
            var path = whichCategorie+'/'+whichOne;
        }
        $http.get(path)
            .success(function(data){
                if (data != 'err'){
                    $scope.category=whichOne;
                    $scope.clothes=data;
                }
            });
    };
    $scope.makeClothes();
});

cleen.controller('clothesPage', function($scope,$http,$location) {
    var id_place = $location.path().split('-').length - 1;
    var id =$location.path().split('-')[id_place];
    $scope.getClothe=function() {
        $http.get(id)
            .success(function(data){
                if (data != 'err'){
                    $scope.clothe = data[0];
                    $http.get('/clean/lavage/test1/lavage/' + data[0].lavage)
                        .success(function(cleaning){
                            if (cleaning != 'err'){
                                $scope.lavage = cleaning[0];
                            }
                        });
                    $http.get('/clean/lavage/test1/blanchiment/' + data[0].blanchiment)
                        .success(function(cleaning){
                            if (cleaning != 'err'){
                                $scope.blanchiment = cleaning[0];
                            }
                        });
                    $http.get('/clean/lavage/test1/sechage/' + data[0].sechage)
                        .success(function(cleaning){
                            if (cleaning != 'err'){
                                $scope.sechage = cleaning[0];
                            }
                        });
                    $http.get('/clean/lavage/test1/repassage/' + data[0].repassage)
                        .success(function(cleaning){
                            if (cleaning != 'err'){
                                $scope.repassage= cleaning[0];
                            }
                        });
                    $http.get('/clean/lavage/test1/nettPro/' + data[0].nettPro)
                        .success(function(cleaning){
                            if (cleaning != 'err'){
                                $scope.nettPro= cleaning[0];
                            }
                        });
                }
            });
    };
    $scope.getClothe();
});
