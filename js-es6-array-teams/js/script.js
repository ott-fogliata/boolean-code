/*
Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti
(1) Stampare in html (in forma tabellare!!! :joy::joy:) i dati relativi alle
squadre (2) evidenziando in giallo la riga corrispondente alla squadra 
con più falli subiti.
*/


let teams = [
    {
        nome: 'Inter',
        score: 10,
        fouls: 1
    },
    {
        nome: 'Juventus',
        score: 5,
        fouls: 7
    },
    {
        nome: 'Taranto',
        score: 7,
        fouls: 12
    }
];


const tableHTML = document.querySelector('.table-container');


// di volta in volta inserisco l'ultimo numero più elevato
// che "ho incontrato" nel ciclo, di falli subiti.
let lastHigherFouls = 0;

// inserisco l'ultima squadra con più falli subiti che ho
// incontrato negli step del ciclo
let lastHigherFoulsTeam;

for (let x = 0; x < teams.length; x++) {

    // il team attuale ha un numero maggiore di falli subiti
    // rispetto all'ultima osservazione?
    if (teams[x].fouls > lastHigherFouls) {
        lastHigherFouls = teams[x].fouls;
        lastHigherFoulsTeam = teams[x];
    }

}

// ----

for (let x = 0; x < teams.length; x++) {

    const { nome, score, fouls } = teams[x];


    let customClass = '';
    // ma se per caso...
    if (teams[x] === lastHigherFoulsTeam) {
        customClass = 'yellow';
    }

    tableHTML.innerHTML += `
        <ul class="${customClass}">
            <li>${nome}</li>
            <li>${score}</li>
            <li>${fouls}</li>
        </ul>
    `;

}
