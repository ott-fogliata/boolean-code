var somma = 0;

var x = 0;

do {
  var n = prompt('Inserisci un numero');
  somma += parseInt(n);
  x++;
} while(x < 5)

console.log('La tua somma con il while è ' + somma);


// var x = 0;
// while(x < 5) {
//   var n = prompt('Inserisci un numero');
//   somma += parseInt(n);
//   x++;
// }
