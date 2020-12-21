var list = [];
var number;

for(var x = 0; x < 6; x++) {
  number = parseInt(prompt('Scegli un numero?'));
  if(number % 2 !== 0) {
    list.push(number);
  }
}

console.log(list);
