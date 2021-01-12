// $('#elemento').addClass('red');
function red(selettore) {
  $(selettore).addClass('red');
}

$('#elemento, #elemento-2')
  .removeClass('classe-1')
  .addClass('red');

// il selettore jQuery è praticamente il selettore CSS
red('p');


// nostalgia canaglia (js puro <3)
// var button = document.getElementById('auto-button-click');
// button.addEventListener('click', function() {
//   alert('Cliccato!')
// });

// jquery superPower!
// jquery clicca per noi!
// $('#auto-button-click').click();

// tutto jquery
 $('#auto-button-click').click(function() {
   alert('Cliccato!')
 });

 // un modo diverso di vedere le cose
function urla() {
  alert('AAAAAAAAAAAAHHHHH!');
}
$('#auto-button-click2').click(urla);

// un modo diverso di vedere le cose, ma con argomenti
function urlaConArgomenti(argomento) {
 alert('AAAAAAAAAAAAHHHHH ' + argomento + '!!!!!');
}
$('#auto-button-click2').click(function () {
  urlaConArgomenti('jQuery')
});
