// $('#elemento').addClass('red');
function red(selettore) {
  $(selettore).addClass('red');
}

$('#elemento, #elemento-2')
  .removeClass('classe-1')
  .addClass('red');

// il selettore jQuery è praticamente il selettore CSS
red('p');
