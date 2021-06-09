
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


//
function getRandomNumber(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1) + min)
    return result;
}

var random1 = getRandomNumber(5, 100);
var random2 = getRandomNumber(1, 1000);

outputElement.innerText += '\nPrimo numero random: ' + random1
outputElement.innerText += '\nSecondo numero random: ' + random2

outputElement.innerText += '\n-------------------------';

for (var x = 0; x < 10; x++) {
    var resultRandom10 = getRandomNumber(1, 1000);
    outputElement.innerText += '\n' + resultRandom10;
}

/*
Chiediamo all’utente il nome, una funziona ritornerà il suo nome con la prima lettera sempre maiuscola.
Stampate il suo nome “corretto” nell’html.
Notate bene. La funzione cercherà sempre di trasformare la prima lettera in maiuscolo anche quando questa sarà stata inserita correttamente dall’utente. E ci va bene così.
Sicuramente potrà essere utile lo slice applicato alle stringhe.
 */

function getFixName(name) {
    var fixedName = name[0].toUpperCase() + name.slice(1)
    return fixedName;
}


var userName = prompt('Inserisci il tuo nome');

outputElement.innerText += '\nIl tuo nome è ' + getFixName(userName);