<?php
session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $ajax_obj_id=R::findAll('objects',"`project_id` = ?",array($_GET['sp']));
        $obj_list=array();
        foreach($ajax_obj_id as $obj)
        {
            array_push($obj_list,$obj->o_name);
        }
        echo json_encode($obj_list, JSON_FORCE_OBJECT);
         
      
        

?>