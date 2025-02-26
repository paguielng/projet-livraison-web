<?php
include("../includes/db.php");
$id_client = $_POST['id_client'];

$colis = $pdo->query("SELECT * FROM colis WHERE id_client = $id_client");
while ($row = $colis->fetch()) {
    echo "<p>Colis #{$row['id']} - Statut : {$row['statut']}</p>";
}

// Formulaire pour déposer un nouveau colis
echo "<form action='depot-client.php' method='post'>
        <input type='hidden' name='id_client' value='$id_client'>
        <label for='destinataire'>Destinataire :</label>
        <select name='id_destinataire'>";
$result = $pdo->query("SELECT * FROM clients WHERE id != $id_client");
while ($row = $result->fetch()) {
    echo "<option value='{$row['id']}'>{$row['nom']}</option>";
}
echo "</select>
      <button type='submit'>Déposer</button>
      </form>";
?>

