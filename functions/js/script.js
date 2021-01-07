// function stupida() {
//   alert('sono stupida');
//   console.log('Sì, sono una funzione elementare');
// }
//
// stupida();
// loggare su quale pulsante l'utente ha cliccato
function logClick(buttonName) {
  console.log('hai cliccato il pulsante ' + buttonName);
  // non ha un return, perché il nostro obiettivo è fare console.log
}
var buttonA = document.getElementById('button-a');
var buttonB = document.getElementById('button-b');

// callback
buttonA.addEventListener('click', function(){
  logClick('A');
});

buttonB.addEventListener('click', function(){
  logClick('B');
});


// Genero 10 numeri random utilizzando una funzione

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function isPari(num) {
  // verifichiamo che sia numerico, altrimenti errore (alert? console.log?)
  num = parseInt(num);
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(randomNumber(1, 10));

var insertNumberButton =  document.getElementById('insert-number');
insertNumberButton.addEventListener('click', function(){

  var scelta = prompt('Inserisci un numero');

  if(isPari(scelta)) {
    console.log('è pari');
  } else {
    console.log('è dispari');
  }

});
