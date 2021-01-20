var nomeFunzione = function() {
  console.log('funzione classica');
}

var result = nomeFunzione();
// il result è undefined

// arrow function su un'unica riga
let somma = () => 1 + 1;
console.log(somma())
// somma NON è undefined,
// perché con le arrow function il return è implicito

// arrow function su più righe
let scrivi = () => {
  console.log('scrittura')
  console.log('scrittura')
  console.log('scrittura')
  console.log('scrittura')
  console.log('scrittura')
  console.log('scrittura')
}

function scrivimi() {
  console.log('qualcosa')
}

// scrivi();


if(true) {
  let scrivi = () => {
    console.log('scope interno')
  }
  scrivi()
}

scrivi()

document.getElementById('classic-function-listener').addEventListener('click', function() {
  console.log(this);
});

document.getElementById('arrow-function-listener').addEventListener('click', () => {
  console.log(this);
});


const myFunction3 = () => 'pippo';
console.log(myFunction3());

const myFunction4 = () => [1, 2, 3];
console.log(myFunction4());

const myFunction5 = () => { nome: 'cognome' };
console.log(myFunction5());

const myFunction6 = () => {
  return { nome: 'cognome-con-return' };
}
console.log(myFunction6());

const myFunction7 = () => ({ nome: 'cognome-con-parentesi-tonde' });
console.log(myFunction7());


// rest e spread
function funConRest(...args) {
  console.log(args)
}

funConRest([1,2,3], {nome: 'gino'}, 'ciaone')
funConRest(1);



const array1 = [1,3,5,7];
const array2 = [2,4,6,8];
let merged = [...array1,...array2];
console.log(merged);

let object = { name: 'Pippo', surname: 'Baudo'}
let objectPlus = { anni: 90 }
let objectMerged = {...object, ...objectPlus}
console.log('Object merged ', objectMerged)

let objectSuperMerged = {...objectMerged, job: 'presentatore'}
console.log('Object super merged ', objectSuperMerged)

const {surname, job} = objectSuperMerged
console.log(surname)



console.log('--------- arrow function with rest --------------')
var funWithArg = (...arg) => console.log(arg)
// var classicFunction = function(...args) {
//   console.log(arg)
// }

funWithArg();
funWithArg([1,2,3]);
funWithArg([1,2,3], 'stringa');

var funNoSpread = (g, y) => console.log(g, y);
funNoSpread(1, 2);

var funNoSpread = (g, y) => {
  console.log(g, y);
  return true;
};

funNoSpread(5, 6);

// setTimeout(() => {
//   let g = 1;
//   let y = 2;
//   funNoSpread(g, y);
// }, 2000)


console.log('--------- foreach --------------')

var listaDiElementi = [1, 2, 3, 4]


listaDiElementi.forEach( (element) => {

   if(element === 1) {
     return;  // continue
   }

   console.log('foreach num ', element);
})

var listaDiElementi = [
  { name: 'pippo'},
  { name: 'giacomo'},
]


listaDiElementi.forEach( (element) => {
    console.log(element.name);
});


console.log('--------- map --------------')

let newListaDiElementi = listaDiElementi.map( (elemento, index, array) => {

  if(elemento.name === 'pippo') {
    elemento.name = 'filomena'
    return elemento;
  }

  return elemento;

})

console.log(newListaDiElementi);



let arrayList = [2, 3, 5, 0];

let newArrayList = arrayList.map((elemento, index, array) => {

  if(index === 0) {
    return 100;
  }

  return elemento;

})

console.log(newArrayList);


console.log('--------- filter --------------')

// da un array dobbiamo prendere solo i numeri pari

const listaNumQualsiasi = [1,2,3,4,5,6,7,8,9,10];

let numeriPari = listaNumQualsiasi.filter((element, index, array) => {
  return element % 2 === 0;
})

console.log(numeriPari)
