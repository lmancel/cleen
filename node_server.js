var express = require('express');
var mongoose = require('mongoose');

var app = express();



app.use('/js', express.static(__dirname + '/app/js'));
app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/lib/angular', express.static(__dirname + '/app/lib/angular'));
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/img', express.static(__dirname + '/app/img'));
app.use('/partials', express.static(__dirname + '/app/partials'));


mongoose.connect('mongodb://localhost/cleen');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    var typesSchema = mongoose.Schema({
        type: String
    })
    var brandSchema = mongoose.Schema({
        brand: String
    })
    var materialsSchema = mongoose.Schema({
        material: String
    })
    var colorsSchema = mongoose.Schema({
        color: String
    })

    var menusSchema = mongoose.Schema({
        menus: [String]
    })

    var Types = mongoose.model('Types', typesSchema);
    var Brands = mongoose.model('Brands', brandSchema);
    var Materials = mongoose.model('Materials', materialsSchema);
    var Colors = mongoose.model('Colors', colorsSchema);
    var Menus = mongoose.model('Menus', menusSchema);

    app.get('/', function (req, res) {
        res.sendfile(__dirname + '/app/index.html');
    });

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
            .limit(7)
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
            .limit(7)
            .exec(function(err,colors){
                if (err==true){
                    res.send('err');
                }
                else{
                    res.json(colors);
                }
            })
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
});

app.listen(8082);
console.log("Serveur lancé sur le port 8082");