/*
    Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/



// facciamo un prompt e prendiamo la parola inserita dall'utente
// creo funzione per capire se palindromo -> 
//      1. creo il reverse della parola (come si fa?)
//      2. confrontare la parola inserita dall'utente con il suo reverse
//      se le due parole sono uguali => (true) è palindromo, altrimenti NO => (false)

function isPalindroma(word) { // ritorna un booleano, true se palindromo.
    // giriamo la parola
    // creiamo quindi un for che legga una stringa dall'ultimo carattere fino al primo.
    // => così facendo potremo riscrivere la parola in ordine inverso di caratteri.

    var reverseWord = '';

    // word.length - 1 => l'ultima posizione di un array 
    // oppure l'ultimo carattere di una stringa
    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    console.log(reverseWord);

    // adesso controlliamo che word sia uguale a reverseWord per dire
    // se è palindroma o meno la parola nell'argomento.
    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
}

var userWord = prompt('Inserisci una parola');

var palindromaHtmlElement = document.getElementsByClassName('result-palindroma')[0];

if (isPalindroma(userWord)) {
    palindromaHtmlElement.innerHTML = 'La parola è palindroma';
} else {
    palindromaHtmlElement.innerHTML = 'La parola NON è palindroma';
}


/*
    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

// problema limite numero inserito, cosa faccio avviso l'utente dell'errore? ++++++

/*
    1. chiediamo "pari o dispari?" all'utente
    2. prendiamo il numero dell'utente
    3. generiamo un numero random da 1 a 5 => potremmo fare anche qui una funzione
    4. sommiamo il numero dell'utente con il numero appena generato
    5. verifichiamo che il TOTALE sia pari o dispari. => qui potrei scrivere una funzione.

*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPari(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

var pariDispariScelta = prompt('Scegli, pari o dispari?').toLowerCase();
// e se l'utente inserisce un'altra parola? tipo pippo? che succede? PROBLEMA

while (pariDispariScelta !== 'pari' && pariDispariScelta !== 'dispari') {
    alert('Attenzione! devi inserire o pari o dispari')
    pariDispariScelta = prompt('Scegli, pari o dispari?').toLowerCase();    
}

var numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
while (isNaN(numberUser) || numberUser < 1 || numberUser > 5) {
    alert('Attenzione! devi inserire un numero da 1 a 5')
    numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

var numberComputer = getRandomNumber(1, 5);

var total = numberUser + numberComputer;

console.log('Il totale è', total)

var pariEDispariHtmlElement = document.getElementsByClassName('result-pariedispari')[0];

// verifichiamo che la somma sia pari o dispari,  => questa è una funzione
// confrontandoci con quanto scelto dall'utente => questo lo facciamo "esternamente"


// quando vincerà l'utente?
// se il numero è pari e l'utente ha scelto pari ha vinto
// se il numero è dispari e l'utente ha scelto dispari ha vinto
// altrimenti ha perso.

// scriviamolo meglio.
// se la funzione ritorna true e l'utente ha scelto pari ha vinto
// se la funzione ritorna false e l'utente ha scelto dispari ha vinto
// altrimenti ha perso => vince il computer.

// scriviamolo in codice:
if ((isPari(total) === true && pariDispariScelta === 'pari')
    || (isPari(total) === false && pariDispariScelta === 'dispari')) {
    pariEDispariHtmlElement.innerHTML = "Hai vinto";
} else {
    pariEDispariHtmlElement.innerHTML = "Hai perso / Ha vinto il computer";
}
