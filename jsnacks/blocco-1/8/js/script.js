var number = prompt('Inserisci un numero di 4 cifre');  // torna una string
var somma = 0;

if(number.length !== 4) {
  alert('Ti prego di inserire un numero di sole 4 cifre')
} else {
  for(var x = 0; x < 4; x++) {
    somma += parseInt(number[x]) // ad ogni step, ritorna il numero (in stringa) successivo.
  }
  console.log('La tua somma è ' + somma);
}
