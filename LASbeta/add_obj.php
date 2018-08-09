<?php
session_start();
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);
$un = R::findOne('employees', "`id` = ?", array($_GET['selectuser']));
if ($_GET['hours'] != null) {
    $add_l = R::findOrCreate('strain', array('u_id' => $un->id, 'o_id' => $_GET['obj'], 'work_date' => $_GET['s']));
    $add_l->time = $_GET['hours'];
    $add_l->query_for_del = 0;
    $prj = R::findOne('objects', "id = ?", array($add_l->o_id));
    $add_l->project_id = $prj->project_id;
    R::store($add_l);
}

$sd = new DateTime();
$sd->setDate($_GET['s'][0], $_GET['s'][1], $_GET['s'][2] - 1);
$ed = new DateTime();
$ed->setDate($_GET['e'][0], $_GET['e'][1], $_GET['e'][2]);

$ajax_user_id = R::findOne('employees', "`id` = ?", array($_GET['selectuser']));
$ajax_user_work = R::findAll('strain', "`u_id` = ?", array($ajax_user_id->id));

class row
{
    public $o_id;
    public $obj;
    public $prj;
    public $code;
}

function output_in_load($user, $start_date, $end_date)
{
    $user_id = R::findOne('employees', ' login_ad = ? ', array($user));
    $work_beans = R::findAll('strain', ' u_id = ? ', array($user_id->id));
    $prj_obj = array();
    foreach ($work_beans as $bean) {
        array_push($prj_obj, $bean->o_id);
    }
    $unique_obj = array_unique($prj_obj);
    $mass_row = array();
    foreach ($unique_obj as $obj) {
        $r = new row();
        $r->o_id = $obj;
        $on = R::findOne('objects', ' id = ? ', array($obj));
        $r->obj = $on->o_name;
        $pr = R::findOne('projects', ' id = ? ', array($on->project_id));
        $r->prj = $pr->p_name;
        $r->code = $pr->code;
        $del = R::findOne('strain', ' o_id = ? ', array($r->o_id));
        $r->query_for_del = $del->query_for_del;

        array_push($mass_row, $r);

    }

    return $mass_row;
}
$mass = output_in_load($ajax_user_id->login_ad, null, null);


class line
{
    public $obj;
    public $o_id;
    public $prj;
    public $code;
    public $dates = array();
    public $hours = array();
    public $query_for_del;
}
$lines = array();


foreach ($mass as $r) {
    $l = new line();
    $l->o_id = $r->o_id;
    $l->obj = $r->obj;
    $l->prj = $r->prj;
    $l->code = $r->code;
    $l->query_for_del = $r->query_for_del;
    foreach ($ajax_user_work as $user) {
        if ($l->o_id == $user->o_id)
            if (($sd->format('Y-m-d 00:00:00') <= $user->work_date) && (($ed->format('Y-m-d 00:00:00') >= $user->work_date))) {
            array_push($l->dates, $user->work_date);
            array_push($l->hours, $user->time);
        }
    }
    array_push($lines, $l);
}
echo json_encode($lines, JSON_FORCE_OBJECT);





?>