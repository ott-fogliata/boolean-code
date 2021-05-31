var x = '1';

// x = 1 -> assegnazione
// x == 1 -> comparazione
// x === 1 -> strettamente uguale

// x != 1 -> diverso da 1
// x !== 1 -> strettamente diverso da 1


var outputElement = document.getElementById('output');

if (x === 1) {
    outputElement.innerHTML = 'La x è uguale a 1';
} else {
    outputElement.innerHTML = 'La x è diversa da 1';
}


var y = 0;
var z = 1;

if (y === 1 && z === 1) {
    outputElement.innerHTML += '<br/>Y e Z sono uguali a 1';
} else if (y === 1) {
    outputElement.innerHTML += '<br/>Ho scoperto però che y è uguale a 1';
} else if (z === 1) {
    outputElement.innerHTML += '<br/>Ho scoperto però che z è uguale a 1';
} else {
    outputElement.innerHTML += '<br/>Nessuno dei due sembra essere uguale a 1';
}


var xx = 1;
var yy = 1;

if (xx === 1 || yy === 1) {
    outputElement.innerHTML += '<br/>Una delle due variabili è uguale a 1';
}


if (true) {
    outputElement.innerHTML += '<br/>Questo succederà sempre';
 
}


var codiceSconto = 'ciccio';


if (codiceSconto === 'ciccio') {
    outputElement.innerHTML += '<br/>Ti sconto il panino, zi.';

} else {
    outputElement.innerHTML += '<br/>Pagherai un botto.';
}


var ff = 10;

if (ff >= 10) {
    outputElement.innerHTML += '<br/>ff è maggiore o uguale a 10';

}


var tt = 'ciaone';

if (tt != 'pippo') {
    outputElement.innerHTML += '<br/>tt è strettamente diverso da pippo';

}

// l'utente deve inserire due parole, e scriveremo nell'html 
// solo la parola più lunga


var firstWord = prompt("Inserisci la prima parola");
var secondWord = prompt("Inserisci la seconda parola");

if (firstWord.length > secondWord.length) {
    outputElement.innerHTML += '<br/>' + firstWord;
} else if(firstWord.length === secondWord.length) {
    outputElement.innerHTML += '<br/> Le parole hanno la stessa lunghezza';
} else {
    outputElement.innerHTML += '<br/>' + secondWord;
}

// L'utente inserisce un numero, il computer scrive se il numero è pari o dispari

var number = 100;

if (number % 2 === 0) {
    outputElement.innerHTML += '<br/>PARI!';
} else {
    outputElement.innerHTML += '<br/>DISPARI!';
}