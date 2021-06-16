/*

Costruiamo un array di tre giocatori di basket. 

Ogni giocatore avrà le seguenti proprietà:
nome
cognome
anno
punteggio

Calcolare il punteggio medio dei tre giocatori.

*/


var players = [
    {
        nome: 'Pippo',
        cognome: 'Baudo',
        anno: 1800,
        punteggio: 7
    },
    {
        nome: 'Gianni',
        cognome: 'Morandi',
        anno: 1900,
        punteggio: 9
    },
    {
        nome: 'Lino',
        cognome: 'Banfi',
        anno: 2000,
        punteggio: 3
    }
]

// dobbiamo sommare i punteggi di ciascuno, e dividere per il numero
// di giocatori.
var sum = 0;

for (var i = 0; i < players.length; i++) {
    sum += players[i].punteggio;
}

var avg = sum / players.length;

console.log(avg);