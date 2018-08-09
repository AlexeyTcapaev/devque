<?php
        //session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $u=R::findOne('employees',"`login_ad` = ?",array(str_replace("GUSS\\","",$_SERVER['REMOTE_USER'])));
        $ans=array();
        if($u->role >= 2 )
        {
                $users=R::findAll('employees');
                $t=array();
                foreach($users as $user )
                {
                        array_push($t,$user->name);
                }
                sort($t);
                foreach ($t as $name) 
                {
                    foreach($users as $user)
                    {
                            if($name == $user->name)
                            array_push($ans,$user);
                    }
                }
        }
        else 
        {
                $users=R::findAll('employees',"`department_ad` = ?",array($u->department_ad));
                $t=array();
                foreach($users as $user )
                {
                        array_push($t,$user->name);
                }
                sort($t);
                foreach ($t as $name) 
                {
                foreach($users as $user)
                {
                        if($name == $user->name)
                        array_push($ans,$user);
                }
                }
        }
        echo json_encode($ans, JSON_FORCE_OBJECT);
?>