var a = 0;

/*
function qualcosa() {
    a = 1; // bad!
}

qualcosa();
console.log(a);
*/

function qualcosaAncora() {
    var a = 12;
    console.log(a);
}

qualcosaAncora();
console.log(a);

// 
// che confusione!

function saluta() {
    var d = "asd";
    console.log("a is " + a);
    var b = a + 1;
    console.log("b is " + b);
    console.log(c);
}
   
a = 0;
b = "buongiorno"
var c = "ciao";
 
saluta();
 
console.log("a is " + a);
console.log("b is " + b);
 

// creare una funzione che verifica se un elemento
// è incluso in un array => senza usare includes/indexOf

// se è incluso torna true
// altrimenti torna false

function isInArray(array, element) {

    // verifico con un for se l'elemento inserito come argomento
    // è uguale al singolo item che sto analizzando dell'array durante in ciclo
    // (in posizione x)
    for (var x = 0; x < array.length; x++) {
        if (element === array[x]) {
            return true;
        }
    }

    return false;

}


var list = [1, 4, 5, 3, 7];

var result = isInArray(list, 4);
console.log('Ho trovato l\'elemento?', result);

// --------------------------------------------------------------------------

// chiediamo il nome all'invitato, se si chiama Gino, lo facciamo entrare senza problemi
// se si chiama Pino, lo facciamo entrare solo se paga 10€
// altrimenti non può entrare.

// if userName is gino then entra
// else if userName is pino then entra but paga
// else non entra

var userName = prompt('Dimmi il tuo nome');

// switch prende in considerazione lo userName
switch (userName) {

    // adesso analizzalo
    case "Gino":
        var message = 'Puoi entrare gratis!';
        console.log('è gino')
        break; // basta così, è questo il caso, non andiamo avanti nell'analisi
    
    case "Pino":
        var message = 'Puoi entrare ma paga 10€';
        console.log('è pino')
        break;
    
    default:
        var message = 'Non puoi entrare!';
        console.log('non può entrare')
}



alert(message);