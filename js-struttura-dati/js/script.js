
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const card = {

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['GG'],

  //mancano descrizione etc...

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

}

console.log(card);
