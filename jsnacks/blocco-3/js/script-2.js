var somma = 0;

for(var x = 0; x < 5; x++) {
  var n = prompt('Inserisci un numero');
  somma += parseInt(n);
}

console.log('La tua somma è ' + somma)
