
// 1 - funzione stupida. (la mezza funzione)
// molto spesso queste funzioni sono poco riutilizzabili.

function ciaone(message) {
    alert(message)
    // senza alcun return, tutto l'algoritmo è interno.
    // rimane tutto qui.
}

ciaone('ciao!');

// 2 - funzione con return, quella smart.
function sum(a, b) {
    return a + b;  // ritorna all'esterno, a chi ha chiamato questa funzione, la somma.
}

let risultato = sum(1, 2);

// prima di mostrare il risultato all'utente possiamo
// fare altro nel frattempo. 