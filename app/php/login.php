<?php

session_start();
// la réponse sera renvoyée au format json
header('Content-type: application/json');

// angular renvoi les requettes post avec l'entete application/json
// ce qui fait que le tableau $_POST coté php n'est pas initialisé
// la solution est de le faire manuellement.
if (stripos($_SERVER["CONTENT_TYPE"], "application/json") === 0) {
    $_POST = json_decode(file_get_contents("php://input"), true);
}

$retour = array();
// l'utilisateur est deconnecté j'usqua preuve du contraire
$retour["authOK"] = false;

$isInpLoginOK = isset($_POST['inpLogin']) && !empty($_POST['inpLogin']);
$isInpPassOK = isset($_POST['inpPass']) && !empty($_POST['inpPass']);

// j'aurai pu tout mettre dans une seule condition if mais je trouve cette
// solution beaucoup plus lisible.
$isPostedDataOK = $isInpLoginOK && $isInpPassOK;

if ($isPostedDataOK) {
    // on test si le login et pass sonts bons
    if ($_POST['inpLogin'] == 'admin' && $_POST['inpPass'] == '1234') {
        $_SESSION["user"] = $_POST['inpLogin']; // on initialise la variable de session
        $retour["authOK"] = true; // on met a true cette variable, elle sera utilisé par angular
    }
}

echo json_encode($retour);