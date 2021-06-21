

const lista = ['pasta', 'pane', 'deodorante'];

/*
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
*/


// element, index, array

// 1. non è obbligatorio inserirli
// 2. non è obbligatorio inserirli tutti
// index => la posizione, l'indice all'interno dell'array
// array => in alcuni casi sarà utile potare tutto l'array all'interno
// della arrow function per fare qualcosa a livello di analisi.


lista.forEach((element, index ) => {

    // element <- lista[i]
    // index <- i

    console.log(`
        ${index}: ${element}
    `)
})



// proviamo con un array di oggetti

const teams = [
    {
        nome: 'Inter',
        score: 10,
        fouls: 1
    },
    {
        nome: 'Juventus',
        score: 5,
        fouls: 7
    },
    {
        nome: 'Taranto',
        score: 7,
        fouls: 12
    }
];

let lastTeamWithHigherFouls;  // la prima voltà sarà undefined

teams.forEach((item, key) => {
    console.log(key, item);

    if (typeof lastTeamWithHigherFouls === 'undefined'
        || item.fouls > lastTeamWithHigherFouls.fouls) {
        
        lastTeamWithHigherFouls = item;
   
    }

});


console.log('Team con più falli subiti', lastTeamWithHigherFouls);