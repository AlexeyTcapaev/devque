<?php 
class User
{
    public $name;
    public $login;
    public $room;
    public $department;
    public $phone;
    public $email;
    public $title;
    public $dn;
}
 
  //FQDN path where search will be performed. OU - organizational unit / DC - domain component
$dn_osp = "OU=Users,OU=OSP,OU=Filials,DC=guss,DC=ru";
$dn_oms = "OU=Users,OU=OMS,OU=Filials,DC=guss,DC=ru";
  //Search query. CN - common name (CN=* will return all objects)

$ans = [];
function get_info_from_ad($dn)
{
         //LDAP server address
    $server = "ldap://10.78.4.105";
        //domain user to connect to LDAP
    $user = "GUSS\\tsapaevaa";
        //user password
    $psw = "123qwe!@#";
    $search = "CN=*";
    $ds = ldap_connect($server);
    ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ds, LDAP_OPT_REFERRALS, 0);
    $r = ldap_bind($ds, $user, $psw); 
        // performing search
    $sr = ldap_search($ds, $dn, $search);
    $data = ldap_get_entries($ds, $sr);
    return $data;
    ldap_close($ds);
}


foreach (get_info_from_ad($dn_osp) as $user) {
    $a = new User();
    $a->name = $user['displayname'][0];
    $a->login = $user['samaccountname'][0];
    $a->room = $user['physicaldeliveryofficename'][0];
    $a->department = $user['department'][0];
    $a->phone = $user['ipphone'][0];
    $a->email = $user['mail'][0];
    $a->title = $user['title'][0];
    $a->dn = $user['distinguishedname'][0];
    if ($a->phone != null)
        array_push($ans, $a);
}
foreach (get_info_from_ad($dn_oms) as $user) {
    $a = new User();
    $a->name = $user['displayname'][0];
    $a->login = $user['samaccountname'][0];
    $a->room = $user['physicaldeliveryofficename'][0];
    $a->department = $user['department'][0];
    $a->phone = $user['ipphone'][0];
    $a->email = $user['mail'][0];
    $a->title = $user['title'][0];
    $a->dn = $user['distinguishedname'][0];
    if ($a->phone != null)
        array_push($ans, $a);
}
echo '<pre>';
var_dump($ans);
echo '</pre>';

?>