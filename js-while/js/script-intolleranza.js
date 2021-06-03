// lista della spesa che si interrompe con un alert
// se l'utente inserisce latte perché è intollerante
// al lattosio.


//  includes
var listaSpesa = [];

// se non è presente latte, allora esegui.
while (!listaSpesa.includes('latte')) { 
    listaSpesa.push(prompt('Cosa compriamo?'));
}

alert('Occhio sei intollerante al lattosio!');