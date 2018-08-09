<?php
session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $now = new DateTime();
        $user=R::findOne('employees',"`name` = ?",array($_GET['selectuser']));
      
       // $check=R::findOrCreate('projects',"p_name = ? AND code = ?",array($_GET['prj'],$_GET['code']));
        $check=R::findOrCreate('projects',['p_name' => $_GET['prj'] , 'code' => $_GET['code']]);
        $check->creator=$user->id;
        $check->add_date = $now->format('Y-m-d H:i:s');
        R::store($check);
        //$checkObj=R::findOrCreate('objects',"o_name = ? AND project_id = ?",array($_GET['obj'],$check->id));
        $checkObj=R::findOrCreate('objects',['o_name' => $_GET['obj'] , 'project_id' => $check->id]);
        $checkObj->creator=$user->id;   
        $checkObj->add_date = $now->format('Y-m-d H:i:s');
        R::store($checkObj);
        echo json_encode($checkObj, JSON_FORCE_OBJECT);
?>