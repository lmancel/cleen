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
        res.send(req.flash('signupMessage'));
    });

// process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/#/profile',
        failureRedirect : '#/signup',
        failureFlash : true
    }));

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};



