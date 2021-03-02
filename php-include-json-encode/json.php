<?php


$data = [
  'Pippo Baudo' => [
    'age' => 82,
    'city' => 'alberobello'
  ],
  'Pluto' => [
    'age' => 20,
    'city' => 'latina'
  ]
];

header('Content-Type: application/json');

$json = json_encode($data);
echo $json;
