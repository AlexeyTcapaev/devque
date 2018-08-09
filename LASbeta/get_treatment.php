<?php
//session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $treatment=R::findAll('treatment');      
        echo json_encode($treatment, JSON_FORCE_OBJECT);
?>