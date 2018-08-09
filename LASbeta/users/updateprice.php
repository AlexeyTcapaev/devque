<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
$user = R::findOne('users', "id = ?", array($_GET['user']));
$user->price = $_GET['value'];
R::store($user);
?>