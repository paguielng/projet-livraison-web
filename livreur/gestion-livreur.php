<?php
include("../includes/db.php");
$id_livreur = $_POST['id_livreur'];

// Affichage des colis du livreur
$colis = $pdo->query("SELECT * FROM colis WHERE id_livreur = $id_livreur");
while ($row = $colis->fetch()) {
    echo "<p>Colis #{$row['id']} - Statut : {$row['statut']}</p>";
    echo "<form action='statut-livreur.php' method='post'>
            <input type='hidden' name='id_colis' value='{$row['id']}'>
            <select name='statut'>
                <option>En attente</option>
                <option>En cours de livraison</option>
                <option>Livré</option>
            </select>
            <button type='submit'>Modifier</button>
          </form>";
}
?>
