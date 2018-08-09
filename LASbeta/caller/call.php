<?php
require_once "telnet.php";
$ip = "10.78.0.98";
$usr = "callweb";
$pass = "123qwe!@#";
$command = "channel originate SIP/" . $_GET['from'] . " extension " . $_GET['to'] . "@internal_phones";
echo json_encode($command);
function ast_exec($com, $ip, $usr, $pass,$ans)
{
    $telnet = new PHPTelnet();
    $result = $telnet->Connect($ip, $usr, $pass);

    if ($result == 0) {
        $telnet->DoCommand($com, $result);
        $telnet->Disconnect();
        return $result;
    }
    return 'Error!';
}
ast_exec($command, $ip, $usr, $pass,$ans);