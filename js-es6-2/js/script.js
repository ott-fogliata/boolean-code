

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


/*


Piccolissimo snack:
Create una lista di teams con nome, punti fatti e falli subiti.
Ciclare all’interno dell’array con il foreach stampando in console.log solo il nome della squadra

*/

teams.forEach((team) => {
    console.log(team.nome);
})



// sommiamo tutti i numeri all'interno di un array

const listaNumeri = [2, 4, 1, 6];

let sum = 0;

const numeriPari = [];

listaNumeri.forEach((num) => {
    sum += num;
    
    return; // continue, salta questo codice e vai al prossimo step.
    
    if (num % 2 === 0) {
        console.log('HO TROVATO UN NUMERO PARI');
        numeriPari.push(num)
    }
});

console.log('La somma è', sum)


// I numeriPari sono un filtro che parte da listaNumeri,
// e che contiene solo i numeri pari
console.log('I numeri pari sono', numeriPari);


// da una lista numeri, creare una nuova lista con il quadrato
// di ciascun numero.

// map: crea un NUOVO array, partendo da ogni elemento di un array originale
// crea altrettanti item al suo interno.

const listaQuadrati = listaNumeri.map((num) => {
    // lui fa 4 return per popolare i 4 item del nuovo array.
    return num * num;
});

console.log(listaQuadrati);


// Abbiamo un array di studenti, vogliamo sistemare questo array
// correggendo tutti i nomi in minuscolo mettendoli con il primo
// carattere in maiuscolo.

const students = [
    {
        name: 'pippo',
        surname: 'baudo'
    },
    {
        name: 'gino',
        surname: 'paoli'
    },
    {
        name: 'maccio',
        surname: 'capatonda'
    }
]

const studentsFix = students.map((student) => {

    return {
        name: student.name[0].toUpperCase() + student.name.slice(1),
        surname: student.surname[0].toUpperCase() + student.surname.slice(1)
    }

});

console.log(studentsFix);


// abbiamo una lista di numeri, estrapoliamo una lista di numeri pari

const listaTantiNumeri = [1, 5, 3, 4, 6, 8, 12, 10, 2, 7];

const listaRisultatiPari = listaTantiNumeri.filter((numero) => {
    
    /*
    if (numero % 2 === 0) {
        // il filter passerà gli item nel nuovo array, solo se trova
        // il return true. 
        return true;
    } else {
        return false;
    } */

    return numero % 2 === 0;  // questo è uguale a true se pari, oppure false se il suo contrario (dispari)

});


console.log(listaRisultatiPari);



/*

Creare una lista di numeri. 
Con filter, creare un nuovo array con SOLO i numeri 
che vanno da 5 a 10 compresi.
*/

const listNums = [1, 5, 4, 88, 9, 10, 3, 100, 12];

const newList = listNums.filter((num) => {
    return num >= 5 && num <= 10;
});

console.log(newList)


// ARGOMENTO BONUS! 

// ---- REDUCE!


// .forEach((element, index, array) => {})
// .filter((element) => {})


// .reduce((accumulatore, il-valore-attuale) => {})

// obiettivo: sommare tutti i numeri dentro l'array.

let arrayNums = [1, 4, 5, 18, 3];

const result = arrayNums.reduce((totale, numAttuale) => {
    return totale + numAttuale
})

console.log('La somma con reduce è:', result);