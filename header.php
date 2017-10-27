<?php

$chemin = "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$page_interne = strstr($chemin, 'page-interne');

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="<?php

    if(!empty($page_interne)){
        echo '../';
    }

    ?>style/style.css" />
    <link href="<?php

    if(!empty($page_interne)){
        echo '../';
    }

    ?>style/style-thibaut.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Kalam:300,400,700|Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <script type="text/javascript" src="<?php

    if(!empty($page_interne)){
        echo '../';
    }

    ?>js/jquery-3.2.1.min.js"></script>

    <title>Musea Hero</title>
</head>
<body>
	<header>
            
<!-- Burger menu, merci Twikito ! :) -->
    	<input type="checkbox" id="navcheck" role="button" title="menu" class="input-menu">
        <label for="navcheck" aria-hidden="true" title="menu">
            <span class="burger">
                <span class="bar">
                    <span class="visuallyhidden"></span>
                </span>
            </span>
        </label>
        <nav id="menu">
            <a href="#">#</a>
            <a href="#">#</a>
            <a href="#">#</a>
            <a href="#">#</a>
            <a href="#">#</a>
            <a href="#">#</a>
        </nav>
    
    
        <a href="#" class="link-fix">
            
            <img src="img/asset_cta/profil.png">
            
        </a>
            
    </header>
	<h1 id="alert-pc">Ce site n'est disponible que pour mobile.</h1>

