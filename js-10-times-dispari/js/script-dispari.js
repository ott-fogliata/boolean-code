// -------------------------------------------------------
/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/


var list = [];

for (var x = 1; x <= 6; x++) {
    var num = parseInt(prompt('Dimmi un numero'));
    if (num % 2 !== 0) { // è dispari perché il resto del num/2 non è uguale a zero
        list.push(num);
    }
}

console.log(list);