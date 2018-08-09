<?php
$adServer = "ldap://10.78.4.105";

$ldap = ldap_connect($adServer);
$username =$_GET['AuthUser'];
$password =$_GET['AuthPass'];

$ldaprdn = $username;
// $ldaprdn = 'guss' . "\\" . $username;

ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

    $bind = @ldap_bind($ldap, $ldaprdn, $password); 
    $filter="(sAMAccountName=$username)";
    $result = ldap_search($ldap,"dc=guss,dc=ru",$filter);
    ldap_sort($ldap,$result,"sn");
    $info = ldap_get_entries($ldap, $result);
    
    @ldap_close($ldap);
    
   echo '<pre>';
   var_dump($info);
   echo '</pre>';

?>
