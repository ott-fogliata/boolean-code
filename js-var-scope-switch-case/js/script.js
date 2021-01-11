// tutto ciò che è dentro la funzione è "locale", livello inferiore della lasagna.
function funzioneQualsiasi(varToPrint) {
  alert(varToPrint);
}

function add(num1, num2) {
  var somma = num1 + num2; // riscrive la variabile somma globale
  return somma;
}


// globale  -- livello superiore della mia lasagna
var sceltaUtente = prompt('Scegli qualcosa');
var somma = 1 + 2;

funzioneQualsiasi(sceltaUtente);

// alert(add(3, 3));
// alert(somma);


// 1. utilizzare sempre gli argomenti, non fidiamoci delle varibili globali
// 2. nomi univoci


// switch-case
switch (sceltaUtente) {
  case 'gino':
    alert('ehi, hai scritto gino!');
    break;
  case 'pino':
    alert('ehi, hai scritto pino!');
    break;
  default:
    alert('ehi, hai scritto qualcosa!');
}

//
// che non è proprio questo:
// if() {  // gino
//
// } else if() { // pino
//
// } else { // default
//
// }
