/**
 * Abbiamo una macchina e zero passeggeri.
 * chiediamo all'utente dell'applicazione di aggiungere 3 passeggeri.
 *  ---> dovremmo fare un while? con dei prompt? dove chiedo i dati?
 * stampiamo le caratteristiche dell'automobile e la lista dei passeggeri in un formato "più pulito", quasi a tabella.
 */


var car = {
    model: 'Tesla Plaid S',
    passengers: []
}


while (car.passengers.length < 2) {
    
    var passengerName = prompt('Inserisci il nome del passeggero');
    var passengerSurname = prompt('Inserisci il cognome del passeggero');

    // lo facciamo in un modo un po' "anonimo", per evitare dopo
    // di sovrascrivere lo stesso oggetto.
    car.passengers.push({
        name: passengerName,
        surname: passengerSurname
    });

}

console.log(car);


for (var k in car) {
    console.log(k, car[k])
}

var ulElement = document.getElementById('car');

// ulElement.innerHTML = '<li>model: </li>'
var htmlString = '';

for (var k in car) {  // ciclo nell'oggetto

    if (k === 'passengers') { // qui scelgo l'array
        htmlString += '<li>' + k + ': ';

        for (var x = 0; x < car[k].length; x++) { // ciclo l'array dei passengers
            htmlString += car[k][x]['name'] + ', ';
        }

        htmlString += '</li>';

    } else {
        htmlString += '<li>' + k + ': ' + car[k] + '</li>'
    }
}

ulElement.innerHTML = htmlString;

// e se dovessimo semplicemente stampare tutti i passeggeri?


var passengersHtmlElement = document.getElementById('pass');

for (var i = 0; i < car.passengers.length; i++) {

    // per stampare tutti i nomi dei passengers
    // console.log(car.passengers[i].name)
    
    // per stampare tutte le proprietà key: value dell'oggetto
    for (var key in car.passengers[i]) {
        console.log(key, car.passengers[i][key])
    }
    
}

