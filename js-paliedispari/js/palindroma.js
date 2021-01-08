

// verificare che una parola inserita dall'utente sia palindroma o meno
// l'inverso della parola è uguale al suo "dritto" (ci piace parlare strano!)

// creo una funzione che restituisca l'inverso di qualsiasi stringa [astrazione]
function invert(word) {
    var reversed = '';
    for(var x = word.length - 1; x >= 0; x--) {
      reversed += word[x];
    }
    return reversed;
}

// creo funzione per validare il mio input a seconda delle specifiche dell'applicazione
function isValid(inputString) {
  if(inputString.includes(' ')) {
    return false; // esce immediatamente dalla funzione, non continua più
  }
  if(!isNaN(inputString)) {
    return false;
  }
  if(inputString.length < 3) {
    return false;
  }
  return true;
}

var button = document.getElementById('button');

button.addEventListener('click', function(){

  var parola = prompt('Inserisci la parola');

  if(!isValid(parola)) {

    alert('parola non valida!')

  } else {

    var result = invert(parola);

    if(result === parola) {
      alert('palindroma!')
    } else {
      alert('non è palindroma!')
    }

  }

});
