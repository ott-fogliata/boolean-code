var emailList = ['gino@email.com', 'pippo@email.com', 'anna@email.com', 'maria@email.com'];
var userEmail = prompt('Inserisci la tua email');

var flag = false;

for (var i = 0; i < emailList.length; i++) {
    if (userEmail === emailList[i]) {
        flag = true;
    } 
}

if (flag) { // flag === true
    document.getElementById('result').innerHTML = 'Puoi entrare';
} else {
    document.getElementById('result').innerHTML = 'Non puoi entrare';
}

var userNumber = Math.floor(Math.random() * 6) + 1;
var computerNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById('result').innerHTML += '<br/>' + userNumber + ' -- ' + computerNumber + '<br/>';

if (userNumber > computerNumber) {
    document.getElementById('result').innerHTML += 'Hai vinto';
} else if (userNumber < computerNumber) {
    document.getElementById('result').innerHTML += 'Il computer ha vinto';
} else {
    document.getElementById('result').innerHTML += 'Pari!'
}