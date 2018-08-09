<?php
session_start();
        require('rb/rb.php');
        R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $ajax_user_id=R::findOne('employees',"`name` = ?",array($_GET['selectuser']));
        $query=R::findAll('strain',"`o_id` = ? AND u_id = ?",array($_GET['deleted_object'],$ajax_user_id->id));
        
        foreach($query as $q)
        {
                $q->query_for_del=1;
                $ans=R::store($q);
        }
        echo json_encode($query, JSON_FORCE_OBJECT);
    
       
       

?>