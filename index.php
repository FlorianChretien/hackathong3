<?php
include_once('header.php');
?>

<p>Je suis </p>
<select id="lieu">
    <option value="0">...</option>
    <option value="1">chez moi</option>
    <option value="2">dans un musée</option>
</select>
<div id="bloc-musee">
    <p>Super ! Entre le nom ou le code de ton musée :</p>
    <form action="function.php" method="POST">
        <input name="code" placeholder="..." />
        <input type="submit" />
    </form>
</div>

<?php

formulaire_accueil();

include_once('footer.php');
?>
