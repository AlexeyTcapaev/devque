<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$ans = [];
    $set_bunch = R::findAll('bunchinstemployees', " u_id = ? and role = 1 and status = 0 GROUP BY inst_id", array($_GET['user']['id']));
    foreach ($set_bunch as $bunch) {
        $inst = R::findOne('instructions', "id = ?", array($bunch->inst_id));
        if ($inst != null && $inst->closed == null) {
            $inst->creator = R::findOne('employees', "`id` = ?", array($inst->creator));
            $inst->messageCount = R::count('messages', "inst_id = ?", array($inst->id));
            $datetime2 = new DateTime($inst->dountil);
            if( $inst->closed == NULL)
            $datetime1 = new DateTime();
            else  $datetime1 = new DateTime($inst->closed);
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
            $date = new DateTime($inst->open);
            $inst->open = $date->format('d.m.Y');
            $date = new DateTime($inst->dountil);
            $inst->dountil = $date->format('d.m.Y');
            $date = new DateTime($inst->closed);
            $inst->closed = $date->format('d.m.Y');
            $pipes = R::findAll('bunchinstemployees', "inst_id = ? and role = 1", array($bunch->inst_id));
            $a = [];
            foreach ($pipes as $pipe) {
                $user = R::findOne('employees', "`id` = ?", array($pipe->u_id));
                $user->piped_status = $pipe->status;

                if ($user->piped_status >= 2) {

                    $user->report = R::findOne('reports', "user_id = ? AND inst_id = ?", array($user->id, $bunch->inst_id));

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