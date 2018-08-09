<?php

require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$ans = R::findAll('users');
echo json_encode($ans);
?>