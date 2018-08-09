<?php
      require('../rb/rb.php');
      R::setup('mysql:host=10.78.5.144;dbname=las','root','');
      R::freeze(false);
      $user=R::findOne('employees',"`name` = ?",array($_GET['selectuser']));
      $input_orders=R::findAll('input_orders',array('u_id' => $user->id ));
      var_dump($input_orders);

?>