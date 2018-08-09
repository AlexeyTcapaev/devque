<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
R::freeze(true);
$users = R::findAll('users');
foreach ($users as $key => $user) {
    $user->department = R::findOne('departments', "id = ?", array($user->department));
    $user->workshop = R::findOne('workshops', "id = ?", array($user->department->workshop));
    $user->position = R::findOne('positions', "id = ?", array($user->positions))->positions;
}
echo json_encode($users);

?>