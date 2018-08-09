<?php
session_start();
        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $check=R::findOne('employees','name = ?',array($_GET['user']));
        $treat = R::dispense('treatment');
        $treat->theme=$_GET['theme'];
        $treat->text=$_GET['message'];
        $treat->u_id= $check->id;
        $now = new DateTime();
        $message = $now->format('d M Y')." года в ".$now->format('H:i').
        " от пользователя ". $_GET['user']. " (".$check->login_ad."@guov.ru".")
        поступило обращение по поводу системы учета времени:
         
        Тема обращения: ".$treat->theme."
        Текст обращения: ".$treat->text;
        $headers = 'From: LAS' . "\r\n" .
        'Reply-To: '.$check->login_ad.'@guov.ru' . "\r\n" .
        'Return-Path: '.$check->login_ad.'@guov.ru' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        mail("tsapaevaa@guov.ru","Обращение LAS: ".$treat->theme,$message,$headers); 
        mail("DyukAY@guov.ru","Обращение LAS: ".$treat->theme,$message,$headers); 
        mail("PetrakovRV@guov.ru","Обращение LAS: ".$treat->theme,$message,$headers); 
        $id = R::store($treat);
       
        echo json_encode( $id, JSON_FORCE_OBJECT);
?>