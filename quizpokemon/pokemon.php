<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Chemin vers le fichier JSON
$file = './storage_donnee.json';

// Vérifier si le fichier existe
if (file_exists($file)) {
    // Lire le contenu du fichier
    $data = file_get_contents($file);

    // Vérifier si le contenu est bien du JSON
    if (json_decode($data) !== null) {
        echo $data;
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid JSON format']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'File not found']);
}
