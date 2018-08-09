<?php
 //session_start();
    require('rb/rb.php');
   R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
    R::freeze(true);
    if(!R::testConnection())
    {
        exit('Нет подключения');
    }
     $check=R::findOrCreate('employees',array('login_ad' => str_replace("GUSS\\","",$_SERVER['REMOTE_USER'])));
     $check->auth = 0;
     $check->session_id = 0;
     $id=R::store($check);
     $ll=R::findAll('userlogon',"`session` = ? ",array($_SESSION['session_id']));
     R::trashAll($ll);
//sunset($_SESSION);
//session_destroy();
header("Location: /index.php");
?>