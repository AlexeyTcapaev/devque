<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$ans = [];
$messages = R::findAll('messages', "inst_id = ?", array($_GET['instruction']));
foreach ($messages as $message) {
    if ($message->u_id != 0) {
        $user = R::findOne('employees', "`id` = ?", array($message->u_id));
        $message->sender = $user->name;
        $date = new DateTime($message->time);
        $message->time = $date->format('d.m.Y H:i:s');
        $message->senderposition = $user->position;
        $message->senderphone = $user->phone;
        if ($user->photo != null)
            $message->senderphoto = $user->photo;
        else $message->senderphoto = "../photo/default.svg";
    } else {
        $date = new DateTime($message->time);
        $message->time = $date->format('d.m.Y H:i:s');
        $message->sender = "The Система";
        $message->senderphoto = "../photo/robot.svg";
    }
   
    array_push($ans, $message);
}
echo json_encode($ans, JSON_FORCE_OBJECT);
?>