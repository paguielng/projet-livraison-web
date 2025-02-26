<?php include("../includes/db.php"); ?>
<form action="gestion-livreur.php" method="post">
    <label for="livreur">Sélectionnez un livreur :</label>
    <select name="id_livreur">
        <?php
        $result = $pdo->query("SELECT * FROM livreurs");
        while ($row = $result->fetch()) {
            echo "<option value='{$row['id']}'>{$row['nom']}</option>";
        }
        ?>
    </select>
    <button type="submit">Valider</button>
</form>
