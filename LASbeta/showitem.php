<?php
session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $un=R::findOne('employees',"`name` = ?",array($_GET['selectuser']));
        $o= explode(" -> ",$_GET['obj']);
        $add_l=R::findAll('strain',"u_id =?  AND showed = ?", array($un->id,1));
        foreach ($add_l as $key) {
            $key->showed=0;
            R::store($key);
        }
        echo json_encode($add_l, JSON_FORCE_OBJECT);
?>