const icons = [{
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  }
];

const selector = document.getElementById('selector');
const boxIcons = document.getElementById('icons-container');
const selectorElement = $('#selector');

// analizzo i type delle icons.
// ciclo tutte le icone, pre prendermi tutti i possibili type
// con !typeOptions.includes(..) evito di pushare i duplicati.
// typeOptions sarà per me la lista delle opzioni nella select
const typeOptions = [];
icons.forEach((element) => {
  if(!typeOptions.includes(element.type)) {
    typeOptions.push(element.type);
  }
});

console.log('Tutte le opzioni', typeOptions);

// è il momento di stampare tutte le opzioni all'interno della select.
typeOptions.forEach((element) => {
  selector.innerHTML += `
    <option value="${element}">${element}</option>
  `
})

// preparo il mio listener:
// ogni volta che l'utente selezionerà qualcosa nel menu della select
// verrà eseguita la funzione "handler", la funzione all'interno del change
// funzione jquery: https://api.jquery.com/change/
selectorElement.change(function() {

  // ogni volta che l'utente "filtra", devo cancellare gli elementi filtrati
  // in precedenza e che sono visibili dentro boxIcons
  boxIcons.innerHTML = '';

  // salvo in una variabile la selezione dell'utente.
  // la selezione è il value all'interno dell'option che l'utente ha selezionato.
  // (la prima option in lista è quella di default)
  const typeSelected = $(this).val()
  console.log(typeSelected)

  // preparo l'array di tutti gli oggetti (icone) che andrò a filtrare.
  // quest'array sarà utilizzato nel foreach e template literal per inserire
  // nell'html (boxIcons) di volta in volta tutte le icone in esso contenuto
  let filteredArray;

  // se il value, ovvero il type selezionato nell'option è diverso da all
  // allora filtra
  if(typeSelected !== 'all') {
    // qui filtriamo.
    filteredArray = icons.filter((element) => {
      // restituisce all'array finale (filteredArray) solo gli elementi
      // che verificano questa condizione (come se fosse un IF)
      // quindi solo se il type di element è uguale a quello selezionato dall'utente
      return element.type === typeSelected
    })
  } else {
    // altrimenti, typeSelected è uguale a ALL, quindi NON vogliamo filtrare
    // e assegniamo in filteredArray tutto icons.
    filteredArray = icons;
  }

  console.log(filteredArray);

  // facciamo il foreach su filteredArray, per poter di volta in volta
  // prendere l'elemento (la nostra icona) e andare a stamparla (aggiungerla)
  // all'interndo di boxIcons - in precedenza già svuotato.
  filteredArray.forEach((element) => {

    boxIcons.innerHTML += `
      <div>
        <i class="${element.family} ${element.prefix}${element.name}"></i>
      </div>
    `
  })
})

// una volta soltanto, all'inizio, dopo che il js ha imparato il listener (l'ha letto)
// lancio manualmente il change.
// In questo il value della select sarà 'all', perché la prima option in lista
// nella select è proprio questa: <option value="all">ALL</option>
selectorElement.change();
