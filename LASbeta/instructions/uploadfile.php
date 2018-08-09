<?php
require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
echo $_FILES['file']['error'];
if (0 < $_FILES['file']['error']) {
    echo 'Error: ' . $_FILES['file']['error'] . '<br>';
} else {
    move_uploaded_file($_FILES['file']['tmp_name'], 'files/' . $_FILES['file']['name']); 
    echo $_FILES['file']['name'];
}

?>
