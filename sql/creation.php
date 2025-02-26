<?php
require_once '../config/database.php'; // Inclure la connexion MySQL

$sql = "CREATE TABLE IF NOT EXISTS Client (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(50),
    Prenom VARCHAR(50),
    Adresse TEXT,
    Telephone VARCHAR(20),
    Email VARCHAR(100)
); 

CREATE TABLE IF NOT EXISTS Livreur (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(50),
    Prenom VARCHAR(50),
    Telephone VARCHAR(20),
    Email VARCHAR(100),
    Vehicule VARCHAR(50)
); 

CREATE TABLE IF NOT EXISTS Colis (
    Numero INT PRIMARY KEY AUTO_INCREMENT,
    Masse FLOAT,
    Longueur FLOAT,
    Largeur FLOAT,
    Hauteur FLOAT,
    Statut VARCHAR(50),
    Expedition DATE,
    Livraison_Prevu DATE,
    Livraison_Effective DATE,
    ID_Expediteur INT,
    ID_Destinataire INT,
    FOREIGN KEY (ID_Expediteur) REFERENCES Client(Id),
    FOREIGN KEY (ID_Destinataire) REFERENCES Client(Id)
); 

CREATE TABLE IF NOT EXISTS Affectation_Livraison (
    Num_Colis INT,
    Id_Livreur INT,
    PRIMARY KEY (Num_Colis, Id_Livreur),
    FOREIGN KEY (Num_Colis) REFERENCES Colis(Numero),
    FOREIGN KEY (Id_Livreur) REFERENCES Livreur(Id)
);";

if ($conn->multi_query($sql)) {
    echo "Tables créées avec succès !";
} else {
    echo "Erreur: " . $conn->error;
}

$conn->close();
?>
