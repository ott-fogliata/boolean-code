var priceKm = 0.21;
var discount18 = 20;
var discount65 = 40;

var numKm = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
var userAge = parseInt(prompt("L'età del passeggero"));

var result = priceKm * numKm;

if (userAge < 18) {
    result -= result * discount18 / 100;
} else if (userAge >= 65) {
    result -= result * discount65 / 100;
}

result = result.toFixed(2)

document.getElementById('price').innerHTML = result;
