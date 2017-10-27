<?php
include_once('header.php');
?>

<form action="" method="">
    <p>J'ai entre </p>
    <select id="age">
        <option value="0">...</option>
        <option value="1">5 et 13 ans</option>
        <option value="2">14 ans et plus</option>
    </select>
    <p> et je suis </p>
    <select id="lieu">
    <option value="0">...</option>
        <option value="1">chez moi</option>
        <option value="2">dans un musée</option>
    </select>

    <!--//si je suis chez moi demande les préférence
    //si je suis dans un musée demander le musée-->
</form>

<?php
include_once('footer.php');
?>
