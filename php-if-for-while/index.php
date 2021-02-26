<?php
// if e comparazioni =============================================

$x = 10;

/*
Se il x è maggiore di 10 allora yes
altrimenti
  se x è uguale a 10 allora scrivo "è uguale"
  se è minore allora scrivo no
*/

if ($x > 10) {
  echo "yes";
} elseif ($x === 10) {
  echo "è uguale";
} else {
  echo "no";
} ?>

<br/>

<?php
// operazioni matematiche ========================================


// $x = $x + 2;
$x += 2;

// $x = $x / 2;
$x /= 2;

echo $x;

?>

<br/>
<br/>

<?php
// proviamo a concatenare una stringa ============================

$name = 'Gianpaolo';
$s = "Ciao";

// $s = $s . ' ' . $name . '!';
$s .= ' ' . $name . '!';

echo $s;


?>


<?php
// random ========================================================
$number = rand(1, 100);
echo $number;


?>
