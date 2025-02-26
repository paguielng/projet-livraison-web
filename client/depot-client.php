<?php
include("../includes/db.php");
$id_client = $_POST['id_client'];
$id_destinataire = $_POST['id_destinataire'];

$pdo->exec("INSERT INTO colis (id_client, id_livreur, statut) VALUES ($id_client, NULL, 'En attente')");
echo "Colis déposé avec succès.";
?>
