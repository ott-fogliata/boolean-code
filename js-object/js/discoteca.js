var discoteca = {
  'nome': 'booleandisk',
  'capienza': 2,
  'people': []
}

// qui mettiamo il buttafuori
// il buttafuori (o buttafiori!) può far entrare solo 3 persone (oh maronn!)
while(discoteca.people.length < discoteca.capienza) {

  var giovine = {}

  giovine.nome = prompt('Come ti chiami?');
  /*
  giovine = {
    nome: 'pippo'
  }
  */

  giovine.cognome = prompt('Qual è il tuo cognome?');
  /*
  giovine = {
    'nome': 'pippo',
    'cognome': 'baudo'
  }
  */


  var opzione = prompt('Hai qualche altra proprietà, se sì, quale?') // chiave
  var valore = prompt('Descrivila.') // valore
  //'soldi': 'tanti'

  giovine[opzione] = valore;

  discoteca.people.push(giovine);

}

console.log(discoteca);

console.log('Qui ciclo la discoteca.')
for(var key in discoteca)  {
  console.log(discoteca[key])
}

// dobbiamo stampare tutti i valori delle singole persone nella discoteca
// discoteca.people
for(var x = 0; x < discoteca.people.length; x++) {

  console.log('Questa è la persona n: ' + (x+1));

  var persona = discoteca.people[x];

  // persona è un oggetto, il nostro "giovine" del while
  for(var key in persona) {
    console.log(key + ' ha valore: ' + persona[key])
  }

}
