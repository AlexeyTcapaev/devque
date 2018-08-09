<?php
        session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $code=R::findOne('projects',"`p_name` = ?",array($_GET['prj']));
        
        echo json_encode($code->code, JSON_FORCE_OBJECT);
?>