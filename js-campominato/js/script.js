/*
Descrizione

Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

*/

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function isUserInputValid(inputString) {
  if(isNaN(inputString)) {
    return [false, 'non è un numero'];
  }
  if(inputString > 100 || inputString <= 0) {
    return false;
  }
  return true;
}

function winning(sceltaUtente, numeriBomba) {
  if(numeriBomba.includes(sceltaUtente)) {
    return false;
  }
  return true;
}

var listaBombe = [];

while(listaBombe.length < 16) {
    var generated = randomNumber(1, 100);
    if(listaBombe.includes(generated) === false) {
      listaBombe.push(generated);
    }
}

var listaSceltaUtente = [];
var sceltaUtente;


while(winning(sceltaUtente, listaBombe) &&  listaSceltaUtente.length < 84) {

  sceltaUtente = parseInt(prompt('Inserisci numero'));

  if(isUserInputValid(sceltaUtente)) {

    if(listaSceltaUtente.includes(sceltaUtente) === true) {
      alert('Hai già inserito questo numero');
    } else {

      if(!winning(sceltaUtente, listaBombe)) {
        alert('hai perso!')
      }

      listaSceltaUtente.push(sceltaUtente);

      if(listaSceltaUtente.length === 84) {
        alert('hai vinto!')
      }
    }
  } else {
    alert('Per favore inserisci un numero da 1 a 100');
  }
}

alert('Il tuo punteggio è: ' + listaSceltaUtente.length)
