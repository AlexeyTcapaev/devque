<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
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
$searchuser = str_replace("GUSS\\","",$_SERVER['REMOTE_USER']);
ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

$bind = @ldap_bind($ldap, $ldaprdn, $password); 
$filter="(sAMAccountName=$searchuser)";
$result = ldap_search($ldap,"dc=guss,dc=ru",$filter);
ldap_sort($ldap,$result,"sn");
$info = ldap_get_entries($ldap, $result);
$ans=[];

    $a = new User();
    $a->name = $info[0]['displayname'][0];
    $a->login_ad = $info[0]['samaccountname'][0];
    $a->phone = $info[0]['ipphone'][0];
    $a->logon = $_SERVER['REMOTE_ADDR'];
    $a->department_ad = $info[0]['department'][0];
    $a->position = $info[0]['title'][0];
    $a->email = $info[0]['mail'][0];
    $a->id = R::findOne('employees',"`login_ad` = ?",array($info[0]['samaccountname'][0]))->id;
    $a->photo = R::findOne('employees',"`login_ad` = ?",array($info[0]['samaccountname'][0]))->photo;
    $a->role = R::findOne('employees',"`login_ad` = ?",array($info[0]['samaccountname'][0]))->role;
    if($a != null)
    array_push($ans,$a);

echo json_encode($ans, JSON_FORCE_OBJECT);
ldap_close($ldap);
?>