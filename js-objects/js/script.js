
var studente = {
    // chiave : valore
    'nome': 'Pippo',  // <- proprietà
    'cognome': 'Baudo',
    'anni': '80',
    'vivo': true
}


console.log(studente);

// potrei anche evitare gli apici per le chiavi?
// come mai posso richiamare una chiave anche con le [] ?


var studenteString = 'Pippo Baudo 80 anni'; // ma questo è un dato "non strutturato"
// come faccio da qui a recuperare la sua età?

var studenteInt = 80;

var studenteList = ['Pippo', 'Baudo', '80'];
// ma non è detto che gli anni siano sempre in 3 posizione! 
// anche questo NON è un dato strutturato.

// Il dato STRUTTURATO è possibile solo con l'oggetto javascript.

// esempio di un utente di una ipotetica piattaforma online
var user = {
    name: 'Otto',
    username: 'otto.otto',
    "last-login": '2021-06-01',
    pic: 'image.jpg',
}

// le key degli oggetti devono contenere lettere e possono contenere
// numeri dentro o alla fine, mai all'inizio.
// l'unico simbolo permesso è l'underscore.
// ALTRIMENTI?
// uso gli apici e recupero con le parentesi quadre.


// document as object

var exampleElement = document.getElementById('example');

// exampleElement è un oggetto.
/*
    exampleElement = {
        innerHTML: 'TEST',
        ...
    }

*/
exampleElement.innerHTML = 'ciao';