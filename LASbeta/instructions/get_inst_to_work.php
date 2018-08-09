<?php
require('Instruction.php');
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$ans = [];
if (R::findOne('employees', "`id` = ?", array($_GET['user']))->role == 4)
    $set_inst = R::findAll('bunchinstemployees', "role = 1 AND status = 1 GROUP BY inst_id");
else $set_inst = R::findAll('bunchinstemployees', "u_id = ? AND role = 1 AND status = 1 ", array($_GET['user']));
$s = [];
if (R::findOne('employees', "`id` = ?", array($_GET['user']))->role == 4)
    foreach ($set_inst as $checktoready) {
    $bunchtoready = R::findAll('bunchinstemployees', "inst_id = ? AND role = 1", array($checktoready->inst_id));
    $check = 0;
    foreach ($bunchtoready as $ready) {
        if ($ready->status == 1) {
            $check++;
        }
    }
    if (count($bunchtoready) == $check) {
        array_push($s, $checktoready);
    }
} else $s = $set_inst;

foreach ($s as $set) {
    $inst = R::findOne('instructions', "id = ?", array($set->inst_id));
    $inst->messageCount = R::count('messages', "inst_id = ?", array($inst->id));
    $datetime2 = new DateTime($inst->dountil);
    if ($inst->closed == null)
        $datetime1 = new DateTime();
    else $datetime1 = new DateTime($inst->closed);
    $interval = $datetime1->diff($datetime2);
    $inst->check = (int)$interval->format('%R%a');
    if ($inst->check <= 2 && $inst->check > 0) {
        $inst->check = "orange-text";
    }
    if ($inst->check >= 0) {
        $inst->check = "green-text";
    } else if ($inst->check < 0) {
        $inst->check = "red-text";
    }
    $inst->creator = R::findOne('employees', "`id` = ?", array($inst->creator));
    $date = new DateTime($inst->open);
    $inst->open = $date->format('d.m.Y');
    $date = new DateTime($inst->dountil);
    $inst->dountil = $date->format('d.m.Y');
    $pipes = R::findAll('bunchinstemployees', "inst_id = ? and role = 1", array($set->inst_id));

    $a = [];
    foreach ($pipes as $pipe) {
        $user = R::findOne('employees', "`id` = ?", array($pipe->u_id));
        $user['piped_status'] = $pipe->status;
        array_push($a, $user);
    }
    $inst->piped_user = $a;
    if ($inst !== null)
        array_push($ans, $inst);
}
sort($ans);
echo json_encode($ans, JSON_FORCE_OBJECT);
?>