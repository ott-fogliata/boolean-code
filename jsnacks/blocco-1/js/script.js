var firstNumber = prompt('Inserisci il primo numero');
var secondNumber = prompt('Inserisci il secondo numero');

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

if(firstNumber > secondNumber) {
  console.log(firstNumber);
} else if(firstNumber < secondNumber) {
  console.log(secondNumber);
} else {
  console.log('Sono pari.')
}
