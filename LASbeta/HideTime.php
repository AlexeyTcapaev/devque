<?php 
  //session_start();
  require('rb/rb.php');
 R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
  R::freeze(true);
  $sd = new DateTime();
  $sd->setDate($_GET['s'][0],$_GET['s'][1],$_GET['s'][2]);
  $sd->setTime(0,0,0);
  $ed = new DateTime();
  $ed->setDate($_GET['e'][0],$_GET['e'][1],$_GET['e'][2]);
  $ed->setTime(0,0,0);
  $User=R::findOne('employees',"`name` = ?",array($_GET['selectuser']));
  $TimeLines=R::findAll('strain',"`u_id` = ? AND work_date >= ? AND work_date <= ? and showed = ?",array($User->id,$sd->format('Y-m-d 00:00:00'),$ed->format('Y-m-d 00:00:00'),1));
  echo json_encode($TimeLines, JSON_FORCE_OBJECT);


?>