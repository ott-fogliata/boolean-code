var iscrittiPartita = ['Luca', 'Marco', 'Paolo'];

var primoIscritto = iscrittiPartita[0];

console.log('Il primo iscritto è ' + primoIscritto);

var numeroIscritti = iscrittiPartita.length;

console.log('Il numero di iscritto è ' + numeroIscritti);

var posizioneUltimoIscritto = iscrittiPartita.length - 1;
var ultimoIscritto = iscrittiPartita[posizioneUltimoIscritto]

console.log("L'ultimo iscritto è " + ultimoIscritto)

iscrittiPartita.push('Pippo');

var posizioneAggiornata = iscrittiPartita.length - 1;
ultimoIscritto = iscrittiPartita[posizioneAggiornata];
console.log("L'ultimo iscritto è " + ultimoIscritto)

var x = 0;
x++;
// x += 1; 
// x = x + 1;
console.log(x);

// ------------------------------------------------------------
var registrati = ['Pippo', 'Luca', 'Paolo', 'Marco', 'Maria', 'Gianni'];

/*
var index = 0;

//mostra tutti gli iscritti

console.log(registrati[index]);

index++;
console.log(registrati[index]);

index++;
console.log(registrati[index]);

index++;
console.log(registrati[index]);

index++;
console.log(registrati[index]);

index++;
console.log(registrati[index]);
*/
// i deve partire da 0, incrementarsi di volta in volta, 
// fino all'ultimo elemento

var output = document.getElementById('registrati-list');

var htmlString = '<ul>';

for (var i = 0; i < registrati.length; i++) {
    // console.log(registrati[i]);
    htmlString += '<li>' + registrati[i] + '</li>';
}

htmlString += '</ul>';

output.innerHTML = htmlString;

// contiamo fino a 100
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// esiste anna nell'array?

var check = false; // deve diventare true solo se trovo anna.

for (var i = 0; i < registrati.length; i++) {
    if (registrati[i] === 'Anna') {
        check = true;
        break; // esci dal ciclo.
    }
}

if (check) {
    output.innerHTML += 'Ho trovato Anna!';
} else {
    output.innerHTML += 'Non ho trovato Anna!';
}

