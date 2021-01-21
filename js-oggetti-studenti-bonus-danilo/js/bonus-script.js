//i nomi sono tratti dal film "Gli Intoccabili c'hai rotto papà".

//creo funzioni di verifica inserimento Dati

//il numero deve essere minore di 3 cifre
function isValidNumLength(num){
  if(num.toString().length < 3){
    return true
  }
  return false
}

// il num deve essere compreso tra 0 e 99
function isValidNumRange(num){
  if(num > 0 && num < 99){
    return true
  }
  return false
}

// la lunghezza del nome deve essere compresa tra 4 e 15 lettere
function isValidNome(nome){
  if( nome.length >= 3 && nome.length <= 15){
    return true
  }
  return false
}

// la lunghezza del cognome deve essere compresa tra 4 e 15 lettere
function isValidCognome(cognome){
  if( cognome.length >= 3 && cognome.length <= 15 ){
    return true
  }
  return false
}


//array che conterrà gli oggetti studente
var listaStudenti = [];

//creo oggetto studente
var studente1 = {
  'nome' : 'Marco',
  'cognome' : 'Spaziani',
  'età' : 12
}
//push nella listaStudenti
listaStudenti.push(studente1);


//creo altri oggetti studente da pushare nella listaStudenti
var studente2 = {
  'nome' : 'Paolo',
  'cognome' : 'Tiberi',
  'età' : 10
}
listaStudenti.push(studente2);

var studente3 = {
  'nome' : 'Stefania',
  'cognome' : 'Rinaldi',
  'età' : 11
}
listaStudenti.push(studente3);

var studente4 = {
  'nome' : 'Zibbo',
  'cognome' : 'DeLorme',
  'età' : 11
}
listaStudenti.push(studente4);


document.getElementById('button-new').addEventListener('click', function(){
  // creo un oggetto voto
  var nuovoStudente = {};
  //cre variabili che conterranno il valore delle proprietà dell'oggetto vuoto
  var nomeUser = document.getElementById('nome').value;
  var cognomeUser = document.getElementById('cognome').value;
  var etàUser = document.getElementById('età').value;

  if(!isValidNome(nomeUser)){

    document.getElementById('errorNome').innerText = 'nome inserito non valido'
  } else{

    document.getElementById('errorNome').innerText = ' ';
  }

  if (!isValidCognome(cognomeUser)) {

    document.getElementById('errorCognome').innerText = 'cognome inserito non valido'
  } else{

    document.getElementById('errorCognome').innerText = ' ';
  }

  if(isNaN(etàUser) || !isValidNumRange(etàUser) || !isValidNumLength(etàUser)){

    document.getElementById('errorEtà').innerText = 'età inserita non valida'
  } else{

    document.getElementById('errorEtà').innerText = ' ';
  }
  /*
  se tutte le verifiche precedenti sono true allora al click push in listaStudenti
  */
  if(isValidNome(nomeUser) && isValidCognome(cognomeUser)  && !isNaN(etàUser) && isValidNumRange(etàUser) && isValidNumLength(etàUser)){

    nuovoStudente.nome = nomeUser;
    nuovoStudente.cognome = cognomeUser;
    nuovoStudente.età = etàUser;
    listaStudenti.push(nuovoStudente);
    /*
    al click dopo aver trasmesso i dati resetto i dati di inserimento, per assicurarmi che nulla vado storto faccio anche attendere qualche secondo questa operazione
    */

    // dopo 500 millisecondi appare un avviso che i dati sono stati caricati
    setTimeout(function(){
      document.getElementById('upload-is-correct').innerHTML = '<span>' + 'IL CARICAMENTO È AVVENUTO CORRETTAMENTE' + '</span>';
    }, 500)
    /*
    dopo 4 secondi si resettano i valori degli input e sparisce l'avviso di avvenuto caricamento
    */
    setTimeout(function(){
      nomeUser = document.getElementById('nome').value = '';
      cognomeUser = document.getElementById('cognome').value = '';
      etàUser = document.getElementById('età').value = '';
      document.getElementById('upload-is-correct').innerHTML = '<span>' + '</span>';
    }, 4000)
      //verifica in console
      console.log(nuovoStudente)
  }

});



//stampa i dati degli studenti solo al click del bottone
document.getElementById('button-print').addEventListener('click', function(){
  /*
  resetto l'elenco stampato, così ad ogni click di richiesta di stampare la lista, non sarà scritta più volte ma si aggiorna
  */
  document.getElementById('elenco').innerHTML = '';
  //ciclo for per navigare la listaStudenti
  for (var i = 0; i < listaStudenti.length; i++) {
    //ad ogni ciclo stampo la posizione dell'oggetto nell'array
    console.log('questo è lo studente: ' + (i + 1));
    //creo una variabile popolata dalla posizione degli oggetti nell'array
    var studente = listaStudenti[i];
    //stampo per ogni oggetto solo il nome e il cognome

    document.getElementById('elenco').innerHTML += '<li>' + 'nome: ' + studente.nome + '<br>' + 'cognome: ' + studente.cognome + '</li>'
    '</li>';
  }

});
