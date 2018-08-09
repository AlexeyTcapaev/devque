<?php

require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
R::freeze(true);
$au=R::findOne('employees',"`login_ad` = ?",array(str_replace("GUSS\\","",$_SERVER['REMOTE_USER'])));
if($au->auth == 0)
{
    echo json_encode("Bad", JSON_FORCE_OBJECT);
}
if($au->auth == 1) 
{   
    echo json_encode("Good", JSON_FORCE_OBJECT);
}


?>