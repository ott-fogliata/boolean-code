
var outputElement = document.getElementById('output')

// la dichiarazione di una funzione
function avvisaUtente() { // senza argomento
    alert('Ciao utente, ti sto avvisando');
}


avvisaUtente(); // l'esecuzione della funzione

// dichiarazione funzione CON ARGOMENTI.
function somma(a, b) {
    console.log(a + b);
}

somma(2, 4);

somma(3, 5);

var totaleDaSomma = somma(3, 5);
console.log('valore totaleDaSomma', totaleDaSomma);
// ^^ sarà undefined, perché non c'è i return

// dichiarazione funzione con argomenti e RETURN
// la funzione farà solo la somma internamente
// non visualizzerà nessun output a schermo.
// il totale ritornerà a "chi" ha chiamato questa 
// funzione.

function add(num1, num2) {
    var result = num1 + num2;
    return result;
    console.log('CIAONE'); // non sarà mai eseguito perché dopo un return
}


var totale = add(2, 6);



outputElement.innerText = 'Il totale della funzione con return è: ' + totale;


// -------------------------------------------------------------
// creare una funzione che sappia dirci se un numero è pari
// il return sarà TRUE se il numero è pari,
// altrimenti (dispari) sarà FALSE --> un booleano

function isPari(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

var userNum = parseInt(prompt('Inserisci un numero'))

// comunichiamo all'utente se il numero è pari

/*
var resultPari = isPari(userNum);

if (resultPari) {
    outputElement.innerText += "\n Il numero è pari";
}

*/

if (isPari(userNum)) {
    outputElement.innerText += "\nIl numero è pari";
} else {
    outputElement.innerText += "\nIl numero è dispari";
}