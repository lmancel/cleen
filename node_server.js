var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var fs = require('fs');


app.use('/js', express.static(__dirname + '/app/js'));
app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/lib/angular', express.static(__dirname + '/app/lib/angular'));
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/img', express.static(__dirname + '/app/img'));
app.use('/partials', express.static(__dirname + '/app/partials'));
//app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
// required for passport
app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
//app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/cleen');

require('./config/passport')(passport);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/app/index.html');
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    var typesSchema = mongoose.Schema({
        type: String
    });
    var brandSchema = mongoose.Schema({
        brand: String
    });
    var materialsSchema = mongoose.Schema({
        material: String
    });
    var colorsSchema = mongoose.Schema({
        color: String
    });

    var menusSchema = mongoose.Schema({
        menus: [String]
    });

    var Types = mongoose.model('Types', typesSchema);
    var Brands = mongoose.model('Brands', brandSchema);
    var Materials = mongoose.model('Materials', materialsSchema);
    var Colors = mongoose.model('Colors', colorsSchema);
    var Menus = mongoose.model('Menus', menusSchema);

    app.get('/typesM', function (req, res) {
        Types.find(null)
            .where('sex').in([1,2])
            .exec(function(err,types){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(types);
                }
            })
    });
    app.get('/typesW', function (req, res) {
        Types.find(null)
            .where('sex').in([0,2])
            .exec(function(err,types){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(types);
                }
            })
    });
    app.get('/materials', function (req, res) {
        Materials.find(null)
            .exec(function(err,materials){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(materials);
                }
            })
    });
    app.get('/brands', function (req, res) {
        Brands.find(null)
            .exec(function(err,brands){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(brands);
                }
            })
    });
    app.get('/colors', function (req, res) {
        Colors.find(null)
            .exec(function(err,colors){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(colors);
                }
            })
    });


    // PROFILE SECTION =====================
    app.get('/isAuthenticated', function(req, res, next) {
        if (req.user) {
            res.send(true);
            return next();
        }
        else {
            res.send(false);
        }
    });

    var clothesSchema = mongoose.Schema({
        sex: String,
        type: String,
        brand: String,
        model: String,
        photo: String,
        materials: [{name:String, perc:Number}],
        color: [String],
        lavage: String,
        blanchiment: String,
        sechage: String,
        repassage: String,
        nettPro: String
    });
    var Clothes = mongoose.model('Clothes', clothesSchema);

    app.get('/:category/:sex?/:type', function(req, res) {
        if (req.params.category == "clothes") {
            Clothes.find(null)
                .where('sex').equals(req.params.sex)
                .where('type').in([req.params.type])
                .exec(function(err,vetements){
                    if (err==true){
                        res.send('err');
                    }
                    else{
                        res.json(vetements);
                    }
                })
        }
        else{
            if (req.params.category == "materials") {
                var category = req.params.category+'.name';
            }
            else {
                var category = req.params.category;
            }
            Clothes.find(null)
                .where(category).in([req.params.type])
                .exec(function(err,vetements){
                    if (err==true){
                        res.send('err');
                    }
                    else{
                        res.json(vetements);
                    }
                })
        }
    });

    app.get('/:id', function(req,res) {
        Clothes.find(null)
            .where('_id').equals(req.params.id)
            .exec(function(err,vetement){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(vetement);
                }
            })
    });

    var cleanSchema = new mongoose.Schema({
        forwhat: String,
        key: String,
        pic: String,
        fullName: String
    });

    var Clean = mongoose.model('Clean', cleanSchema);

    app.get('/clean/lavage/test1/:type/:which', function(req,res){
        Clean.find(null)
            .where('forwhat').equals(req.params.type)
            .where('key').equals(req.params.which)
            .exec(function(err,vetement){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(vetement);
                }
            })
    });

    app.get('/profile/1/2/3/4/5', function(req,res) {
        res.send(req.user.local);
    });

    var iconSchema = mongoose.Schema({
        path: String
    });
    var Icons = mongoose.model('Icons', iconSchema);

    app.get('/userImages/1/2/3/4/5/6', function(req, res) {
        Icons.find(null)
            .exec(function(err, icons) {
                if (err==true) {
                    res.send('err');
                }
                else {
                    res.send(icons);
                }
            })
    });

    app.get('/avatar/:avatarID/1/2/3/4', function(req, res) {
        Icons.find(null)
            .where('_id').equals(req.params.avatarID)
            .exec(function(err, icon) {
                if (err==true) {
                    res.send('err');
                }
                else {
                    res.send(icon);
                }
            })
    });

    app.get('/new/clothe/:cleaning/1/2/3/4/5/6', function(req, res) {
        Clean.find(null)
            .where('forwhat').equals(req.params.cleaning)
            .exec(function(err, cleaning) {
            if (err==true) {
                res.send('err');
            }
            else {
                res.send(cleaning);
            }
        })
    });

    app.post('/new', function(req, res) {
        var extentionPosition = req.files.file.name.lastIndexOf('.');
        var file_extension= (extentionPosition < 0) ? '' : req.files.file.name.substr(extentionPosition);

        var newClothe = new Clothes;
        newClothe.dbname = "";
        newClothe.model = "";
        newClothe.photo = "img/" + newClothe._id.toString() + file_extension;
        newClothe.sex = req.body.sex;

        newClothe.type = "";
        for (var k=0; k < req.body.type.length; k++) {
            if (req.body.type[k].indexOf('?') ==-1 ) {
                newClothe.type = req.body.type[k];
                break;
            }
        }

        newClothe.brand = req.body.brand;
        newClothe.lavage = req.body.lavage;
        newClothe.blanchiment= req.body.blanchiment;
        newClothe.sechage= req.body.sechage;
        newClothe.repassage = req.body.repassage;
        newClothe.nettPro= req.body.nettPro;

        newClothe.color = [];
        for (var i=0; i < req.body.color.length; i++ ) {
            if (req.body.color[i].indexOf('?') == -1) {
                newClothe.color.push(req.body.color[i]);
            }
        }

        newClothe.materials = [];
        for (var j=0; j < req.body.materials_type.length; j++ ) {
            if (req.body.materials_type[j].indexOf('?') == -1) {
                newClothe.materials.push({name:req.body.materials_type[j], perc:req.body.materials_perc[j]});
            }
        }

        newClothe.save(function(err) {
            if (err)
                throw err;
        });

        var tmp_path = req.files.file.path;
        var target_path = __dirname + '/app/' + newClothe.photo;

        fs.rename(tmp_path, target_path, function(err) {
            if (err) throw err;
            fs.unlink(tmp_path, function() {
                if (err) throw err;
            });
        });

//        fs.unlink(tmp_path, function(err) {
//            if (err) throw err;
//        });

//        req.flash('clotheId', newClothe._id.toString());
        res.redirect('#/new');

    });

//    app.get('/new/1/2/3/4/5/6/7/8/9/10/11/12', function(req, res) {
//        var clotheID = req.flash('clotheId');
//        res.send(clotheID);
//    });

});


// routes =================================
require('./app/routes.js')(app, passport);

app.listen(8082);
console.log("Serveur lancé sur le port 8082");