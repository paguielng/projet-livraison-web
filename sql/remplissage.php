<?php
require_once '../config/database.php'; // Connexion à MySQL

$sql = "INSERT INTO Client (Nom, Prenom, Adresse, Telephone, Email) VALUES
    ('Dupont', 'Jean', '10 rue de Paris', '0600000001', 'jean.dupont@email.com'),
    ('Martin', 'Sophie', '15 avenue Lyon', '0600000002', 'sophie.martin@email.com');

INSERT INTO Livreur (Nom, Prenom, Telephone, Email, Vehicule) VALUES
    ('Durand', 'Paul', '0600000003', 'paul.durand@email.com', 'Camion'),
    ('Leroy', 'Emma', '0600000004', 'emma.leroy@email.com', 'Moto');

INSERT INTO Colis (Masse, Longueur, Largeur, Hauteur, Statut, Expedition, Livraison_Prevu, Livraison_Effective, ID_Expediteur, ID_Destinataire) VALUES
    (2.5, 30, 20, 15, 'En cours', '2025-02-25', '2025-02-28', NULL, 1, 2),
    (1.2, 25, 18, 10, 'Livré', '2025-02-20', '2025-02-23', '2025-02-23', 2, 1);

INSERT INTO Affectation_Livraison (Num_Colis, Id_Livreur) VALUES
    (1, 1),
    (2, 2);";

if ($conn->multi_query($sql)) {
    echo "Données insérées avec succès !";
} else {
    echo "Erreur: " . $conn->error;
}

$conn->close();
?>
