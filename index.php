<?php
include_once('header.php');
include_once('function.php');
?>

<section id="section-index">
    <h2>Je suis </h2>
    <select id="lieu">
        <option value="0">...</option>
        <option value="1">chez moi</option>
        <option value="2">dans un musée</option>
    </select>
    <div id="bloc-musee">
        <p>Super ! Entre le nom ou le code de ton musée :</p>
        <form>
            <input name="code" placeholder="..." >
            <a href="http://localhost/_ECVDigital/hackathongit/hackathong3/page-interne/categorie-quete-1.php">Valider</a>
        </form>
    </div>
</section>

<?php
include_once('footer.php');
?>
