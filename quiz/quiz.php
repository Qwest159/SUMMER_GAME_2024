<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');



$donnee = json_decode(file_get_contents('php://input'), true);
$json = json_decode(file_get_contents('./storage_donnee.json'), true);

$json[] = $donnee;
function nettoyage_json($json)
{
    $nouveau_tableaux = [];
    foreach ($json as $key => $value) {
        if ($value != null) {

            $nouveau_tableaux[$key] = $value;
        }
    }
    return $nouveau_tableaux;
}

$json_nettoyé = nettoyage_json($json);
file_put_contents('./storage_donnee.json', json_encode($json_nettoyé, JSON_PRETTY_PRINT));
echo file_get_contents('./storage_donnee.json');
