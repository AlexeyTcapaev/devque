<?php
session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $un=R::findAll('objects',"`project_id` = ?",array(24));
        foreach ($un as $u ) {
            echo $u->id."||".$u->o_name;
            echo "<br>";
        }
     
       
    
       
       

?>