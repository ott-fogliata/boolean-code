
var element = document.getElementById('button');

// mettiamoci in ascolto dell'evento click

element.addEventListener('click', function () {
    element.style.color = 'red';
});

// --------------------------------------------------
// al click su "random-number", il computer genera un numero
// random da 1 a 6 (lancio di dado) e scrive il risultato
// nell'html

var randomButton = document.getElementById('random-number');

randomButton.addEventListener('click', function () {
    var numRandom = Math.floor(Math.random() * 6) + 1;
    var resultOutput = document.getElementById('result-number');
    resultOutput.innerHTML = 'Il numero è: ' + numRandom;
});


// ------------------------------------------------

// abbiamo 3 elementi, con la stessa classe. 
// Al click su ciascun elemento, solo quell'elemento lì 
// diventa rosso.

var clickButtons = document.getElementsByClassName('click-button');

console.log(clickButtons);

for (var i = 0; i < clickButtons.length; i++) {

    clickButtons[i].addEventListener('click', function () {
        // this è l'elemento che abbiamo appena cliccato
        this.style.color = 'red';
    });
}