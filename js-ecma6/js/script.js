
// questo è errato.
// const miaCostante = 'ciccio';
// miaCostante = 'pippo';

// questo funziona perché NON riassegno la variabile
const miaCostanteArray = [];
miaCostanteArray.push('pippo');
console.log(miaCostanteArray);


const limitePunteggio = 100;

// Se proviamo ad utilizzare una variabile let prima della sua dichiarazione otterremo un errore!


// Hoisting

// gino = 1;
// console.log(gino);
//
// var gino;

// questo è un errore.
// console.log(nameVariable);
// let nameVariable = 'Ciaone';
// console.log('ci sono')

var ciao = 1;

if(true) {
  console.log(ciao)
}


if(true) {
  var ciaone = 2;
  // anche globale
}
console.log(ciaone);

if(true) {
  let mimmo = 2;
  // solo all'interno dello scope
}
// console.log(mimmo);



let filomena = 3;
if(true) {
  filomena = 'mimmo'
  console.log(filomena)
}
console.log(filomena)

//
let filomena = 3;
if(true) {
  let filomena = 'mimmo'
  console.log(filomena)
}
console.log(filomena)


// function myFunction(args) {
//   var filo = 1;
//   let mimino = 2;
//   const pippoCostante = 3;
//   return 1;
// }
//
// myFunction('sksk')
// console.log(filo)
// console.log(mimino)
// console.log(pippoCostante)


console.log(`Il nome di filomena è ${filomena}`)


let nome = 'Pippo'
let cognome = 'Baudo'

// const invitato = {
//   'nome' : nome,
//   'cognome' : cognome
// }

const invitato = {
  nome,
  cognome
}

console.log(invitato)



let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it';

const nameKey = 'gggg';

const student = {
 name,
 [nameKey]: age,
 email
};

console.log(student)



const giovane = {
  anni: 18,
  studente: true,
  indirizzo: 'taranto'
}

const {anni, indirizzo} = giovane

if(anni < 18) {
  console.log('è minorenne')
} else {

}

console.log(indirizzo)
