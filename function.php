<?php
/**
 * Created by PhpStorm.
 * User: Florian
 * Date: 27/10/2017
 * Time: 10:11
 */

function formulaire_accueil(){
    if( $_POST["code"] == '36' ){
        echo 'http://'.$_SERVER["HTTP_HOST"].'_ECVDigital/hackathongit/hackathong3/page-interne/map.php';
        //header('location : http://'.$_SERVER["HTTP_HOST"].'_ECVDigital/hackathongit/hackathong3/page-interne/map.php');
        //exit();
    }
}
