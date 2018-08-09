<?php 
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$set_inst = R::findOne('bunchinstemployees', "u_id = ? AND role = 1 AND status = 2 AND inst_id =?", array($_GET['user'], $_GET['instruction']));
$set_inst->status = 0;
R::store($set_inst);
echo json_encode("good", JSON_FORCE_OBJECT);

?>