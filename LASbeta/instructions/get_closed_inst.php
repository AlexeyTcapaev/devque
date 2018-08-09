<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$ans = [];
if (R::findOne('employees', "`id` = ?", array($_GET['user']))->role == 4) {


    $inst = R::findAll('instructions');
    foreach ($inst as $i) {
        if ($i->closed != null) {
            $date = new DateTime($i->open);
            $i->open = $date->format('d.m.Y');
            $date = new DateTime($i->dountil);
            $i->dountil = $date->format('d.m.Y');
            $date = new DateTime($i->closed);
            $i->closed = $date->format('d.m.Y');
            $i->creator = R::findOne('employees', "`id` = ?", array($i->creator));
            $i->messageCount = R::count('messages', "inst_id = ?", array($i->id));
            $pipes = R::findAll('bunchinstemployees', "inst_id = ? and status = 3", array($i->id));
            $a = [];
            foreach ($pipes as $pipe) {

                $user = R::findOne('employees', "`id` = ?", array($pipe->u_id));

                $user->piped_status = $pipe->status;

                if ($user->piped_status == "3") {

                    $user->report = R::findOne('reports', "user_id = ? AND inst_id = ?", array($user->id, $i->id));
                    $date = new DateTime($user->report->date);
                    $user->report->date = $date->format('d.m.Y H:i:s');

                }

                array_push($a, $user);
            }
            $i->piped_user = $a;

            array_push($ans, $i);
        }
    }
    echo json_encode($ans, JSON_FORCE_OBJECT);
} else {
    $set_inst = R::findAll('bunchinstemployees', "u_id = ? AND role = 1 AND status = 3", array($_GET['user']));


    foreach ($set_inst as $set) {
        $inst = R::findOne('instructions', "id = ?", array($set->inst_id));
        if ($inst != null) {
            $inst->creator = R::findOne('employees', "`id` = ?", array($inst->creator));
            $inst->messageCount = R::count('messages', "inst_id = ?", array($inst->id));
            $date = new DateTime($inst->open);
            $inst->open = $date->format('d.m.Y');
            $date = new DateTime($inst->dountil);
            $inst->dountil = $date->format('d.m.Y');
            $date = new DateTime($inst->closed);
            $inst->closed = $date->format('d.m.Y');
            $pipes = R::findAll('bunchinstemployees', "inst_id = ? and role = 1", array($set->inst_id));
            $a = [];
            foreach ($pipes as $pipe) {
                $user = R::findOne('employees', "`id` = ?", array($pipe->u_id));
                $user->piped_status = $pipe->status;
                
                if ( $user->piped_status >= 2) {
                  
                    $user->report = R::findOne('reports', "user_id = ? AND inst_id = ?", array($user->id, $set->inst_id));
                   
                }
                array_push($a, $user);
            }
            $inst->piped_user = $a;
            if ($inst !== null)
                array_push($ans, $inst);
        }
    }
   echo json_encode($ans, JSON_FORCE_OBJECT);
}

?>