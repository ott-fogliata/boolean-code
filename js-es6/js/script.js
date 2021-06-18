

ciao = 'ciaone';

var ciao;

// hoisting di js: legge prima le dichiarazione di variabili
// o funzioni, poi eseguirà il resto del codice top-down

let pippo;
pippo = 1;

// e non così:
// pippo = 1
// let pippo;

// naturalmente posso sia dichiararlo che assegnarli un valore
// let pippo = 1;


// ogni parantesi graffa uno scope, quando usiamo let e const.
for (let x = 0; x < 3; x++) {
    let ciao;
    ciao = 1;
    console.log(ciao)
}

var x = 1;
if (x === 1) {
    let pippo;
}


// ----

	
var variable = 'pippo';
let secondVariable = 10;
const ConstantVariable = 'constance';
 
function myFunction(params) {
 //Scope
 variable = 'pluto';
 secondVariable = 15;
 constantVariable = 'paperino';
//Uncaught TypeError: Assignment to constant variable.
}
 
myFunction();
console.log(variable); //pluto
console.log(secondVariable); //15

function myFunction2(params) {
    var variable = 'ciccio';
    let secondVariable = 22;
    const constantVariable = 'altro';
    console.log(secondVariable);
}

myFunction2();
console.log(variable); 
console.log(secondVariable); 
console.log(constantVariable);

if (true) {
    var variable = 'ciccio';
    let secondVariable = 22;
    const constantVariable = 'altro';
}

console.log(variable); 
console.log(secondVariable); 
console.log(constantVariable);



let string = `Ciao ${variable}! <br/>`;
// let altraString = 'Ciao ' + variable + '!'
console.log(string);

const oggetto = {
    name: 'pippo',
    surname: 'baudo',
    age: 80
}

// in una riga sola, prendo queste proprietà 
// e le inserisco in altrattante variabili
const { name, surname, age } = oggetto;

console.log(name);
console.log(surname);
console.log(age);


const buttonHtml = document.getElementById('button');

buttonHtml.addEventListener('click', function () {
    console.log(this);
});

// es6
/*
buttonHtml.addEventListener('click', () => {
    alert('ciao!');
})
*/

// visto che nella funzione c'è un'unica riga, posso non mettere le graffe.
buttonHtml.addEventListener('click', () => console.log(this));


let esegui = function () {
    console.log('ESEGUO FUNZIONE esegui();');
}

// function esegui() {
// ...
// } 

esegui();


let altraFunzione = () => {
    return 'ciaone';
}

console.log(altraFunzione());

let altraFunzioneUltima = () => 'pippo baudo';

console.log(altraFunzioneUltima());

let somma = (a, b) => a + b;

const risultato = somma(1, 1);
console.log(risultato);


// ------------


// creiamo un array di oggetti, ogni oggetto è uno studente, con nome, cognome, età.
// dobbiamo stampare a schermo lo studente più grande.

// prima in es5 e poi in es6, con il destructuring e template literal

/*
var studentsArray = [
    {
        nome: 'Maccio',
        cognome: 'Capatonda',
        age: 40
    },
    {
        nome: 'Gino',
        cognome: 'Paoli',
        age: 18
    },
    {
        nome: 'Pippo',
        cognome: 'Baudo',
        age: 80
    }
];

var lastOldStudent;  // qui metterò l'oggetto studente
var lastAgeOldStudent = 0; // qui metterò solo l'età dello studente più anziano mai visto

for (var x = 0; x < studentsArray.length; x++) {

    var thisAge = studentsArray[x].age;
    if (thisAge > lastAgeOldStudent) {
        lastOldStudent = studentsArray[x];
        lastAgeOldStudent = thisAge;
    }

    // 1. 18 > 0, sì => salva gino paoli in lastOldStudent e salva anche 18 in lastAgeOldStudent
    // 2. 80 > 18, sì => salva pippo baudo in lastOldStudent e salva anche 80 in lastAgeOldStudent
    // 3. 40 > 80, no => non salva nulla.

}


console.log(lastOldStudent);
*/


const studentsArray = [
    {
        nome: 'Maccio',
        cognome: 'Capatonda',
        age: 40
    },
    {
        nome: 'Gino',
        cognome: 'Paoli',
        age: 18
    },
    {
        nome: 'Pippo',
        cognome: 'Baudo',
        age: 80
    }
];

let lastOldStudent;  // qui metterò l'oggetto studente
let lastAgeOldStudent = 0; // qui metterò solo l'età dello studente più anziano mai visto


for (let x = 0; x < studentsArray.length; x++) {

    const { age } = studentsArray[x];
    
    if (age > lastAgeOldStudent) {
        lastOldStudent = studentsArray[x];
        lastAgeOldStudent = age;
    }

    // 1. 18 > 0, sì => salva gino paoli in lastOldStudent e salva anche 18 in lastAgeOldStudent
    // 2. 80 > 18, sì => salva pippo baudo in lastOldStudent e salva anche 80 in lastAgeOldStudent
    // 3. 40 > 80, no => non salva nulla.

}


const { nome, cognome } = lastOldStudent;

console.log(`Lo studente più anziano è ${nome} ${cognome}`)