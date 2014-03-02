<?php

session_start();
// on teste si une variable de session avec le nom user est présente, 
// on en déduira si l'utilisateur est authentifié
$isAuthOK = isset($_SESSION["user"]) && !empty($_SESSION["user"]);
if ($isAuthOK) {
    // données d'exemple, vous pouvez ici faire un appel à la base de données
    // et les renvoyer au format json
    $p1 = array("reference" => "tv1", "prix" => "3000");
    $p2 = array("reference" => "portable", "prix" => "450");

    // on met l'entete de la reponse a json.
    header('Content-type: application/json');

    echo json_encode(array($p1, $p2));
} else {
    // on met la réponse à 401 pour indiquer que l'utilisateur n'est pas authentifié
    header('HTTP/1.0 401 Unauthorized');
}