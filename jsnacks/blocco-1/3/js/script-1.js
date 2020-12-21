// chiedo 5 volte il numero all'utente
// inserisco ogni numero in un array
var listaN = [];
var n1 = prompt('Inserisci numero');
listaN.push(parseInt(n1));
var n2 = prompt('Inserisci numero');
listaN.push(parseInt(n2));
var n3 = prompt('Inserisci numero');
listaN.push(parseInt(n3));
var n4 = prompt('Inserisci numero');
listaN.push(parseInt(n4));
var n5 = prompt('Inserisci numero');
listaN.push(parseInt(n5));

var somma = 0;

// for nell'array e sommo
for(var x = 0; x < listaN.length; x++) {
  somma += listaN[x];
}

// stampo la somma
console.log('La tua somma è ' + somma)
