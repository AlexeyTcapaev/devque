<?php
//session_start();
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);

$ajax_user_id = R::findOne('employees', "`id` = ?", array($_GET['selectuser']));
if ($ajax_user_id == null) {
    $ajax_user_id = R::findOne('employees', "`name` = ?", array($_GET['selectuser']));
}
$sd = new DateTime();
$sd->setDate($_GET['s'][0], $_GET['s'][1], $_GET['s'][2]);
$sd->setTime(0, 0, 0);
$ed = new DateTime();
$ed->setDate($_GET['e'][0], $_GET['e'][1], $_GET['e'][2]);
$ed->setTime(0, 0, 0);
class row
{
    public $o_id;
    public $obj;
    public $prj;
    public $code;
}
$ajax_user_work = R::findAll('strain', "`u_id` = ? AND work_date >= ? AND work_date <= ?", array($ajax_user_id->id, $sd->format('Y-m-d 00:00:00'), $ed->format('Y-m-d 00:00:00')));

function output_in_load($user)
{
    $user_id = R::findOne('employees', ' login_ad = ? ', array($user));

    $work_beans = R::findAll('strain', ' u_id = ? ', array($user_id->id));

    $prj_obj = array();
    foreach ($work_beans as $bean) {
        if ($bean->query_for_del != 1 && $bean->showed != 1)
            array_push($prj_obj, $bean->o_id);
    }
    $unique_obj = array_unique($prj_obj);
    $mass_row = array();
    foreach ($unique_obj as $obj) {
        $on = R::findOne('objects', ' id = ? and showforusers =? ', array($obj, '1'));
        if ($on !== null) {
            $r = new row();
            $r->o_id = $obj;
            $r->obj = $on->o_name;
            $pr = R::findOne('projects', ' id = ? ', array($on->project_id));
            $r->prj = $pr->p_name;
            $r->code = $pr->code;
            $del = R::findOne('strain', ' o_id = ? AND u_id = ?', array($obj, $_GET['selectuser']));
            if ($del->query_for_del != 1)
                array_push($mass_row, $r);
        }

    }

    return $mass_row;
}
$mass = output_in_load($ajax_user_id->login_ad);


class line
{
    public $obj;
    public $o_id;
    public $prj;
    public $code;
    public $dates = array();
    public $notes = array();
    public $hours = array();
    public $query_for_del = 1;
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



        if ($l->o_id == $user->o_id) {
            array_push($l->dates, $user->work_date);
            array_push($l->notes, $user->note);
            array_push($l->hours, $user->time);
        }

    }
    array_push($lines, $l);
}
echo json_encode($lines, JSON_FORCE_OBJECT);





?>