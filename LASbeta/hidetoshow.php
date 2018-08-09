<?php
//session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $un=R::findOne('employees',"`login_ad` = ?",array(str_replace("GUSS\\","",$_SERVER['REMOTE_USER']))); 
        $hideObjs=R::findAll('strain',"u_id = ?  AND showed = ?", array($un->id,1));
        $readylist=array();
        foreach ($hideObjs as $value) {
           $o=R::findOne('objects',"id = ?",array($value->o_id));
           $p=R::findOne('projects',"id = ?",array($o->project_id));
           array_push($readylist,$p->p_name." - ".$o->o_name);
         
        }
        $readylist = array_unique($readylist);
        echo json_encode($readylist, JSON_FORCE_OBJECT);          
?>