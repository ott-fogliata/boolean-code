
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeUtente = prompt('Qual è il tuo cognome?')
var listaHtml = document.getElementById('lista-cognomi');
var outputPosition = document.getElementById('output-position')
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1).toLowerCase();

// aggiungo il nuovo cognome nella listaHtml
listaCognomi.push(cognomeUtente);

// ordino alfabeticamente la mia lista di cognomi
listaCognomi.sort();
console.log(listaCognomi);

for (var i = 0; i < listaCognomi.length; i++) {
  listaHtml.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

var userIndex = listaCognomi.indexOf(cognomeUtente) + 1;
outputPosition.append(userIndex);
// outputPosition.innerHTML += userIndex;
