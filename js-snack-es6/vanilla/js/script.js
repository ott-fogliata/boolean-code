// jsnack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

var bici = [
  {
   nome: 'Masciarelli',
   peso: 10
 },
 {
   nome: 'Bianchi',
   peso: 8
 },
 {
   nome: 'Anaconda',
   peso: 3
 },
 {
   nome: 'PeppaPigCycle',
   peso: 12
 }
];


var biciLeggera = bici[0]

for(var x = 1; x < bici.length; x++) {
  if(bici[x].peso < biciLeggera.peso) {
    biciLeggera = bici[x]
  }
}

console.log(biciLeggera);
