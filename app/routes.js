module.exports = function(app, passport) {

    // LOGIN ===============================
    app.get('/login', function(req, res) {
        res.send(req.flash('loginMessage'));
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/#/profile',
        failureRedirect : '#/login',
        failureFlash : true
    }));

    // SIGNUP ==============================
    app.get('/signup', function(req, res) {
        var errorMessage = req.flash('signupMessage');
        res.send(errorMessage);
    });

    var User = require('../app/models/user');

    app.post('/signup', function(req, res){
        if (req.body.email != undefined && req.body.pseudo != undefined && req.body.password != undefined) {
            if (req.body.email != "" && req.body.pseudo != "" && req.body.password != "") {
                User.findOne({ 'local.email' :  req.body.email }, function(err, user) {
                    if (err) {
                        res.redirect('/#/signup');
                        req.flash('signupMessage', 'Erreur inconnue, désolé =S.');
                    }
                    else {
                        // check to see if there's already a user with that email
                        if (user) {
                            res.redirect('/#/signup');
                            req.flash('signupMessage', 'Un compte avec cette adresse email existe déjà.');
                        }
                        else {

                            User.findOne({'local.pseudo' : req.body.pseudo }, function(err, user) {
                                if (err) {
                                    res.redirect('/#/signup');
                                    req.flash('signupMessage', 'Erreur inconnue, désolé =S.');
                                }
                                else {
                                    if (user) {
                                        res.redirect('/#/signup');
                                        req.flash('signupMessage', 'Un compte avec ce pseudo existe déjà.');
                                    }
                                    else {
                                        var newUser = new User();

                                        newUser.local.pseudo = req.body.pseudo;
                                        newUser.local.email = req.body.email;
                                        newUser.local.password = newUser.generateHash(req.body.password);

                                        newUser.save(function(err) {
                                            if (err)
                                                throw err;
                                            res.redirect('/#/login');
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
            else {
                res.redirect('/#/signup');
                req.flash('signupMessage', "Veuillez remplir tous les champs s'il vous plait")
            }
        }
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};



