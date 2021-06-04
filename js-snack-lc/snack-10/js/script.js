/*

Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

*/

// for

var result = 0;

for (var i = 1; i <= 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    result += userNumber;
}

console.log('Somma For: ' + result);

console.log(i) // è 5.


// while
var sum = 0;

var x = 1;

while (x <= 5) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    sum += userNumber;
    x++;
}

console.log('Somma While: ' + sum);
