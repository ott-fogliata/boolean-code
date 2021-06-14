
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var computerNums = [];

while (computerNums.length < 16) {
    // generiamo numero random
    var randomNum = getRandomNumber(1, 100);
    // verifichiamo che non sia duplicato
    if (!computerNums.includes(randomNum)) {
        // pushamo nell'array (se non è duplicato)
        computerNums.push(randomNum);
    }
}

console.log('[COMPUTER] Numeri generati dal Computer', computerNums);

var userNums = [];  // la lunghezza di questo array sarà il nostro score.
var gameOver = false; // sconfitta.

while (userNums.length < 84) {
    var selectedNum = parseInt(prompt("Inserisci un numero da 1 a 100"));
    
    // todo: e se inserisce un numero maggiore di 100 o minore di 1?
    // todo e se inserice un NaN?

    if (!userNums.includes(selectedNum)) {

        if (computerNums.includes(selectedNum)) {
            alert('Mina beccata!')
            gameOver = true;
            break;
        } else {
            userNums.push(selectedNum);
            console.log('[USER] Numeri inseriti dall\'utente', userNums);
        }

    } else {
        alert('Occhio, è un numero duplicato. Riprova.')
    }
}

if (!gameOver) {
    alert('HAI VINTO!')
} else {
    alert('HAI PERSO!');
}

alert('Il tuo punteggio è ' + userNums.length)