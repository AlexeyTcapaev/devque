<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
class User
{
    public $name;
    public $login_ad;
    public $phone;
    public $logon;
    public $department_ad;
    public $position;
    public $email;
    public $id;
    public $photo;
}
$adServer = "ldap://10.78.4.105";
$ldap = ldap_connect($adServer);
$username = "tsapaevaa";
$password = "123qwe!@#";

$ldaprdn = 'guss' . "\\" . $username;
$searchuser = str_replace("GUSS\\", "", $_SERVER['REMOTE_USER']);
ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

$bind = @ldap_bind($ldap, $ldaprdn, $password);
$filter = "(sAMAccountName=$searchuser)";
$result = ldap_search($ldap, "dc=guss,dc=ru", $filter);
ldap_sort($ldap, $result, "sn");
$info = ldap_get_entries($ldap, $result);
imagecreatefromstring($info[0]['thumbnailphoto'][0]);
/*if ($info[0]['thumbnailphoto'][0] != '') {
    $fp = fopen('photo/' . $info[0]["samaccountname"][0] . '.jpg', "w");
    fwrite($fp, $info[0]['thumbnailphoto'][0]);
    fclose($fp);
}*/
$ans = $info[0];
echo imagecreatefromstring($info[0]['thumbnailphoto'][0]);
ldap_close($ldap);
?>