<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$message = R::dispense('messages');
$message->u_id = $_GET['user'];
$message->inst_id = $_GET['instruction'];
$message->content = $_GET['content'];
$message->time = new DateTime();
if (R::store($message)) {
    if ($_GET['user'] != "The Система") {
        $user = R::findOne('employees', "`id` = ?", array($message->u_id));
        $message->sender = $user->name;
        $message->senderposition = $user->position;
        $message->senderphoto = $user->photo;
    } else {
        $message->sender = "The Система";
        $message->senderphoto = "../photo/robot.svg";
    }
    $date = new DateTime($message->time);
    $message->time = $date->format('d.m.Y H:i:s');
    $inst = R::findOne('instructions', "`id` = ?", array($message->inst_id));
    $creator = R::findOne('employees', "`id` = ?", array($inst->creator));
    $headers = 'From:Система <tsapaevaa@guov.ru>' . "\r\n";
    if ($creator->id != 83)
        mail($creator->login_ad . "@guov.ru", "Система учёта поручений", "По вашему поручению оставлено новое сообщение: \nОтправил: " . $user->name . "\nТекст сообщения: " . $message->content . "\nДанное письмо сгенерировано автоматически,убедительная просьба не отвечать на него.", $headers);
    echo json_encode($message, JSON_FORCE_OBJECT);
} else echo "error!";

?>