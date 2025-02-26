-- 1. Création de la base de données
CREATE DATABASE IF NOT EXISTS Livraison;
USE Livraison;

-- 2. Création de la table Client
CREATE TABLE Client (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL,
    Prenom VARCHAR(100) NOT NULL,
    Adresse TEXT NOT NULL,
    Telephone VARCHAR(15) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL
);

-- 3. Création de la table Livreur
CREATE TABLE Livreur (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL,
    Prenom VARCHAR(100) NOT NULL,
    Telephone VARCHAR(15) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Vehicule VARCHAR(50) NOT NULL
);

-- 4. Création de la table Colis
CREATE TABLE Colis (
    Numero INT AUTO_INCREMENT PRIMARY KEY,
    Masse FLOAT NOT NULL,
    Longueur FLOAT NOT NULL,
    Largeur FLOAT NOT NULL,
    Hauteur FLOAT NOT NULL,
    Statut VARCHAR(50) NOT NULL CHECK (Statut IN ('En attente', 'En cours de livraison', 'Livré')),
    Expedition DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Livraison_Prevue DATETIME NOT NULL,
    Livraison_Effective DATETIME NULL,
    ID_Expediteur INT NOT NULL,
    ID_Destinataire INT NOT NULL,
    FOREIGN KEY (ID_Expediteur) REFERENCES Client(Id) ON DELETE CASCADE,
    FOREIGN KEY (ID_Destinataire) REFERENCES Client(Id) ON DELETE CASCADE
);

-- 5. Création de la table Affectation_Livraison
CREATE TABLE Affectation_Livraison (
    Num_Colis INT NOT NULL,
    Id_Livreur INT NOT NULL,
    PRIMARY KEY (Num_Colis, Id_Livreur),
    FOREIGN KEY (Num_Colis) REFERENCES Colis(Numero) ON DELETE CASCADE,
    FOREIGN KEY (Id_Livreur) REFERENCES Livreur(Id) ON DELETE CASCADE
);
