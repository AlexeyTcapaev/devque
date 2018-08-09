<?php
class User
{
    public $name;
    public $login_ad;
    public $log_on;
    public $position;
    public $department_ad;
    public $mail;
    public $last_logon;
    public $session_id;
    public $photo;
}
$us = new User();
 $adServer = "ldap://10.78.4.105"; 
 $ldap = ldap_connect($adServer);
 $username = "tsapaevaa";
 $password = "123qwe!@#";
 
 $ldaprdn = 'guss' . "\\" . $username; 
 $searchuser = str_replace("GUSS\\","",$_SERVER['REMOTE_USER']);
 ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
 ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

$bind = @ldap_bind($ldap, $ldaprdn, $password); 
 if($password != null && $username != null)
 {
     $filter="(sAMAccountName=$searchuser)";
     $result = ldap_search($ldap,"dc=guss,dc=ru",$filter);
     ldap_sort($ldap,$result,"sn");
     $info = ldap_get_entries($ldap, $result);
     if($info[0]['thumbnailphoto'][0]!='')
     {
    //    $us->photo = $info[0]['thumbnailphoto'][0];
     }
     $us->log_on=$_SERVER['REMOTE_ADDR'];
     $us->position=$info[0]["title"][0];
     $us->name=$info[0]["sn"][0]." ".$info[0]["givenname"][0];
     $us->login_ad=$info[0]["samaccountname"][0];
     $us->department_ad=$info[0]["department"][0];
     $us->mail=$info[0]["mail"][0];
     $us->last_logon=date("Y-m-d H:i:s");
     echo json_encode($us, JSON_FORCE_OBJECT);
     @ldap_close($ldap);
     
}
else 
{
    unset($_SESSION);
    session_destroy();
}

?>