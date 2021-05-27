// document.writeln("Hello World!");
// document.writeln("CIAONE");
// console.log('CIAO');

 document.getElementById('myID').innerHTML = 'Benvenuto!';


var x; // dichiarazione 
console.log(x); // undefined

x = 10;
console.log(x); // 10

var type = typeof x;
console.log(type);

var y = 'lorem ipsum';
console.log(typeof y);


// -------------------------------------------

// simile all'alert('CIAO');

var nomeUtente = prompt('Ciao, come ti chiami?');

document.getElementById('nome').innerHTML = "Ciao " + nomeUtente;

// -----------------------------------------------------------------
// chiediamo l'anno di nascita all'utente e calcoliamo i suoi anni

var year = prompt('Inserisci la tua data di nascita');
var age = 2021 - parseInt(year);

document.getElementById('age-result').innerHTML = "La tua età è: " + age;


// -----------------------------------------------------------------
