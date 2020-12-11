var risposta = prompt('Come ti chiami?');
console.log('Il tizio si chiama: ' + risposta);
// document.writeln(risposta);
var outputContainer = document.getElementById('output');
outputContainer.innerText = risposta;
// funzione per "appendere", aggiungere, alla variabile outputContainer il suo argomento.
outputContainer.append('\nquesto è un append');  // diverso da innerHTML, perché lo "aggiunge".
//^variabile    ^funzione        ^argomento/parametro
