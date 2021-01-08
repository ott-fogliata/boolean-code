function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function isPari(num) {
  num = parseInt(num);
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function winner(num, scelta) {
  // if ((isPari(num) && scelta.toLowerCase() === 'pari') ||
  //  (!isPari(num) && scelta.toLowerCase() === 'dispari')) {
  //    return true;
  //  } else {
  //    return false;
  //  }
  // oppure:
  return (isPari(num) && scelta.toLowerCase() === 'pari') ||
    (!isPari(num) && scelta.toLowerCase() === 'dispari')
}

var pariDispariScelta = prompt('Inserisci pari o dispari');
var numeroScelto = parseInt(prompt('Inserisci un numero da 1 a 5'));

var computerRandomNumber = randomNumber(1, 5);
alert('Il computer ha scelto ' + computerRandomNumber);

var somma = numeroScelto + computerRandomNumber;

if(winner(somma, pariDispariScelta)) {
  alert('hai vinto!')
} else {
  alert('hai perso!');
}
