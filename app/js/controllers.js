var cleencontroller = angular.module('cleencontroller', []);

function TodoCtrl($scope) {
        $scope.todos = [];

        var Todo = $data.define("Todo", {
            task: String,
            done: Boolean
        });
        
        $scope.$watch('search', function(search) {
            var promise = (search ? Todo.query('it.task.contains(p)',{p: search}) : Todo.readAll());
            promise.then(function (todos) {
                $scope.$apply(function () {
                    $scope.todos = todos;
                });
            });       
        });
        
        $scope.remove = function (todo) {
            todo.remove()
                .then(function() {
                    $scope.$apply(function() {
                       var todos = $scope.todos;
                       todos.splice(todos.indexOf(todo), 1);
                    });
                })
               .fail(function(err) {
                   alert("Error deleting item");
               });
        };

        $scope.addNew = function (todo) {
            Todo.save(todo).then(function (todo) {
                $scope.$apply(function () {
                    $scope.newTodo = null;
                    $scope.todos.push(todo);
                });
            });
        };
    }

cleencontroller.controller('mainNavBar', function ($scope, $http) {
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

cleencontroller.controller('clothesController', function($scope,$http,$location) {
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

cleencontroller.controller('clothesPage', function($scope,$http,$location) {
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

cleencontroller.controller('authController', function($scope, $http, $location) {
    $scope.isAuthenticated = function() {
        $http.get('/isAuthenticated')
            .success(function(data){
                if (data != 'true') {
                    $location.url('/login')
                }
            });
    };
    $scope.isAuthenticated();
});

cleencontroller.controller('loginController', function($scope, $http) {
    $scope.isLogged = function() {
        $http.get('/login')
            .success(function(data){
                if (data[0].length > 0) {
                    $scope.message = data[0];
                    $scope.show = true;
                }
                else {
                    $scope.show = false;
                }
            });
    };
    $scope.isLogged();
});

cleencontroller.controller('signupController', function($scope, $http) {
//    $scope.isLogged = function() {
//        $http.get('/signup')
//            .success(function(data){
//                if (data[0].length > 0) {
//                    $scope.message = data[0];
//                    $scope.show = true;
//                }
//                else {
//                    $scope.show = false;
//                }
//            });
//    };
    $scope.user = {};
    $scope.newUser = function() {
        $http({
            method: 'POST',
            url : '/signup',
            data: $scope.user
        }, function(message) {
            if (message[0].length > 0) {
                $scope.message = data[0];
                $scope.show = true;
            }
            else {
                $scope.show = false;
            }
        })
    };
//    $scope.isLogged();
    $scope.newUser();
});

cleencontroller.controller('profileController', function($scope, $http) {

        $http.get('/profile/1/2/3/4/5')
            .success(function(data){
                if (data != 'err') {
                    $scope.email = data;
                }
            });

});