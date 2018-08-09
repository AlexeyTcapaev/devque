<?php
session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $un=R::findOne('employees',"`name` = ?",array($_GET['selectuser']));
        $o= explode(" -> ",$_GET['obj']);
        $add_l=R::findAll('strain',"u_id =?  AND o_id = ?", array($un->id,$_GET['hide_object']));
        foreach ($add_l as $key) {
            $key->showed=1;
            R::store($key);
        }
      
        echo json_encode($add_l, JSON_FORCE_OBJECT);
        /*
        foreach ($add_l as $value) {
          $value->showed=1;
        }
        R::store($add_l); 
        class line
        {
            public $obj;
            public $o_id;
            public $prj;
            public $code;
            public $dates=array();
            public $hours=array();
            public $query_for_del=1;
        }
        $l = new line();
        $l->o_id= $oid->id;
        $l->obj=$o[1];
        $l->prj=$o[0];
        $l->code= $p->code;
        $l->query_for_del=0;
        echo json_encode($l, JSON_FORCE_OBJECT);*/
       
    
       
       

?>