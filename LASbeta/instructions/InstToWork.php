<?php 
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
$instructionToWork = R::findOne('bunchinstemployees',"u_id = ? AND inst_id = ? AND role = ? AND status = ?",array($_GET['user'],$_GET['instId'],1,0));
$instructionToWork->status = 1;
if(R::store($instructionToWork)){
    echo json_encode("good", JSON_FORCE_OBJECT);
}

?>