
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
    var acetate = new Materials({material:'Acétate'});
    var acrylique = new Materials({material:'Acrylique'});
    var alpaga = new Materials({material:'Alpaga'});
    var angora = new Materials({material:'Angora'});
    var cachemire = new Materials({material:'Cachemire'});
    var chevre = new Materials({material:'Chèvre'});
    var coton = new Materials({material:'Coton'});
    var cuir = new Materials({material:'Cuir'});
    var duvet = new Materials({material:'Duvet'});
    var elasthanne = new Materials({material:'Elasthanne'});
    var fibresmetalliques = new Materials({material:'Fibres metalliques'});
    var laine = new Materials({material:'Laine'});
    var lapin = new Materials({material:'Lapin'});
    var lin = new Materials({material:'Lin'});
    var lurex = new Materials({material:'Lurex'});
    var lycra = new Materials({material:'Lycra'});
    var merinos = new Materials({material:'Mérinos'});
    var modal = new Materials({material:'Modal'});
    var nylon= new Materials({material:'Nylon'});
    var plumes = new Materials({material:'Plumes'});
    var polyamide = new Materials({material:'Polyamide'});
    var polyester = new Materials({material:'Polyester'});
    var ratonlaveur = new Materials({material:'Raton laveur'});
    var renard = new Materials({material:'Renard'});
    var spandex = new Materials({material:'Spandex'});
    var soie = new Materials({material:'Soie'});
    var viscose = new Materials({material:'Viscose'});
    
   
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
    fibresmetalliques.save();
    chevre.save();
    ratonlaveur.save();
    lin.save();

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
        key: 'interdit',
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
    // Icônes utilisateur

    var iconSchema = mongoose.Schema({
        path: String
    });

    var Icons = mongoose.model('Icons', iconSchema);

    Icons.remove({}, function(err) {});

    var ico1 = new Icons({path : '/img/users/userf1.png'});
    var ico2 = new Icons({path : '/img/users/userf2.png'});
    var ico3 = new Icons({path : '/img/users/userf3.png'});
    var ico4 = new Icons({path : '/img/users/userf4.png'});
    var ico5 = new Icons({path : '/img/users/userf5.png'});
    var ico6 = new Icons({path : '/img/users/userf6.png'});
    var ico7 = new Icons({path : '/img/users/userf7.png'});
    var ico8 = new Icons({path : '/img/users/userf8.png'});
    var ico9 = new Icons({path : '/img/users/userf9.png'});
    var ico10 = new Icons({path : '/img/users/userf10.png'});
    var ico11 = new Icons({path : '/img/users/userf11.png'});
    var ico12 = new Icons({path : '/img/users/userf12.png'});
    var ico13 = new Icons({path : '/img/users/userf13.png'});
    var ico14 = new Icons({path : '/img/users/userm1.png'});
    var ico15 = new Icons({path : '/img/users/userm2.jpg'});
    var ico16 = new Icons({path : '/img/users/userm3.png'});
    var ico17 = new Icons({path : '/img/users/userm4.png'});
    var ico18 = new Icons({path : '/img/users/userm5.jpg'});
    var ico19 = new Icons({path : '/img/users/userm6.png'});
    var ico20 = new Icons({path : '/img/users/userm7.jpg'});

    ico1.save();
    ico2.save();
    ico3.save();
    ico4.save();
    ico5.save();
    ico6.save();
    ico7.save();
    ico8.save();
    ico9.save();
    ico10.save();
    ico11.save();
    ico12.save();
    ico13.save();
    ico14.save();
    ico15.save();
    ico16.save();
    ico17.save();
    ico18.save();
    ico19.save();
    ico20.save();

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

    var card1 = new Clothes({
        dbname: 'cardigan-bleu-sandro-',
        sex: 'women',
        type: 'Pulls et Cardigans',
        brand: 'Sandro',
        model: '',
        photo: 'img/cardigan_bleu_sandro.JPG',
        materials: [{name:'Coton', perc:60}, {name:'Viscose', perc:20}, {name:'Polyamide', perc:20},{name:'Soie', perc:100}],
        color:['Bleu'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var chem1 = new Clothes({
        dbname: 'chemise-carreaux-rouge-sandro-',
        sex: 'women',
        type: 'Chemises',
        brand: 'Sandro',
        model: '',
        photo: 'img/chemise_carreaux_rouge_sandro.JPG',
        materials: [{name:'Coton', perc:100}],
        color:['Motif','Multicolore','Rouge'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour',
        repassage:'faible',
        nettPro:'sec'
    });

    var chem2 = new Clothes({
        dbname: 'chemise-carreaux-rouge-thekooples-',
        sex: 'women',
        type: 'Chemises',
        brand: 'The Kooples',
        model: 'A carreaux',
        photo: 'img/chemise_carreaux_rouge_thekooples.jpg',
        materials: [{name:'Coton', perc:100}],
        color:['Motif','Multicolore','Rouge'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var chem3 = new Clothes({
        dbname: 'chemise-carreaux-bleu-thekooples-',
        sex: 'men',
        type: 'Chemises',
        brand: 'The Kooples',
        model: '',
        photo: 'img/chemise_carreaux_bleu_thekooples.jpg',
        materials: [{name:'Coton', perc:80},{name:'Laine', perc:20}],
        color:['Motif','Multicolore','Bleu'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var chem4 = new Clothes({
        dbname: 'chemise-emilio-bleu-maje-',
        sex: 'women',
        type: 'Chemises',
        brand: 'Maje',
        model: 'Emilio',
        photo: 'img/chemise_emilio_bleu_maje.jpg',
        materials: [{name:'Lin', perc:50},{name:'Coton', perc:50}],
        color:['Bleu'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var chem5 = new Clothes({
        dbname: 'chemise-rayures-bleu-blanc-thekooples-',
        sex: 'men',
        type: 'Chemises',
        brand: 'The Kooples',
        model: '',
        photo: 'img/chemise_rayures_bleu_blanc_thekooples.jpg',
        materials: [{name:'Coton', perc:100}],
        color:['Motif','Blanc','Bleu'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var chem6 = new Clothes({
        dbname: 'chemise-blanc-thekooples-',
        sex: 'men',
        type: 'Chemises',
        brand: 'The Kooples',
        model: '',
        photo: 'img/chemise_blanc_thekooples.jpg',
        materials: [{name:'Coton', perc:100}],
        color:['Blanc'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });


    var jupe1 = new Clothes({
        dbname: 'jupe-motif-thekooples-',
        sex: 'women',
        type: 'Jupes',
        brand: 'The Kooples',
        model: '',
        photo: 'img/jupe_motif_thekooples.jpg',
        materials: [{name:'Polyester', perc:100}],
        color:['Motif','Multicolore','Rouge'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var jupe2 = new Clothes({
        dbname: 'jupe-jonc-rose-sandro-',
        sex: 'women',
        type: 'Jupes',
        brand: 'Sandro',
        model: 'Jonc',
        photo: 'img/jupe_jonc_rose_sandro.JPG',
        materials: [{name:'Polyester', perc:62},{name:'Viscose', perc:32},{name:'Elasthanne', perc:6}],
        color:['Rose'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var jupe3 = new Clothes({
        dbname: 'jupe-christia-gris-maje-',
        sex: 'women',
        type: 'Jupes',
        brand: 'Maje',
        model: 'Christia',
        photo: 'img/jupe_christia_gris_maje.JPG',
        materials: [{name:'Soie', perc:100}],
        color:['Gris'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var mant1 = new Clothes({
        dbname: 'manteau-figaro-noir-maje-',
        sex: 'women',
        type: 'Manteaux',
        brand: 'Maje',
        model: 'Figaro',
        photo: 'img/manteau_figaro_noir_maje.jpg',
        materials: [{name:'Coton', perc:75},{name:'Polyester', perc:25}],
        color:['Noir'],
        lavage:'40',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'moyenne',
        nettPro:'sec'
    });

    var mant2 = new Clothes({
        dbname: 'manteau-beige-thekooples-',
        sex: 'women',
        type: 'Manteaux',
        brand: 'The Kooples',
        model: '',
        photo: 'img/manteau_beige_thekooples.jpg',
        materials: [{name:'Laine', perc:70},{name:'Polyamide', perc:20},{name:'Cachemire', perc:10}],
        color:['Beige'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'moyenne',
        nettPro:'sec'
    });

    var mant3 = new Clothes({
        dbname: 'manteau-motif-bleu-noir-thekooples-',
        sex: 'women',
        type: 'Manteaux',
        brand: 'The Kooples',
        model: '',
        photo: 'img/manteau_motif_bleu_noir_thekooples.jpg',
        materials: [{name:'Soie', perc:100},{name:'Polyester', perc:100},{name:'Coton', perc:100}],
        color:['Noir','Bleu'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'moyenne',
        nettPro:'sec'
    });

   var mant4 = new Clothes({
        dbname: 'manteau-esprit-militaire-kaki-thekooples-',
        sex: 'men',
        type: 'Manteaux',
        brand: 'The Kooples',
        model: '',
        photo: 'img/manteau_esprit_militaire_vert_thekooples.jpg',
        materials: [{name:'Nylon', perc:40},{name:'Polyester', perc:100},{name:'Coton', perc:60}],
        color:['Vert'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'moyenne',
        nettPro:'sec'
    });

    var mant5 = new Clothes({
        dbname: 'manteau-ski-noir-thekooples-',
        sex: 'men',
        type: 'Manteaux',
        brand: 'The Kooples',
        model: '',
        photo: 'img/manteau_ski_noir_thekooples.jpg',
        materials: [{name:'Polyester', perc:100},{name:'Nylon', perc:100},{name:'Polyester', perc:97},{name:'Elasthanne', perc:3}],
        color:['Noir'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'moyenne',
        nettPro:'sec'
    });

    var pant1 = new Clothes({
        dbname: 'pantalon-fluide-blanc-thekooples-',
        sex: 'women',
        type: 'Pantalons',
        brand: 'The Kooples',
        model: 'Fluide',
        photo: 'img/pantalon_fluide_blanc_thekooples.jpg',
        materials: [{name:'Viscose', perc:98},{name:'Elasthanne', perc:2}],
        color:['Blanc'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var pant2 = new Clothes({
        dbname: 'pantalon-regular-noir-thekooples-',
        sex: 'men',
        type: 'Pantalons',
        brand: 'The Kooples',
        model: 'Regular',
        photo: 'img/pantalon_regular_noir_thekooples.jpg',
        materials: [{name:'Coton', perc:98},{name:'Elasthanne', perc:2}],
        color:['Noir'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var pant3 = new Clothes({
        dbname: 'pantalon-duzie-gris-maje-',
        sex: 'women',
        type: 'Pantalons',
        brand: 'Maje',
        model: 'Duzie',
        photo: 'img/pantalon_duzie_gris_maje.jpg',
        materials: [{name:'polyester', perc:67},{name:'viscose', perc:29},{name:'Elasthanne', perc:4}],
        color:['Gris'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'interdit',
        nettPro:'sec'
    });


    var pull1 = new Clothes({
        dbname: 'pull-a-capuche-bimatiere-gris-thekooples-',
        sex: 'women',
        type: 'Pulls et Cardigans',
        brand: 'The Kooples',
        model: 'A capuche bimatière',
        photo: 'img/pull_acapuchebimatiere_gris_thekooples.jpg',
        materials: [{name:'Polyester', perc:100}, {name:'Coton', perc:100}],
        color:['Gris','Blanc'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });


    var pull2 = new Clothes({
        dbname: 'pull-rouge-sandro-',
        sex: 'women',
        type: 'Pulls et Cardigans',
        brand: 'Sandro',
        model: '',
        photo: 'img/pull_rouge_sandro.JPG',
        materials: [{name:'Laine', perc:98}, {name:'Fibres metalliques', perc:2}],
        color:['Rouge'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });


    var pull3 = new Clothes({
        dbname: 'pull-blanc-thekooples-',
        sex: 'women',
        type: 'Pulls et Cardigans',
        brand: 'The Kooples',
        model: '',
        photo: 'img/pull_blanc_thekooples.jpg',
        materials: [{name:'Cuir', perc:100}, {name:'Coton', perc:50},{name:'Laine', perc:50}],
        color:['Blanc'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var pull4 = new Clothes({
        dbname: 'pull-noir-thekooples-',
        sex: 'men',
        type: 'Pulls et Cardigans',
        brand: 'The Kooples',
        model: '',
        photo: 'img/pull_noir_thekooples.jpg',
        materials: [{name:'Cuir', perc:100}, {name:'Mérinos', perc:100}],
        color:['Noir'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });
   
   
    var robe1 = new Clothes({
        dbname: 'robe-maille-blanc-sandro-',
        sex: 'women',
        type: 'Robes',
        brand: 'Sandro',
        model: 'Maille',
        photo: 'img/robe_maille_blanche_sandro.JPG',
        materials: [{name:'Coton', perc:87}, {name:'Polyester', perc:11}, {name:'Elasthanne', perc:2}],
        color:['Blanc'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var robe2 = new Clothes({
        dbname: 'robe-facon-brocart-noir-thekooples-',
        sex: 'women',
        type: 'Robes',
        brand: 'The Kooples',
        model: 'Façon Brocart',
        photo: 'img/robe_faconbrocart_noir_thekooples.JPG',
        materials: [{name:'Polyester', perc:67}, {name:'Coton', perc:31}, {name:'Elasthanne', perc:2}],
        color:['Noir'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

     var robe3 = new Clothes({
        dbname: 'robe-madison-vert-maje-',
        sex: 'women',
        type: 'Robes',
        brand: 'Maje',
        model: 'Madison',
        photo: 'img/robe_madison_vert_maje.JPG',
        materials: [{name:'Viscose', perc:60}, {name:'Polyamide', perc:35}, {name:'Elasthanne', perc:5}],
        color:['Vert'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'interdit',
        nettPro:'sec'
    });

    var robe4 = new Clothes({
        dbname: 'robe-peplum-noir-sandro-',
        sex: 'women',
        type: 'Robes',
        brand: 'Sandro',
        model: 'Peplum',
        photo: 'img/robe_peplum_noir_sandro.JPG',
        materials: [{name:'Polyester', perc:100}],
        color:['Noir'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var robe5 = new Clothes({
        dbname: 'robe-jeudesuperposition-noir-thekooples-',
        sex: 'women',
        type: 'Robes',
        brand: 'The Kooples',
        model: 'Jeu de Superposition',
        photo: 'img/robe_jeudesuperposition_noir_thekooples.jpg',
        materials: [{name:'Viscose', perc:99},{name:'Elasthanne', perc:1}],
        color:['Noir'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var robe6 = new Clothes({
        dbname: 'robe-decoller-rouge-maje-',
        sex: 'women',
        type: 'Robes',
        brand: 'Maje',
        model: 'Decoller',
        photo: 'img/robe_decoller_rouge_maje.jpg',
        materials: [{name:'Acetate', perc:78},{name:'Polyester', perc:22},{name:'Coton', perc:100}],
        color:['Rouge'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var robe7 = new Clothes({
        dbname: 'robe-elixir-beige-maje-',
        sex: 'women',
        type: 'Robes',
        brand: 'Maje',
        model: 'Elixir',
        photo: 'img/robe_elixir_beige_maje.jpg',
        materials: [{name:'Polyester', perc:100},{name:'Viscose', perc:60},{name:'Polyamide', perc:35},{name:'Elasthanne', perc:5}],
        color:['Beige'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var robe8 = new Clothes({
        dbname: 'robe-rencontre-noir-sandro-',
        sex: 'women',
        type: 'Robes',
        brand: 'Sandro',
        model: 'Rencontre',
        photo: 'img/robe_rencontre_noir_sandro.JPG',
        materials: [{name:'Polyester', perc:100}],
        color:['Noir'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var robe9 = new Clothes({
        dbname: 'robe-noir-rouge-marron-sandro-',
        sex: 'women',
        type: 'Robes',
        brand: 'Sandro',
        model: '',
        photo: 'img/robe_noir_rouge_marron_sandro.JPG',
        materials: [{name:'Viscose', perc:78},{name:'Polyamide', perc:14},{name:'Elasthanne', perc:8}],
        color:['Noir'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var robe10 = new Clothes({
        dbname: 'robe-edivas-blanc-maje-',
        sex: 'women',
        type: 'Robes',
        brand: 'Maje',
        model: 'Edivas',
        photo: 'img/robe_edivas_blanc_maje.jpg',
        materials: [{name:'Polyester', perc:100},{name:'Coton', perc:95},{name:'Elasthanne', perc:5}],
        color:['Blanc'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'interdit',
        nettPro:'sec'
    });

    var top1 = new Clothes({
        dbname: 'top-noir-blanc-sandro-',
        sex: 'women',
        type: 'Tops',
        brand: 'Sandro',
        model: '',
        photo: 'img/top_noir_blanc_sandro.JPG',
        materials: [{name:'Polyester', perc:96},{name:'Polyester', perc:4},{name:'Polyester', perc:100},{name:'Polyester', perc:72},{name:'Coton', perc:27},{name:'Elasthanne', perc:1},{name:'Coton', perc:88},{name:'Lycra', perc:12}],
        color:['Motif','Multicolore','Rouge'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var top2 = new Clothes({
        dbname: 'top-jaune-thekooples-',
        sex: 'women',
        type: 'Tops',
        brand: 'The Kooples',
        model: '',
        photo: 'img/top_colvensoie_jaune_thekooples.jpg',
        materials: [{name:'Soie', perc:100}],
        color:['Jaune'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var top3 = new Clothes({
        dbname: 'top-noir-bleu-maje-',
        sex: 'women',
        type: 'Tops',
        brand: 'Maje',
        model: '',
        photo: 'img/top_noir_maje.JPG',
        materials: [{name:'Soie', perc:100},{name:'Viscose', perc:70},{name:'Laine', perc:30}],
        color:['Noir','Bleu'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

     var top4 = new Clothes({
        dbname: 'top-dodeliner-noir-blanc-maje-',
        sex: 'women',
        type: 'Tops',
        brand: 'Maje',
        model: 'Dodeliner',
        photo: 'img/top_dodeliner_blanc_noir_maje.jpg',
        materials: [{name:'Soie', perc:100},{name:'Soie', perc:60},{name:'Laine', perc:40}],
        color:['Noir','Bleu'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'interdit',
        nettPro:'interdit'
    });

    var top5 = new Clothes({
        dbname: 'top-elegante-multicolore-blanc-sandro-',
        sex: 'women',
        type: 'Tops',
        brand: 'Sandro',
        model: 'Elegante',
        photo: 'img/top_elegante_multicolore_sandro.JPG',
        materials: [{name:'Soie', perc:100}],
        color:['Blanc','Multicolore'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var top6 = new Clothes({
        dbname: 'top-tonnerre-blanc-beige-sandro-',
        sex: 'women',
        type: 'Tops',
        brand: 'Sandro',
        model: 'Tonnerre',
        photo: 'img/top_tonnerre_blanc_beige_sandro.JPG',
        materials: [{name:'Lin', perc:100}],
        color:['Blanc','Beige'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });
    
    var tshirt1 = new Clothes({
        dbname: 'tshirt-empiecementraglan-violet-thekooples-',
        sex: 'women',
        type: 'T-Shirts',
        brand: 'The Kooples',
        model: 'A empiecement raglan en dentelle',
        photo: 'img/tshirt_aempiecement_violet_thekooples.jpg',
        materials: [{name:'Coton', perc:57},{name:'Nylon', perc:43},{name:'Viscose', perc:50},{name:'Laine', perc:50}],
        color:['Violet'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });


    var tshirt2 = new Clothes({
        dbname: 'tshirt-initialestks-bleu-thekooples-',
        sex: 'men',
        type: 'T-Shirts',
        brand: 'The Kooples',
        model: 'Initiales TKS',
        photo: 'img/tshirt_initialestks_bleu_thekooples.jpg',
        materials: [{name:'Coton', perc:100}],
        color:['Bleu'],
        lavage:'30',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

    var tshirt3 = new Clothes({
        dbname: 'tshirt-electric-noir-maje-',
        sex: 'women',
        type: 'T-Shirts',
        brand: 'Maje',
        model: 'Electric',
        photo: 'img/tshirt_electric_noir_maje.jpg',
        materials: [{name:'Lin', perc:100}],
        color:['Noir'],
        lavage:'main',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });

     var veste1 = new Clothes({
        dbname: 'veste-dream-gris-maje-',
        sex: 'women',
        type: 'Vestes',
        brand: 'Maje',
        model: 'Dream',
        photo: 'img/veste_dream_gris_maje.jpg',
        materials: [{name:'Laine', perc:100},{name:'Viscose', perc:100}],
        color:['Gris'],
        lavage:'interdig',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'interdit',
        nettPro:'sec'
    });

    var veste2 = new Clothes({
        dbname: 'veste-gris-thekooples-',
        sex: 'men',
        type: 'Vestes',
        brand: 'The Kooples',
        model: '',
        photo: 'img/veste_gris_thekooples.jpg',
        materials: [{name:'Laine', perc:100},{name:'Viscose', perc:100},{name:'Viscose', perc:55},{name:'Acetate', perc:45}],
        color:['Gris'],
        lavage:'interdit',
        blanchiment:'interdit',
        sechage:'tambour_interdit',
        repassage:'faible',
        nettPro:'sec'
    });


    card1.save();

    chem1.save();
    chem2.save();
    chem3.save();
    chem4.save();
    chem5.save();
    chem6.save();
    
    jupe1.save();
    jupe2.save();
    jupe3.save();

    mant1.save();
    mant2.save();
    mant3.save();
    mant4.save();
    mant5.save();

    pant1.save();
    pant2.save();
    pant3.save();

    pull1.save();
    pull2.save();
    pull3.save();
    pull4.save();

    robe1.save();
    robe2.save();
    robe3.save();
    robe4.save();
    robe5.save();
    robe6.save();
    robe7.save();
    robe8.save();
    robe9.save();
    robe10.save();
      
    top1.save();
    top2.save();
    top3.save();
    top4.save();
    top5.save();
    top6.save();

    tshirt1.save();
    tshirt2.save();
    tshirt3.save();

    veste1.save();
    veste2.save();


    console.log("Database filled, exiting now");
});
