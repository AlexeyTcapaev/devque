<?php
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
R::freeze(true);
$check=R::findOrCreate('employees');
var_dump($check);
?>