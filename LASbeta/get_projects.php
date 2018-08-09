<?php
//session_start();
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);
$obj = R::findAll('objects');
$user = R::findOne('employees', "`name` = ?", array($_GET['selectuser']));
$projects = array();
foreach ($obj as $value) {
    $line = R::findOne('strain', "`u_id` = ? AND o_id = ?", array($user->id, $value->id));
    if ($line == null) {
        $prj = R::findOne('projects', "id = ?", array($value->project_id));
        array_push($projects, $prj);
    } else {
        $lines = R::findAll('strain', "`u_id` = ? AND o_id = ?", array($user->id, $value->id));
        foreach ($lines as $l) {
            if ($l->query_for_del != 1) {
                $prj = R::findOne('projects', "id = ?", array($value->project_id));
                array_push($projects, $prj);
            }
        }
    }
}
$projects = array_unique($projects);
usort($projects, function($a, $b)
{
    return strcmp($a->p_name, $b->p_name);
});
echo json_encode($projects, JSON_FORCE_OBJECT);
?>