<?php
session_start();
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);
$un = R::findOne('employees', "`id` = ?", array($_GET['selectuser']));
if ($_GET['pcode'] != null)
    $p = R::findOne('projects', "`p_name` = ? and code = ?", array($_GET['prj'], $_GET['pcode']));
else $p = R::findOne('projects', "`p_name` = ?", array($_GET['prj']));
$oid = R::findOne('objects', " `project_id` = ? AND `o_name` = ?", array($p->id, $_GET['obj']));
if ($p != null && $oid != null) {

    $add_l = R::findAll('strain', "u_id = ? AND o_id = ?", array($un->id, $oid->id));
    var_dump($add_l);
    if ($add_l != null) {
        foreach ($add_l as $value) {
            $value->query_for_del = 0;
            R::store($value);
        }
    } else {
        $add_n = R::findOrCreate('strain', array('u_id' => $un->id, 'o_id' => $oid->id));
        $add_n->query_for_del = 0;
        $add_n->time = null;
        R::store($add_n);
    }

    class line
    {
        public $obj;
        public $o_id;
        public $prj;
        public $code;
        public $dates = array();
        public $hours = array();
        public $query_for_del = 0;
    }
    $l = new line();
    $l->o_id = $oid->id;
    $l->obj = $_GET['prj'];
    $l->prj = $_GET['obj'];
    $l->code = $p->code;
    $l->query_for_del = 0;
    echo json_encode($l, JSON_FORCE_OBJECT);
} else echo json_encode("Error!", JSON_FORCE_OBJECT);




?>