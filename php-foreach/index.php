<?php

$animals = [
  'cat',
  'dog',
  'elephant'
];

foreach($animals as $animal) {
  echo $animal . '<br/>';
}
?>

<br/>
<br/>
<br/>

<?php
// -----------------------------------------------------------------------

$cityData = [
  'name' => 'Rome',
  'population' => '2050000',
  'region' => 'Lazio'
];

foreach($cityData as $key => $data) {
  echo $key . ': '. $data . '<br/>';
}

?>

<br/>
<br/>
<br/>

<?php
// -----------------------------------------------------------------------

$cityData = [
  'Rome' => [
    'population' => '2050000',
    'region' => 'Lazio'
  ],
  'Taranto' => [
    'population' => '2050000',
    'region' => 'Puglia'
  ]
];

foreach($cityData as $key => $data) {
  echo $key . ': ';

  foreach($data as $k => $v) {
    echo $k . ' => ' . $v . ', ';
  }

  echo '<br/>';

}


/*
Se nel ciclo incontro una città di nome "Rome", l'applicazione scriverà
"Rome: io abito qui".
*/

foreach($cityData as $cityName => $cityDetails) {
  if($cityName === "Rome") {
    echo "Rome: io abito qui.";
  }
}

?>


<br/>
<br/>
<br/>


<?php
/*
Abbiamo una lista di città nel mondo, dobbiamo salvare in un nuovo array
solo le città italiane.
*/

$worldCities = [
  'London' => [
    'country' => 'UK'
  ],
  'New York' => [
    'country' => 'US'
  ],
  'Rome' => [
    'country' => 'IT'
  ],
  'Berlin' => [
    'country' => 'DE'
  ],
  'Alberobello' => [
    'country' => 'IT'
  ]
];


$italianCities = [];

// soluzione super-iper-pulita
foreach($worldCities as $cityName => $cityDetails) {
  if($cityDetails['country'] === 'IT') {
    $italianCities[] = $cityName;
  }
}

print_r($italianCities);

// reset
$italianCities = [];
echo "<br/><br/>";
// -------------------

foreach($worldCities as $cityName => $cityDetails) {

  // se è diverso da IT, allora salta al prossimo step.
  if($cityDetails['country'] !== 'IT') {
    continue;
  }
  // se non ha fatto il salto al prossimo step allora
  // si troverà a fare il push
  $italianCities[] = $cityName;

  // oppure:
  /*
  'Alberobello' => [
    'country' => 'IT'
  ]
  */
  /* $italianCities[] = [
    $cityName => $cityDetails
  ];
  */
}

print_r($italianCities);






?>
