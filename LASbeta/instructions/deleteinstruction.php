<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);
$fordel = R::findOne('instructions', "id = ?", array($_GET['instruction']));
$links = R::findAll('bunchinstemployees', "inst_id = ?", array($_GET['instruction']));
$msg = R::findAll('messages', "inst_id = ?", array($_GET['instruction']));
R::trash( $fordel );
R::trashAll( $links );
R::trashAll( $msg );
?>