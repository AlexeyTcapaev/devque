<?php
    session_start();
    require_once('rb/rb.php');
    if(!R::testConnection())
        {
           R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
            R::freeze(true);
        }
    class row
    {
        public $o_id;
        public $obj;
        public $prj;
        public $code;
    }
   
     function output_in_load($user,$start_date,$end_date)
        {
            $user_id = R::findOne('employees',' login_ad = ? ',array($user));
            $work_beans=R::findAll('strain',' u_id = ? ',array($user_id->id));
            $prj_obj=array();
            foreach($work_beans as $bean)
            {
                array_push($prj_obj,$bean->o_id);
            }
            $unique_obj=array_unique($prj_obj);
           $mass_row=array();
            foreach($unique_obj as $obj)
            {
                $r = new row();
                $r->o_id=$obj;
                $on = R::findOne('objects',' id = ? ',array($obj));
                $r->obj=$on->o_name;
                $pr = R::findOne('projects',' id = ? ',array($on->project_id));
                $r->prj = $pr->p_name;
                $r->code = $pr->code;
                $del=R::findOne('strain',' o_id = ? ',array($r->o_id));
                $r->query_for_del=$del->query_for_del;

                array_push($mass_row,$r);

            }

            return $mass_row;
        }

?>