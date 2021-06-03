var output = document.getElementById('output')
var i = 0;
var salutaPenny = '';

while (i < 10) {
    salutaPenny += 'Penny! ';
    i++;
}

output.innerText = salutaPenny + '\n';

// Adesso proviamoci con il FOR. ------------------------

var salutaPennyConFor = '';

for (var x = 0; x < 10; x++) {
    salutaPennyConFor += 'Penny! ';
}
output.innerText += salutaPennyConFor + '\n';

// L'utente inserisce i prodotti nella lista della spesa 
// fino a 3 elementi, dopo di che visualizza la lista nell'html
var maxSpesa = 3
var listaSpesaDivs = document.getElementsByClassName('lista-spesa')  // <- ritorna un array di elementi
var listaSpesaOutput = listaSpesaDivs[0];

var listaArray = [];
var listHtml = '';

// creo la lista 
while (listaArray.length < maxSpesa) { // pusha l'ultimo elemento quando è minore di 10 ( => max 10)
    listaArray.push(prompt('Cosa compriamo?'));
}

// visualizzo la lista
for (var i = 0; i < listaArray.length; i++) {
    listHtml += '<li>' + listaArray[i] + '</li>'
}

listaSpesaOutput.innerHTML = listHtml;

// while / do-while

var num = 11;

// prima esegue, poi verifica la condizione
do {
    console.log(num);
    num++;
} while (num < 10);

var numB = 11;

console.log('Ora con il while.');

while (numB < 10) {
    console.log(numB);
    numB++;
}

