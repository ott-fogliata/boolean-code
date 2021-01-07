
// Math.floor(Math.random() * (max - min) ) + min;

/*
 1 - sommare tutti gli elementi nell'array in posizione dispari

0,1,2,3,4
1,2,3,4,5

    (1) utilizzo la posizone naturale dell'array come indice, e cerco il suo dispari
    (2) utilizzo la posizione "umana", e cerchiamo il dispari per come lo contiamo noi

 2 - generare automaticamente questo array (numeri random)
  ??

*/


// CONTANDO COME CONTA LA MACCHINA (DA 0)
// E CERCO IL DISPARI PER COME CONTA LA MACCHINA

// var numbers = [1, 32, 34, 553, 231, 98, 24, 3];
// var result = 0;
//
// for(var x = 0; x < numbers.length; x++) {
//
//   if(x % 2 !== 0) {
//     result += numbers[x];
//   }
// }


// CONTANDO DA 1

// var numbers = [1, 32, 34, 553, 231, 98, 24, 3];
// var result = 0;
//
// for(var x = 1; x <= numbers.length; x++) {
//
//   if(x % 2 !== 0) {
//     result += numbers[x-1];
//   }
// }
//
// console.log('Il risultato è: ' + result);

// CONTANDO DA 0, MA AUMENTANDO IL CONTATORE DI DUE

// var numbers = [1, 32, 34, 553, 231, 98, 24, 3];
// var result = 0;
//
// for(var x = 0; x < numbers.length; x += 2) {
//
//     result += numbers[x];
// }
//
// console.log('Il risultato è: ' + result);

// costanti.
var maxElements = 5;
var minRandom = 1;
var maxRandom = 100;

var numbers = [];
var result = 0;

for(var x = 0; x < maxElements; x++) {

  numbers.push(Math.floor(Math.random() * (maxRandom - minRandom) ) + minRandom);
  console.log(numbers);

  if(x % 2 === 0) {
    result += numbers[x];
  }
}

console.log('Il risultato è: ' + result);
