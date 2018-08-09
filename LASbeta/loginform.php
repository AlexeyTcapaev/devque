<?php
session_start();
if(isset($_POST['username']) && isset($_POST['password'])){

    $adServer = "ldap://10.78.4.105";
	
    $ldap = ldap_connect($adServer);
    $username = $_POST['username'];
    $password = $_POST['password'];

    $ldaprdn = 'guss' . "\\" . $username;

    ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

        $bind = @ldap_bind($ldap, $ldaprdn, $password); 
    if($password != null && $username != null)
    {
        $filter="(sAMAccountName=$username)";
        $result = ldap_search($ldap,"dc=guss,dc=ru",$filter);
        ldap_sort($ldap,$result,"sn");
        $info = ldap_get_entries($ldap, $result);
      /*  if($info[0]['thumbnailphoto'][0]!='')
        {
            $_SESSION['photo'] = $info[0]['thumbnailphoto'][0];
        }
        $_SESSION['log_on']=$_SERVER['REMOTE_ADDR'];
        $_SESSION['position']=$info[0]["title"][0];
        $_SESSION['name']=$info[0]["sn"][0]." ".$info[0]["givenname"][0];
        $_SESSION['login_ad']=$info[0]["samaccountname"][0];
        $_SESSION['department_ad']=$info[0]["department"][0];
        $_SESSION['mail']=$info[0]["mail"][0];
        $_SESSION['last_logon']=date("Y-m-d H:i:s");
        $_SESSION['session_id']=session_id();*/
        @ldap_close($ldap);

    }
    else 
    {
        unset($_SESSION);
        session_destroy();
        header("Location: /index.php");
    }

}else
{
?>
<!DOCTYPE html>
    <html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
    <!--External Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" href="/loginform.css">
     <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Internal Styles -->
	<style>
        @media (max-width: 62em) {
            .navbar-nav {
                padding-top: .425rem;
                padding-left: 0.75rem;
            }
            .navbar-nav .nav-item {
                float: none;
            }
            .navbar-brand {
                float: right;
            }
            .navbar-brand,
            .navbar-nav .nav-item {
                display: block;
            }
            .navbar-nav .nav-item + .nav-item {
                margin-left: 0;
            }
            .dropdown-menu {
                position: relative;
                float: none;
            }
        }
    </style>
    <!-- External Scripts -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    
    <!-- Internal Scripts -->
	<script type="text/javascript" src="">
	</script>

    <title>Labor accounting system</title>

	
</head>

<body>
    
    <div id="particles-js">    
    </div>
    <div class="overlay">
          <div class="auth_box">
              <h1>LAS</h1>
              <form action="#" method="POST" class="wrapper">
              <div class="input">    
                 <div><p>Login</p><input for="username" id="username" type="text" name="username"class="inp"></div>
              </div>
              <div class="input">
                 <div><p>Password</p><input id="password" type="password" name="password" class="inp"></div>
              </div>    
              <input type="submit" name="submit" class="subm_login" value="Войти">
                  </form>
        </div>
   </div>
    
<script src="/main.js"></script>   
<script src="/particles.js-master/particles.js"></script>   
</body>

</html>
<?php
}
?> 

