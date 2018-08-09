<?php
require('Instruction.php');
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$ans = [];

if (R::findOne('employees', "`id` = ?", array($_GET['user']))->role == 4)
    $set_inst = R::findAll('bunchinstemployees', "role = 0");
else $set_inst = R::findAll('bunchinstemployees', "u_id = ? AND role = 0", array($_GET['user']));
$s = [];
foreach ($set_inst as $checktoready) {
    $bunchtoready = R::findAll('bunchinstemployees', "inst_id = ? AND role = 1 and status = 0 GROUP BY inst_id", array(R::findOne('instructions', "id = ?", array($checktoready->inst_id))->id));

    foreach ($bunchtoready as $ready) {

        array_push($s, $ready);

    }

}
foreach ($s as $set) {
    $inst = R::findOne('instructions', "id = ?", array($set->inst_id));
    $inst->messageCount = R::count('messages', "inst_id = ?", array($inst->id));
    $inst->creator = R::findOne('employees', "`id` = ?", array($inst->creator));
    $date = new DateTime($inst->open);
    $inst->open = $date->format('d.m.Y');
    $date = new DateTime($inst->dountil);
    $inst->dountil = $date->format('d.m.Y');
    $pipes = R::findAll('bunchinstemployees', "inst_id = ? and role = 1", array($set->inst_id));
    if ($pipes != null) {
        $a = [];
        foreach ($pipes as $pipe) {

            $user = R::findOne('employees', "`id` = ?", array($pipe->u_id));
            $user->piped_status = $pipe->status;

            if ($user->piped_status == "2") {
                if (R::findOne('reports', "user_id = ? AND inst_id = ?", array($user->id, $set->inst_id)) != null) {
                    $user->report = R::findOne('reports', "user_id = ? AND inst_id = ?", array($user->id, $set->inst_id));
                    $date = new DateTime($user->report->date);
                    $user->report->date = $date->format('d.m.Y H:i:s');
                }

            }

            array_push($a, $user);
        }
        $inst->piped_user = $a;
        if ($inst !== null)
            array_push($ans, $inst);
    }

}
echo json_encode($ans, JSON_FORCE_OBJECT);
?>