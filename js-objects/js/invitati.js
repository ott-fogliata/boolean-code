
/**
 * 
 * Abbiamo una casa, con delle caratteristiche - tra cui l'indirizzo, n stanze...
 * Invitiamo della gente -> dove? IN CASA.
 * Gli invitati, con delle caratteristiche ciascuno, vengono "inseriti"
 * nell'oggetto casa.
 * 
 */

var home = {
    address: 'via da qualche parte 12',
    n_rooms: 5,
    users: []  // array!
    // ...
}

var firstUser = {
    name: 'Pippo',
    surname: 'Baudo',
    age: 80
}


// questi due elementi non sono ancora "collegati".
// firstUser "NON APPARTIENE" a home.

// invitiamo Pippo nella casa
home.users.push(firstUser);

var newUser = {}  // oggetto vuoto.

newUser.name = prompt('Inserisci il nome dell\'invitato');
newUser.surname = prompt('Inserisci il cognome dell\'invitato');
newUser.age = prompt('Inserisci l\'età dell\'invitato');

console.log(newUser);

home.users.push(newUser);