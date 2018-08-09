<?php
    session_start();
  require_once('rb/rb.php');
  R::setup('mysql:host=127.0.0.1;dbname=las','root','');
R::freeze(true);
$checkindex=R::findOne('userlogon',"`session` = ?",array($_SESSION['session_id']));
if($checkindex->pcip == $_SERVER['REMOTE_ADDR'])
{
  require('main.php');
}
    else
    {
          require('loginform.php');
    }


?>