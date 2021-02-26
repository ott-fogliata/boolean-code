<script>

var arr = [9, 2, 3, 7, 3];
console.log(arr[0])


var person = {
  name: 'Luigi',
  email: 'email@email.it'
}

console.log(person.name)
console.log(person["name"])

</script>


<?php

$arr = [4, 5, 9, 7, 1];
echo $arr[0];

echo "<br/>";

// array associativi
$person = [
  // key  => value
  "name" => "Luigi",
  "email" => "email@email.it"
];

$person["surname"] = "Cognome";

$generica = true;

echo $person["name"] . '<br/>' . $person["email"] . '<br/><br/>';

$peopleList = [];

array_push($peopleList, $person, $generica);

var_dump($peopleList); ?>

<br/>
<br/>
<br/>

<?php

// cerchiamo il nome Luigi

$search = array_search('Luigi', $person);
echo $search;
echo "<br/><br/>";
//var_dump($search);

$topTen = [
  'Paolo',
  'Pippo Baudo',
  'Gino'
];

$posizioneGino = array_search('Gino', $topTen);


// questo non funziona perché è una stringa con un intero concatenat;
// echo se sta stampando una stringa si aspetta che il successivo sia una stringa
// echo 'La posizione di Gino è: ' . $posizioneGino + 1;

echo 'La posizione di Gino è: ' . strval($posizioneGino + 1);

?>

<br/>
<br/>
<br/>

<?php
// nuovo modo ===============================================================

$arr = [1, 2, 3];

//array_push($arr, 4);
$arr[] = 4;

var_dump($arr);

?>

<br/>
<br/>

<?php

echo $arr . '<br/>';
print_r($arr);

?>
