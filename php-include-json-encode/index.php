<?php

include 'partials/template/header.php';
require_once 'functions.php';


echo "<hr>";

$domanda = "Questa è una domanda?";

if(isAQuestion($domanda)) {
  echo "è una domanda";
}
