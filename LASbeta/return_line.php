<?php
session_start();
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);
$un = R::findOne('employees', "`name` = ?", array($_GET['selectuser']));
$obj = explode(' - ', $_GET['obj'], 2);
$p = R::findOne('projects', "`p_name` = ?", array($obj[0]));
$o = R::findOne('objects', "`project_id` = ? AND o_name = ?", array($p->id, $obj[1]));
$add_l = R::findAll('strain', "u_id =?  AND showed = ? AND o_id = ?", array($un->id, 1, $o->id));
if ($add_l != null) {
  foreach ($add_l as $key) {
    $key->showed = 0;
    R::store($key);
  }
  echo json_encode("1", JSON_FORCE_OBJECT);
} else echo json_encode("Error!", JSON_FORCE_OBJECT);





?>