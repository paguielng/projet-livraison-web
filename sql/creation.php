<?php
// Connexion à MySQL
$pdo = new PDO("mysql:host=localhost;dbname=livraison", "root", "");

// Création des tables
$queries = [
    "CREATE TABLE clients (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(100) NOT NULL
    )",
    "CREATE TABLE livreurs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(100) NOT NULL
    )",
    "CREATE TABLE colis (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_client INT,
        id_livreur INT NULL,
        statut ENUM('En attente', 'En cours de livraison', 'Livré') DEFAULT 'En attente',
        FOREIGN KEY (id_client) REFERENCES clients(id),
        FOREIGN KEY (id_livreur) REFERENCES livreurs(id)
    )"
];

// Exécution des requêtes
foreach ($queries as $query) {
    $pdo->exec($query);
}

echo "Base de données créée avec succès !";
?>

