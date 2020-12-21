// var input_inserito = document.getElementsByTagName('input')[0].value;
// listaCheck = document.getElementsByClassName('checkboxes-container')[0].getElementsByTagName('input');

var primoInput = document.getElementsByClassName('primo-testo')[0];
var secondoInput = document.getElementsByClassName('altro-testo')[0];
var checkboxes = document.getElementsByClassName('checkboxes-container')[0].getElementsByTagName('input');

var testoMessaggio = 'Benvenuto! ';

document.getElementById("button-submit").addEventListener("click", function() {
  testoMessaggio += ' Il valore del primo input è ' + primoInput.value + '.';
  testoMessaggio += ' Il valore del secondo input è ' + secondoInput.value;
  var counterCheckedElements = 0;
  for(var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked === true) {
      counterCheckedElements += 1;
    }
    // console.log(checkboxes[i].value);
  }
  testoMessaggio += ' Hai checkato ' + counterCheckedElements + ' elementi';
  alert(testoMessaggio);
});
