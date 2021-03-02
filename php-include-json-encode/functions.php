<?php
// creiamo una funzione, che data una stringa, ritorna true se contiene
// il punto interrogativo. Quindi una funzione capace di comprendere
// se l'input è una domanda.


// function isAQuestion($inputText) {
//   if(strpos($inputText, "?") !== false) {
//     return true;
//   }
//   return false;
// }

function isAQuestion(string $inputText): bool
{
  return strpos($inputText, "?") !== false;
}
















?>
