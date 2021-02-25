<?php

/*
per lanciare questo script php
aprire il terminale e digitare:
php cli.php pippo

(pippo è l'argomento in posizione 1 dell'array $argv)
*/

echo "sono da terminale \r\n\r\n";

//var_dump($argv);

echo "Ciao " . $argv[1] . "!";
