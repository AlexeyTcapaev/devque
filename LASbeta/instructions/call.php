<?php
require_once "telnet.php";
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$to = R::findOne('employees', "phone = ?", array($_GET['to']));
$from = R::findOne('employees', "name = ?", array($_GET['from']));
$ans = "Звонок от " . $from->name . " адресат " . $to->name;
$ip = "10.78.0.98";
$usr = "callweb";
$pass = "123qwe!@#";
$command = "channel originate SIP/" . $from->phone . " extension " . $to->phone . "@internal_phones";

function ast_exec($com, $ip, $usr, $pass,$ans)
{
    $telnet = new PHPTelnet();
    $result = $telnet->Connect($ip, $usr, $pass);

    if ($result == 0) {
        $telnet->DoCommand($com, $result);
        $telnet->Disconnect();
        echo json_encode($ans, JSON_FORCE_OBJECT);
        return $result;
    }
    return 'Error!';
}
ast_exec($command, $ip, $usr, $pass,$ans);