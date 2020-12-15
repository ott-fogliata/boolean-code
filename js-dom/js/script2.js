// Dichiarazione variabili
var nome, sesso;

// Acquisisci dati
nome = prompt('Inserisci nome');
sesso = prompt('Inserisci sesso')


var nomeElement = document.getElementById('nome');
nomeElement.innerText = nome;


// Controllo input
if (sesso !=='m' && sesso!=='f'){
  alert('Errore');
}else{

  if (sesso === 'm'){
    nomeElement.className = 'blu';
  }else{
    nomeElement.className = 'rosa';
  }
}
