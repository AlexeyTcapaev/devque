<?php
 require('../rb/rb.php');
 R::setup('mysql:host=10.78.5.144;dbname=las','root','');
 R::freeze(false);
 $user=R::findOne('employees',"`name` = ?",array($_GET['selectuser']));
 echo $user->photo;
?>