var response;

for(var x = 1; x <= 100; x++) {

  if(x % 3 === 0 && x % 5 === 0) {
    // console.log('fizzbuzz');
    response = 'fizzbuzz';
  } else if(x % 3 === 0) {
    // console.log('fizz');
    response = 'fizz';
  } else if(x % 5 === 0) {
    // console.log('buzz');
    response = 'buzz';
  } else {
    // console.log(x);
    response = x;
  }

  console.log(response);

  // TODO: potremmo ad esempio popolare una variabile sin dal principio
  // e solo dopo, andare a scrivere questa variabile in un console.log() ?
}

var listaElement = document.getElementById('lista-fizzbuzz');
var newHTML;  // una sola dichiarazione (teoria dice, una sola dichiarazione per applicazione)

for(var x = 1; x <= 100; x++) {

  newHTML = '<li>';  // reset, con un li all'inizio

  // se è multiplo di 3 e/o 5 allora scrivo, fizz, buzz,o fizzbuzz
  if(x % 3 === 0 || x % 5 === 0) {
    // if dentro if (if annidato)
    if(x % 3 === 0) {
      newHTML += 'fizz';
    }
    if(x % 5 === 0) {
      newHTML += 'buzz';
    } // <-- così scrive fizzbuzz tutto attaccato.

  // è un numero normale non multiplo di 3 e/o 5
  } else {
    newHTML += x;
  }
  listaElement.innerHTML += newHTML + '</li>';
}

//
// var listaElement = document.getElementById('lista-fizzbuzz');
// for(var x = 1; x <= 100; x++) {
//
//   var newHTML = '<li>';
//
//   // non è multiplo
//   if(x % 3 !== 0 && x % 5 !== 0) {
//     newHTML += x;  // scrivo numero
//   }
//   else { // quindi sarà un multiplo!
//     if(x % 3 === 0) {
//       newHTML += 'fizz';
//     }
//     if(x % 5 === 0) {
//       newHTML += 'buzz';
//     } // <-- così scrive fizzbuzz tutto attaccato.
//   }
//   listaElement.innerHTML += newHTML + '</li>';
// }
