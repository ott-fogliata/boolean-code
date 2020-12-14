var scelta = prompt('pari o dispari?');

var numeroScelto = parseInt(prompt('Scegli un numero da 1 a 10'));

var sceltaComputer = Math.floor(Math.random() * 10) +1;

var risultato = numeroScelto + sceltaComputer;
console.log('La somma è:' + risultato)

if (risultato % 2 === 0 && scelta === 'pari'){
  alert('Bravo hai vinto!')
}

if (risultato % 2 !== 0 && scelta === 'pari'){
  alert('Hai perso')
}

if (risultato % 2 !== 0 && scelta === 'dispari'){
  alert('Hai vinto')
}

if (risultato % 2 === 0 && scelta === 'dispari'){
  alert('Hai perso')
}
