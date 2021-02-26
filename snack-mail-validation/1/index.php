<?php
$email = $_GET['email'];

$chiocciola = '@';

$dot = '.';

$response = '';

if(strpos($email,$chiocciola) !== false && strpos($email, $dot) !== false){
   $response = 'ok';
}else{
  $response = 'ko';
}



?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Snack Email php</title>
  </head>
  <body>
    <div class="">
      Il risultato è <?php echo $response ?>
    </div>
  </body>
</html>
