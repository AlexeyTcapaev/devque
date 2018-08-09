<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$instruction = R::dispense('instructions');
$instruction->content = $_GET['content'];
if (R::findOne('employees', "`name` = ?", array($_GET['creator'])) != null)
    $instruction->creator = R::findOne('employees', "`name` = ?", array($_GET['creator']))->id;
else $instruction->creator = $_GET['creator'];
$instruction->title = $_GET['name'];
$instruction->file = $_GET['file'];
$sd = new DateTime();
$sd->setDate($_GET['dountil'][0], $_GET['dountil'][1], $_GET['dountil'][2]);
$instruction->dountil = $sd;
$bunchToCreator = R::dispense('bunchinstemployees');
$bunchToCreator->u_id = $instruction->creator;
$bunchToCreator->role = 0;

if (R::store($instruction)) {
    $bunchToCreator->inst_id = $instruction->id;
    if (R::store($bunchToCreator)) {
        foreach ($_GET['whoAdded'] as $addeduser => $valuse) {
            $bunchToAdded = R::dispense('bunchinstemployees');
            $user = R::findOne('employees', "`name` = ?", array($addeduser));
            $headers = 'From:Система <tsapaevaa@guov.ru>' . "\r\n";
            if ($user->id != 83)
                mail($user->login_ad . "@guov.ru", "Система учёта поручений", "Вам назначено новое поручение: \nСоздал " . R::findOne('employees', "`id` = ?", array($instruction->creator))->name . "\nЗаголовок поручения: " . $instruction->title . "\nТекст поручения: " . $instruction->content . "\nДанное письмо сгенерировано автоматически,убедительная просьба не отвечать на него.", $headers);
            $bunchToAdded->u_id = $user->id;
            $bunchToAdded->inst_id = $instruction->id;
            $bunchToAdded->role = 1;
            R::store($bunchToAdded);

        }
    }
    echo json_encode($instruction, JSON_FORCE_OBJECT);
}

?>