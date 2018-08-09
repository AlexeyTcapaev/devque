<?php
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$fix = R::findOne("employees", "`id` = 249");
$strain = R::findAll('strain', 'u_id = 249');
foreach ($strain as $row) {
    $row->u_id = 32;
    R::store($row);

}

?>