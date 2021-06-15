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

/*
for (var k in car) {
    console.log(k, car[k])
} */

// e se dovessimo semplicemente stampare tutti i passeggeri?

for (var i = 0; i < car.passengers.length; i++) {

    // per stampare tutti i nomi dei passengers
    // console.log(car.passengers[i].name)
    
    // per stampare tutte le proprietà key: value dell'oggetto
    for (var key in car.passengers[i]) {
        // i = 0; key = 'name'
        // i = 0; key = 'surname'
        // lui salta ora il for/in (è finito)
        // i = 1; key = 'name'
        // i = 1; key = 'surname'
        // ...
        console.log(key, car.passengers[i][key])
    }
    
}

