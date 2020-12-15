var name = prompt('Qual è il tuo nome?');

var onlyCssElement = document.getElementById('only-css');
var onlyJsElement = document.getElementById('only-js');
var jsCssElement = document.getElementById('js-css');

onlyCssElement.innerText = name;
onlyJsElement.innerText = name;
jsCssElement.innerText = name;


onlyJsElement.style.color = 'red'; // non possiamo evitarlo?

jsCssElement.className = 'red-class';


var clickElement = document.getElementById('button-element');

// DOM OBJ      listener   event
clickElement.addEventListener('click',
  // funzione = ciò che eseguo allo scaturire dell'evento
 function() {
   alert('BU.');
   alert('DI NUOVO BU.')
 }
);



/*

  funzioni.

  nomeFunzione('io sono argomento')
  prompt('Qual è il tuo nome?');


  addEventListener('nome-evento', nomeFunzione)
  clickElement.addEventListener('click', function() { alert(1); })

*/
