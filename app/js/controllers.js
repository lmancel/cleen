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
                if (data != true) {
                    $location.url('/login')
                }
            })
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

//        $scope.toggle = function() {
//            console.log('Toggle fonctionne !!');
//            $http.get('/isAuthenticated')
//                .success(function(data){
//                    $scope.showOrHide = data;
//                })
//        }
    };
    $scope.isLogged();
});

cleencontroller.controller('usersImgController', function($scope, $http) {
    $scope.images = function() {
        $http.get('/userImages/1/2/3/4/5/6')
            .success(function(images) {
                if (images.length > 0) {
                    $scope.images = images;
                }
            });
    };
    $scope.images();
});

cleencontroller.controller('signupController', function($scope, $http) {
    $scope.user = {};

    $scope.toggleSelection = function toggleSelection(iconID) {
        $scope.selectedIcon = iconID;
        $scope.user.avatar = $scope.selectedIcon;
    };

    $scope.newUser = function() {
        $http.post('/signup', $scope.user);
    };

    $scope.newUser();
});

cleencontroller.controller('signupAlertController', function($scope, $http) {
    $scope.isLogged = function() {
        $http.get('/signup')
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

cleencontroller.controller('profileController', function($scope, $http) {
    $http.get('/profile/1/2/3/4/5')
        .success(function(data){
            if (data != 'err') {
                $scope.pseudo = data.pseudo;
                $scope.email = data.email;
                $http.get('/avatar/'+data.avatar+'/1/2/3/4')
                    .success(function(avatar) {
                        $scope.avatar = avatar[0];
                    });
            }
        });
});

cleencontroller.controller('authButtonsController', function($scope, $http) {
    $scope.isAuthenticated = function() {
        $http.get('/isAuthenticated')
            .success(function(data){
//                if (data) {
//                    $scope.coOrProfileLink = "/#/login"
//                    $scope.coOrProfile = "Connexion";
//
//                    $scope.insOrDecoLink = "/#/signup"
//                    $scope.insOrDeco = "Inscription"
//
//                }
//                else {
//                    $scope.coOrProfileLink = "/#/profile"
//                    $scope.coOrProfile = "Mon Compte";
//
//                    $scope.insOrDecoLink = "/logout"
//                    $scope.insOrDeco = "Déconnexion"
//                }
//                console.log("Links  : " + $scope.coOrProfileLink + " / " + $scope.insOrDecoLink);
//                console.log("Texts  : " + $scope.coOrProfile + " / " + $scope.insOrDeco);
                $scope.showOrHide = data;
            })
    };
    $scope.isAuthenticated();
});

cleencontroller.controller('newClothesController', function($scope, $http) {
    $scope.new = {};

    $scope.toggleSelectionClean = function toggleSelectionClean(iconID) {
        $scope.selectedCleaning = iconID;
        $scope.new.lavage = $scope.selectedCleaning;
    };
    $scope.toggleSelectionWhite = function toggleSelectionWhite(iconID) {
        $scope.selectedWhitening = iconID;
        $scope.new.blanchiment = $scope.selectedWhitening;
    };
    $scope.toggleSelectionIron = function toggleSelectionIron(iconID) {
        $scope.selectedIroning = iconID;
        $scope.new.repassage = $scope.selectedIroning;
    };
    $scope.toggleSelectionDry = function toggleSelectionDry(iconID) {
        $scope.selectedDrying = iconID;
        $scope.new.sechage = $scope.selectedDrying;
    };
    $scope.toggleSelectionProf = function toggleSelectionProf(iconID) {
        $scope.selectedProfCleaning = iconID;
        $scope.new.nettPro = $scope.selectedProfCleaning;
    };
    $scope.toggleSexW = function toggleSexW(iconID) {
        if (iconID == undefined) {
            $scope.new.sexW = "women";
            $scope.new.selectedSex = $scope.new.sexW;
        }
        else {
            if (iconID == "women") {
                $scope.new.selectedSex = "";
            }
            if (iconID == "") {
                $scope.new.selectedSex = "women";
            }
        }
    };
    $scope.toggleSexM = function toggleSexM(iconID) {
        if (iconID == undefined) {
            $scope.new.sexM = "men";
            $scope.new.selectedSex = $scope.new.sexM;
        }
        else {
            if (iconID == "men") {
                $scope.new.selectedSex = "";
            }
            if (iconID == "") {
                $scope.new.selectedSex = "men";
            }
        }
    };

    $scope.getCleaning = function() {
        $http.get('/new/clothe/lavage/1/2/3/4/5/6')
            .success(function(cleaning){
                if (cleaning != 'err'){
                    $scope.lavage = cleaning;
                }
            });
        $http.get('/new/clothe/blanchiment/1/2/3/4/5/6')
            .success(function(cleaning){
                if (cleaning != 'err'){
                    $scope.blanchiment = cleaning;
                }
            });
        $http.get('/new/clothe/sechage/1/2/3/4/5/6')
            .success(function(cleaning){
                if (cleaning != 'err'){
                    $scope.sechage = cleaning;
                }
            });
        $http.get('/new/clothe/repassage/1/2/3/4/5/6')
            .success(function(cleaning){
                if (cleaning != 'err'){
                    $scope.repassage= cleaning;
                }
            });
        $http.get('/new/clothe/nettPro/1/2/3/4/5/6')
            .success(function(cleaning){
                if (cleaning != 'err'){
                    $scope.nettPro= cleaning;
                }
            });

        $http.post('/new', $scope.new)
            .success(function(added) {
                console.log('clothe added successfully');
            });
    };
    $scope.getCleaning();
});