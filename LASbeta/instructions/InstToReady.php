<?php 
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
$close = R::dispense('reports');
$close->inst_id = $_GET['instId'];
$close->content = $_GET['content'];
$close->user_id = $_GET['user'];
$close->type = $_GET['type'];
if(R::store($close)){
    $instructionToWork = R::findOne('bunchinstemployees',"u_id = ? AND inst_id = ? AND role = ? AND status = ?",array($_GET['user'],$_GET['instId'],1,1));
    $instructionToWork->status = 2;
    if(R::store($instructionToWork)){
        echo json_encode("good", JSON_FORCE_OBJECT);
    }
}


?>