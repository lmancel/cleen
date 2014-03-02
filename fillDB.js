
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cleen');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {


///////////////////////////////////////////////////////////////
    // Création des menus

    var typesSchema = mongoose.Schema({
        sex: Number,
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

    var Types = mongoose.model('Types', typesSchema);
    var Brands = mongoose.model('Brands', brandSchema);
    var Materials = mongoose.model('Materials', materialsSchema);
    var Colors = mongoose.model('Colors', colorsSchema);

    Types.remove({}, function(err) {});
    Brands.remove({}, function(err) {});
    Materials.remove({}, function(err) {});
    Colors.remove({}, function(err) {});

// Types : 0 = Femmes, 1 = Hommes, 2 = Unisexe
    var shirts = new Types({sex:0, type:'T-Shirts'});
    var shirtspolo = new Types({sex:1, type:'T-Shirts et Polos'});
    var tops = new Types({sex:0, type:'Tops'});
    var chemises = new Types({sex:2, type:'Chemises'});
    var pullandcard = new Types({sex:2, type:'Pulls et Cardigans'});
    var robes = new Types({sex:0, type:'Robes'});
    var jupes = new Types({sex:0, type:'Jupes'});
    var pantalons = new Types({sex:2, type:'Pantalons'});
    var shorts = new Types({sex:0, type:'Shorts'});
    var costumes= new Types({sex:1, type:'Costumes'});
    var vestes = new Types({sex:2, type:'Vestes'});
    var manteaux = new Types({sex:2, type:'Manteaux'});

    shirts.save();
    shirtspolo.save();
    tops.save();
    chemises.save();
    pullandcard.save();
    robes.save();
    jupes.save();
    pantalons.save();
    shorts.save();
    costumes.save();
    vestes.save();
    manteaux.save();

// Brands
    var sandro = new Brands({brand:'Sandro'});
    var maje = new Brands({brand:'Maje'});
    var claupie = new Brands({brand:'Claudie et Pierlot'});
    var kooples = new Brands({brand:'The Kooples'});

    sandro.save();
    maje.save();
    claupie.save();
    kooples.save();

// Materials
    var laine = new Materials({material:'Laine'});
    var coton = new Materials({material:'Coton'});
    var cachemire = new Materials({material:'Cachemire'});
    var acrylique = new Materials({material:'Acrylique'});
    var cuir = new Materials({material:'Cuir'});
    var polyester = new Materials({material:'Polyester'});
    var soie = new Materials({material:'Soie'});
    var viscose = new Materials({material:'Viscose'});
    var acetate = new Materials({material:'Acétate'});
    var alpaga = new Materials({material:'Alpaga'});
    var angora = new Materials({material:'Angora'});
    var fourrure = new Materials({material:'Fourrure'});
    var duvet = new Materials({material:'Duvet'});
    var elasthanne = new Materials({material:'Elasthanne'});
    var lapin = new Materials({material:'Lapin'});
    var lurex = new Materials({material:'Lurex'});
    var lycra = new Materials({material:'Lycra'});
    var merinos = new Materials({material:'Mérinos'});
    var modal = new Materials({material:'Modal'});
    var nylon= new Materials({material:'Nylon'});
    var plumes = new Materials({material:'Plumes'});
    var polyamide = new Materials({material:'Polyamide'});
    var renard = new Materials({material:'Renard'});
    var spandex = new Materials({material:'Spandex'});

    laine.save();
    coton.save();
    cachemire.save();
    acrylique.save();
    cuir.save();
    polyester.save();
    soie.save();
    viscose.save();
    acetate.save();
    alpaga.save();
    angora.save();
    fourrure.save();
    duvet.save();
    elasthanne.save();
    lapin.save();
    lurex.save();
    lycra.save();
    merinos.save();
    modal.save();
    nylon.save();
    plumes.save();
    polyamide.save();
    renard.save();
    spandex.save();

// Colors
    var bleu = new Colors({color:'Bleu'});
    var blanc = new Colors({color:'Blanc'});
    var vert = new Colors({color:'Vert'});
    var noir = new Colors({color:'Noir'});
    var violet = new Colors({color:'Violet'});
    var rose = new Colors({color:'Rose'});
    var rouge = new Colors({color:'Rouge'});
    var orange = new Colors({color:'Orange'});
    var jaune= new Colors({color:'Jaune'});
    var gris = new Colors({color:'Gris'});
    var marron = new Colors({color:'Marron'});
    var beige = new Colors({color:'Beige'});
    var motif = new Colors({color:'Motif'});
    var multicolore = new Colors({color:'Multicolore'});

    bleu.save();
    blanc.save();
    vert.save();
    noir.save();
    violet.save();
    rose.save();
    rouge.save();
    orange.save();
    jaune.save();
    gris.save();
    marron.save();
    beige.save();
    motif.save();
    multicolore.save();

//////////////////////////////////////////////////////////////////////////////////
    // Lavage, Repassage, Blanchiment, Sechage, Nettoyage Professionnel

    var cleanSchema = new mongoose.Schema({
            forwhat: String,
            key: String,
            pic: String,
            fullName: String
    });

    var Clean = mongoose.model('Clean', cleanSchema);
    Clean.remove({}, function(err) {});

    /////////////////Lavage
    var interdit = new Clean({
        forwhat: 'lavage',
        key: 'interdit',
        pic: '/img/ico/nepaslaver.png',
        fullName: 'Lavage interdit'
    });
    var main = new Clean({
        forwhat: 'lavage',
        key: 'main',
        pic: '/img/ico/Lavage_main.png',
        fullName: 'Lavage à la main'
    });
    var trentenorm = new Clean({
        forwhat: 'lavage',
        key: '30',
        pic: '/img/ico/Lavage_30_normal.png',
        fullName: 'Linge supportant 30°C, Programme normal'
    });
    var quarantenorm = new Clean({
        forwhat: 'lavage',
        key: '40',
        pic: '/img/ico/Lavage_40_normal.png',
        fullName: 'Linge de couleur supportant 40°C, Programme normal'
    });

    interdit.save();
    main.save();
    trentenorm.save();
    quarantenorm.save();

    /////////////////Blanchiment
    var possible = new Clean({
        forwhat: 'blanchiment',
        key: 'autorise',
        pic: '/img/ico/Blanchiment_autorise.png',
        fullName: 'Blanchiment possible'
    });
    var oxygene = new Clean({
        forwhat: 'blanchiment',
        key: 'o2',
        pic: '/img/ico/Blanchiment_oxygene.png',
        fullName: "Traitement uniquement possible avec des produits à base d'oxygène"
    });
    var impossible = new Clean({
        forwhat: 'blanchiment',
        key: 'interdit',
        pic: '/img/ico/Blanchiment_interdit.png',
        fullName: 'Blanchiment interdit'
    });

    possible.save();
    oxygene.save();
    impossible.save();

    /////////////////Sechage
    var tambourmod = new Clean({
        forwhat: 'sechage',
        key: 'tambourmod',
        pic: '/img/ico/Sechage_tambour_modere.png',
        fullName: 'Séchage en tambour (sèche-linge) : Programme modéré'
    });
    var tambour = new Clean({
        forwhat: 'sechage',
        key: 'tambour',
        pic: '/img/ico/Sechage_tambour_normal.png',
        fullName: 'Séchage en tambour (sèche-linge) : Programme normal'
    });
    var tambourinterdit = new Clean({
        forwhat: 'sechage',
        key: 'tambour_interdit',
        pic: '/img/ico/Sechage_tambour_interdit.png',
        fullName: 'Séchage en tambour (sèche-linge) interdit'
    });

    tambourmod.save();
    tambour.save();
    tambourinterdit.save();

    /////////////////Repassage
    var faible = new Clean({
        forwhat: 'repassage',
        key: 'faible',
        pic: '/img/ico/Repassage_max_110.png',
        fullName: 'Température maximale de repassage : 110° C'
    });
    var moyenne = new Clean({
        forwhat: 'repassage',
        key: 'moyenne',
        pic: '/img/ico/Repassage_max_150.png',
        fullName: 'Température maximale de repassage : 150° C'
    });
    var elevee = new Clean({
        forwhat: 'repassage',
        key: 'elevee',
        pic: '/img/ico/Repassage_max_200.png',
        fullName: 'Température maximale de repassage : 200° C'
    });
    var exclu = new Clean({
        forwhat: 'repassage',
        key: 'exclu',
        pic: '/img/ico/Repassage_interdit.png',
        fullName: 'Repassage exclu'
    });

    faible.save();
    moyenne.save();
    elevee.save();
    exclu.save();

    /////////////////Nettoyage Professionnel
    var sec = new Clean({
        forwhat: 'nettPro',
        key: 'sec',
        pic: '/img/ico/symbole-nettoyage-pro.png',
        fullName: 'Nettoyage à sec'
    });
    var secinterdit = new Clean({
        forwhat: 'nettPro',
        key: 'interdit',
        pic: '/img/ico/Nettoyage_prof_sec_interdit.png',
        fullName: 'Nettoyage à sec interdit'
    });
    var pro = new Clean({
        forwhat: 'nettPro',
        key: 'eau',
        pic: '/img/ico/Nettoyage_prof_eau_normal.png',
        fullName: "Nettoyage à l'eau"
    });

    sec.save();
    secinterdit.save();
    pro.save();

//////////////////////////////////////////////////////////////////////////////////
    // Modèles vêtements

    var clothesSchema = mongoose.Schema({
        dbname: String,
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

    Clothes.remove({}, function(err) {});

    var robe3 = new Clothes({
        dbname: 'robe-maje-madison-vert-',
        sex: 'women',
        type: 'Robes',
        brand: 'Maje',
        model: 'Madison',
        photo: 'img/IMG_1159.JPG',
        materials: [{name:'Viscose', perc:60}, {name:'Polyamide', perc:35}, {name:'Elasthanne', perc:5}],
        color:['Vert'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'exclu',
        nettPro:'sec'
    });

    var robe1 = new Clothes({
        dbname: 'robe-sandro-maille-blanc-',
        sex: 'women',
        type: 'Robes',
        brand: 'Sandro',
        model: 'Maille',
        photo: 'img/IMG_1155.JPG',
        materials: [{name:'Coton', perc:87}, {name:'Polyester', perc:11}, {name:'Elasthanne', perc:2}],
        color:['Blanc'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var card1 = new Clothes({
        dbname: 'cardigan-sandro-bleu-',
        sex: 'women',
        type: 'Pulls et Cardigans',
        brand: 'Sandro',
        model: '',
        photo: 'img/IMG_1158.JPG',
        materials: [{name:'Coton', perc:60}, {name:'Viscose', perc:20}, {name:'Polyamide', perc:20},{name:'Soie', perc:100}],
        color:['Bleu'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var top1 = new Clothes({
        dbname: 'top-sandro-motif-',
        sex: 'women',
        type: 'Tops',
        brand: 'Sandro',
        model: '',
        photo: 'img/IMG_1154.JPG',
        materials: [{name:'Coton', perc:100}],
        color:['Motif','Multicolore','Rouge'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour',
        repassage:'faible',
        nettPro:'sec'
    });

    robe1.save();
    robe3.save();
    card1.save();
    top1.save();
});