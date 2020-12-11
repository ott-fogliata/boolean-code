var risposta = prompt('Come ti chiami?');
console.log('Il tizio si chiama: ' + risposta);
// document.writeln(risposta);
var outputContainer = document.getElementById('output');
outputContainer.innerText = 'ciao ' + risposta;
// funzione per "appendere", aggiungere, alla variabile outputContainer il suo argomento.
outputContainer.append('\nquesto è un append');  // diverso da innerHTML, perché lo "aggiunge".
//^variabile    ^funzione        ^argomento/parametro
var age = prompt(' Ciao ' + risposta + '. Quanti anni hai?');
console.log('Il tizio ha: ' + age + ' anni');
var annoCorrente = new Date().getFullYear();
var annoDiNascita = annoCorrente - age;
outputContainer.append('\nla tua data di nascita è ' + annoDiNascita);
