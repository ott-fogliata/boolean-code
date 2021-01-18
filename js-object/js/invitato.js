
// con l'oggetto casa descriviamo tutte le sue proprietà
var casa = {
  'dimensioneMq': 80,
  'numeroStanze': 3,
  'personeAlSuoInterno': [],
}

// con l'oggetto invitato descriviamo
// l'invitato che accoglieremo nella casa
var invitato = {
  'nome': 'Gianpaolo',
  'cognome': 'Garbarino',
  'caratteristiche': {
    'simpatico': true,
    'cattivo': false,
  },
  'indirizzo': {
    'citta': 'Ozzano'
  }
}

var nuovoInvitato = {
  'nome': 'Ottavio',
  'cognome': 'Fogliata'
}

console.log(invitato.indirizzo.citta)
console.log(invitato.caratteristiche.simpatico)

console.log(casa); // qui gian ancora non c'è.

var scelta = prompt('Cosa vuoi sapere di Gian?')
// var scelta = 'nome'
if(typeof invitato[scelta] !== 'undefined') {
  alert(invitato[scelta]);

  // NON SI PUO' SCRIVERE COSI':
  // alert(invitato.scelta)

} else {
  alert('Gian non ha questa proprietà');
}


// portiamo Gianpaolo nella casa (ma dopo 5s)
setTimeout(function() {
  casa.personeAlSuoInterno.push(invitato);
  console.log(casa); // dove gian è al suo interno
}, 5000);

// portiamo Ottaio nella casa, dopo 8 secondi.
setTimeout(function() {
  casa.personeAlSuoInterno.push(nuovoInvitato);
  console.log(casa); // è arrivato anche ott!
}, 8000);



//console.log(casa.personeAlSuoInterno)
