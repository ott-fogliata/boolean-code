
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


// ------------------------------------------------------------------
// Tre checkbox, ciascuno di loro ha come valore (value)
// un colore. Se clicco sul pulsante "Create", crea N riquadri
// per quante sono le checkbox flaggate, 
// con lo stesso colore delle checkbox selezionate.


var createButton = document.getElementsByClassName('create-boxes')[0];
var outputBoxes = document.getElementById('boxes-container');

createButton.addEventListener('click', function () {
    var checkboxes = document.getElementsByClassName('check-colors');
    for (var x = 0; x < checkboxes.length; x++) {

        // verifichiamo che la checkbox sia stata checkata 
        if (checkboxes[x].checked) {
            // console.log(checkboxes[x]);
            console.log(checkboxes[x].value);
            
            outputBoxes.innerHTML += '<div class="box ' + checkboxes[x].value + '">A</div>';

        }

    }
})

// -----------------
// al click su somma-button, il js somma 
// tutti i numeri selezionati

var createSum = document.getElementById('somma-button');

var resultSumElement = document.getElementById('result-sum');

createSum.addEventListener('click', function () {
    
    var resultSumInt = 0;

    var checkNum = document.getElementsByClassName('somma-check');

    for (var i = 0; i < checkNum.length; i++) {

        if (checkNum[i].checked) {
            
            resultSumInt += parseInt(checkNum[i].value)

        }

    }

    resultSumElement.innerHTML = 'Il risultato è: ' + resultSumInt;

})