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


var cognome = prompt(' Ciao ' + nome + '. Quale è il tuo cognome?');
console.log('Il suo cognome è: ' + cognome);
var colorePref = prompt('Bene' + nome + cognome '. Quale è il tuo colore preferito?');
console.log('Il suo colore preferito è: ' + colorePref);
var eta = prompt('Perfetto' + nome ', ultima domanda. Quanti anni hai?');
console.log('Ha:' + eta ' anni');
var annoCorrente = new Date().getFullYear();
var annoDiNascita = annoCorrente - age;
outputContainer.append('\nla tua password è: ' + nome + cognome + colorePref + annoDiNascita);
