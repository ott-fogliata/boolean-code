function urla() {
  alert('AAAAAAAAAAH!');
}

function start(pippoBack) {
  console.log('ho caricato la pagina');

  if(typeof pippoBack === 'function') {
    // callback
    pippoBack();  // è come aver scritto urla();

  }
}

// viene eseguito al caricamento in pagina
start(urla)


// funzione anonima
start(function() {
  alert('ginoooooooo!')
})
