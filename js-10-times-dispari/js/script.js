// il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

/*

var result = 0;

var num1 = parseInt(prompt('Inserisci un numero'));
result += num1;

var num2 = parseInt(prompt('Inserisci un numero'));
result += num2;

var num3 = parseInt(prompt('Inserisci un numero'));
result += num3;

...

*/

var result = 0;

for (var x = 1; x <= 10; x++) {
    var num = parseInt(prompt('Inserisci un numero'));
    result += num;
}

document.getElementById('result').innerHTML = result;



