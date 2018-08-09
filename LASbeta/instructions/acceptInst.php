<?php 
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$set_inst = R::findOne('bunchinstemployees', "u_id = ? AND role = 1 AND status = 2 AND inst_id =?", array($_GET['user'], $_GET['instruction']));
$set_inst->status = 3;
if (R::store($set_inst)) {
    $checkFull = R::findAll('bunchinstemployees', "inst_id = ? AND role = 1", array($_GET['instruction']));
    foreach ($checkFull as $check) {
        if ($check->status > 2) {
            $bool++;
        }
    }
    if ($bool == count($checkFull)) {
        $inst = R::findOne('instructions', "id = ?", array($_GET['instruction']));
        $inst->closed = new DateTime();
        if (R::store($inst)) {
            echo json_encode("good", JSON_FORCE_OBJECT);
        }
    }
}
?>