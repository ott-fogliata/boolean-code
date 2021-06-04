/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

var arraySurname = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var userSurname = prompt('Inserisci il tuo cognome');

// per ovviare al problema dove sort ordina le lettere maiuscole in un gruppo
// differente rispetto alle lettere minuscole, allora trasformiamo l'input
// in una parola con la prima lettera maiuscola.

userSurname = userSurname[0].toUpperCase() + userSurname.slice(1);

arraySurname.push(userSurname);

console.log(arraySurname);

arraySurname.sort();

console.log(arraySurname);

var position = arraySurname.indexOf(userSurname) + 1;

console.log(position);