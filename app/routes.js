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
//    app.get('/signup', function(req, res) {
//        res.send(req.flash('signupMessage'));
//    });

// process the signup form
//    app.post('/signup', passport.authenticate('local-signup', {
//        successRedirect : '/#/profile',
//        failureRedirect : '#/signup',
//        failureFlash : true
//    }));
    var User = require('../app/models/user');

    app.post('/signup', function(req, res){
        User.findOne({ 'local.email' :  req.body.email }, function(err, user) {
            if (err)
                res.send('err');

            // check to see if there's already a user with that email
            if (user) {
                res.send('Cette adresse email existe déjà.');
            }
            else {

                User.findOne({'local.pseudo' : req.body.pseudo }, function(err, user) {
                    if (err)
                        res.send('err');

                    // check to see if there's already a user with that pseudo
                    if (user) {
                        res.send('Ce pseudo existe déjà.');
                    }
                    else {
                        var newUser            = new User();

                        newUser.local.pseudo = req.body.pseudo;
                        newUser.local.email = req.body.email;
                        newUser.local.password = newUser.generateHash(req.body.password);

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            res.redirect('/#/login');
                        });
                    }
                });
            }

        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};



