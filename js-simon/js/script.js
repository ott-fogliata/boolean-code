/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var time = 30; // in seconds

var randomNumberList = [];
while(randomNumberList.length < 5) {

  var num = randomNumber(1, 100);

  if(!randomNumberList.includes(num)) {
    randomNumberList.push(num);
  }

}

alert(randomNumberList.join(' - '));

console.log(randomNumberList);

setTimeout(function() {

  var userNumbersList = [];

  var indovinati = [];

  while(userNumbersList.length < 5) {

    var userNumber = parseInt(prompt('Inserisci il numero che ricordi'));

    // qui andrebbero un po' di check, !isNaN, 1 < x < 100, etc..
    // verifico se ha scritto un doppione?

    userNumbersList.push(userNumber);
    // se facciamo il check (indovinato) direttamente nel while
    // non abbiamo bisogno di userNumbersList, ma direttamente di var indovinati.
    // if(randomNumberList.includes(userNumber)) {
    //   indovinati.push(userNumber);
    // }

  }


  /*
   2 soluzioni

   1. (un po' meh!) metto un contatore, e lo incremento ogni volta che trovo corrispondenza tra i due array ==> posso dire solo quanti num ha indovinato, non quali!
   2. un array, in cui pusho solo gli elementi indovinati.

  */


  var indovinati = [];
  for(var x = 0; x < userNumbersList.length; x++) {
    if(randomNumberList.includes(userNumbersList[x])) {
      indovinati.push(userNumbersList[x])
    }
  }


  // punteggio
  alert('Hai indovinato ' + indovinati.length + ' numeri, e sono: ' + indovinati.join(' - '))



}, time * 1000);
