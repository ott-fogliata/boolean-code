
// se la risposta è {strettamente} uguale a Pippo
// allora esegui l'istruzione (scrivi Ciao Amico)
if(risposta === 'Pippo') {  // comparazione
  outputContainer.append('\nCiao ' + riposta) // <-- istruzione
} else { // ALTRIMENTI.
  outputContainer.append('\nUè, e chi sei tu.')
}

if(risposta !== 'Gino') {
  outputContainer.append('\nMeno male che non sei Gino, perché puzza.')
}
