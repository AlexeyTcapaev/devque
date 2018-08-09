<?php
//session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $un=R::findOne('employees',"`login_ad` = ?",array(str_replace("GUSS\\","",$_SERVER['REMOTE_USER'])));
        $add_l=R::findAll('strain',"u_id =?  AND showed = ?", array($un->id,1));
        $uc=array();
        foreach ($add_l as $key) {
           array_push($uc,$key->o_id);
        }
        $uc=array_unique($uc);
        echo json_encode(count($uc), JSON_FORCE_OBJECT);
       
    
       
       

?>