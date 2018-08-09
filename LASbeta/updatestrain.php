<?php
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$prevmoth = new DateTime();
$prevmoth->modify('-1 Months');
$thismoth = new DateTime();
$strain = R::findAll('strain', 'query_for_del = 0 and work_date < ? and work_date >= ?',array($thismoth->format('Y-m-01 00:00:00'), $prevmoth->format('Y-m-00 00:00:00')));
foreach ($strain as $key => $line) {
    $prj = R::findOne('objects', "id = ?", array($line->o_id));
    $line->project_id = $prj->project_id;
    R::store($line);
}
?>