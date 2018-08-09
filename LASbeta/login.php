<?php
 //session_start();
 require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
 R::freeze(true);
        $logon=$_SESSION['log_on'];
         $position=$_SESSION['position'];
         $name=$_SESSION['name'];
         $login_ad=$_SESSION['login_ad'];
         $department_ad=$_SESSION['department_ad'];
         $ll=R::dispense('userlogon');
            $ll->login_ad = $login_ad;
            $ll->session =  $_SESSION['session_id'];
            $ll->pcip = $_SERVER['REMOTE_ADDR'];
            $ll=R::store($ll);




        $check=R::findOrCreate('employees',array('login_ad' => $login_ad));
        $check->logon = $logon;
        $check->name = $name;
        $check->login_ad = $login_ad;
        $check->department_ad = $department_ad;
        $check->position = $position;
        $check->last_logon = $_SESSION['last_logon'];
        if($_SESSION['photo']!='')
        $check->photo = 'photo/'.$_SESSION['login_ad'].'.jpg';
        $check->auth = 1;
        $check->session_id = $_SESSION['session_id'];
        if($check->role==1)
        {
            $user_mass=array();
            $userlist=R::findAll('employees');
            foreach($userlist as $user)
            {
                array_push($user_mass,$user->name);
            }
            $_SESSION['adm']=1;
            $_SESSION['user_mass']=$user_mass;
        }
        if($check->role==2)
        {
            $user_mass=array();
            $userlist=R::findAll('employees');
            foreach($userlist as $user)
            {
                array_push($user_mass,$user->name);
            }
            $_SESSION['adm']=2;
            $_SESSION['user_mass']=$user_mass;
        }
        $id=R::store($check);

        echo json_encode($check, JSON_FORCE_OBJECT);
   

?>