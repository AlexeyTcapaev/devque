<?php
//session_start();
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);

$get = explode(" # ",$_GET['prj']);
if($get[1] == NULL){
    $get[1] = 0;
}

$prj = R::findOne('projects', "p_name = ? and code = ?", array($get[0],$get[1]));
$objs = R::findAll('objects', "project_id = ? AND showforusers = ?", array($prj->id,'1'));
$user = R::findOne('employees', "`name` = ?", array($_GET['selectuser']));
$objects = array();
foreach ($objs as $value) {
    $line = R::findOne('strain', "`u_id` = ? AND o_id = ? ", array($user->id, $value->id));

    if ($line == null) {
        array_push($objects, $value);
    } else {
        $chekfordel = R::findAll('strain', "`u_id` = ? AND o_id = ? ", array($user->id, $value->id));
        foreach ($chekfordel as $key) {
            if ($key->query_for_del == 1) {                    
                array_push($objects, $value);
            }
        }
    }
}
$objects = array_unique($objects);
usort($objects, function ($a, $b) {
    return strcmp($a->o_name, $b->o_name);
});
echo json_encode($objects, JSON_FORCE_OBJECT);
?>