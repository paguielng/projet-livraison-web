<?php
$pdo = new PDO("mysql:host=localhost;dbname=livraison", "root", "");

// Ajout de clients
$pdo->exec("INSERT INTO clients (nom) VALUES ('Alice'), ('Bob'), ('Charlie')");

// Ajout de livreurs
$pdo->exec("INSERT INTO livreurs (nom) VALUES ('DHL'), ('FedEx'), ('UPS')");

// Ajout de colis
$pdo->exec("INSERT INTO colis (id_client, id_livreur, statut) VALUES
    (1, NULL, 'En attente'),
    (2, NULL, 'En attente'),
    (3, NULL, 'En attente')");

echo "Données insérées avec succès !";
?>
