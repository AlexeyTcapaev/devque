<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$inst = R::findOne('instructions', "id = ?", array($_GET['instruction']));
$sd = new DateTime();
$sd->setDate($_GET['date'][0], $_GET['date'][1], $_GET['date'][2]);
$inst->dountil = $sd;
R::store($inst);
echo json_encode($inst);
?>