/*
Snack 4 -
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
nome
cognome
age
descrizione

Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

{
  nome: ‘Pippo’,
  cognome: ‘Baudo’,
  age: 80,
  descrizione: ‘’
} 
Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà.
Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)

Stampiamo con un console.log il risultato di questo array di studenti aggiornato.
Bonus
Visualizzare nell’html questi dati in una forma tabellare.

*/


var studentsList = [
    {
        nome: 'Pippo',
        cognome: 'Baudo',
        age: 80,
        //descrizione: ''  // potevo anche evitare di inserirlo?
    },
    {
        nome: 'Gino',
        cognome: 'Paoli',
        age: 80,
        //descrizione: ''
    },
    {
        nome: 'Ligabue',
        cognome: 'Baudo',
        age: 60,
        //descrizione: ''
    }
];

for (var x = 0; x < studentsList.length; x++) {

    // var descrizione = prompt('Inserisci la descrizion di ' + studentsList[x].nome);
    var thisStudent = studentsList[x];  // è sempre lo stesso oggetto, in "riferimento"
    var thisNameSurname = thisStudent.nome + ' ' + thisStudent.cognome;
    thisStudent.descrizione = prompt('Inserisci la descrizione di ' + thisNameSurname);
    
    // ALTERNATIVA, settiamo la descrizione direttamente all'origine
    //studentsList[x].descrizione = descrizione;
}


var tableHTML = document.querySelector('.table-container');

for (var x = 0; x < studentsList.length; x++) {
    var tableRow = '<ul>';  // una variabile "locale"
    var thisStudent = studentsList[x];
    
    tableRow += '<li>' + thisStudent.nome + '</li>';
    tableRow += '<li>' + thisStudent.cognome + '</li>';
    tableRow += '<li>' + thisStudent.age + '</li>';
    tableRow += '<li>' + thisStudent.descrizione + '</li>';

    tableRow += '</ul>';
    tableHTML.innerHTML += tableRow;
}


