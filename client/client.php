<form action="gestion-client.php" method="post">
    <label for="client">Sélectionnez un client :</label>
    <select name="id_client">
        <?php
        include("../includes/db.php");
        $result = $pdo->query("SELECT * FROM clients");
        while ($row = $result->fetch()) {
            echo "<option value='{$row['id']}'>{$row['nom']}</option>";
        }
        ?>
    </select>
    <button type="submit">Valider</button>
</form>
