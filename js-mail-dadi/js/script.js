var output = document.getElementById('output')
var emails = ['ciccio@ciccio.it', 'otto@mail.it', 'michele@email.com'];
var login = prompt('Inserisci la tua mail');
var mailTrovata = false;  // variabili flag

for(var i = 0; i < emails.length && !mailTrovata; i++) {
  console.log(emails[i]);
  if(emails[i] === login) {
    mailTrovata = true;
  }
}

// mailTrovata o è true, o è false
if(!mailTrovata) {
  output.append('\nAccesso negato.')
} else {

  var giocatoreDado = Math.floor(Math.random() * 6) + 1;
  var computerDado = Math.floor(Math.random() * 6) + 1;

  if (giocatoreDado > computerDado) {
    output.append('\nGiocatore vince');
  } else if (giocatoreDado < computerDado) {
    output.append('\nComputer vince');
  } else {
    output.append('\nPari!');
  }

}
