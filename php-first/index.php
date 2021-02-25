<?php

  echo "Mio programma in PHP";  // "calcolato" dal server

?>

scritta in html classico con un bel <b>bold</b>  <!-- html puro -->

<br/>
<br/>

<?php

$variableContent = 'Questo è il contenuto di una variabile in PHP';

echo $variableContent;

?>

<hr>

<?php

  $name = 'Michele';


?>


<h1>
  Ciao mi chiamo <?php echo $name; ?>
</h1>

<h1>
  Ciao mi chiamo <?= $name; ?> (ma con un altro formato)
</h1>


<?php
  $stringa = "questa è una stringa";

  $intero = 1;

  $booleano = false;  // oppure true
 ?>

<hr>

<?php

var_dump($_GET);
// http://localhost/php-first/index.php?name=giacomo
//$_GET è un array con tutti i parametri inviati in GET.
//array(1) { ["name"]=> string(7) "giacomo" }
?>

<br/><br/>

Ciao <?php echo $_GET["name"];
// dal $_GET vai a prendere il valore di name
?>!





<?php


$text = "Questo è un testo iniziale pieno di brutte parole.";

$text = str_replace('pieno', '***', $text);

echo $text;
