/**
PARTE 1
Creare un oggetto che descriva uno studente, 
con le seguenti proprietà: nome, cognome e età. 

Stampare a schermo attraverso un ciclo for-in 
tutte le proprietà dell’oggetto.

 */

var student = {
    nome: 'Gino',
    cognome: 'Paoli',
    age: 80
}

// stampiamo a schermo la coppia chiave: valore => proprietà
var firstStudentHtml = document.querySelector('.first-student');

for (var key in student) {
    firstStudentHtml.innerHTML += key + ': ' + student[key] + '<br />';
}

/**
PARTE 2
Creare un array di oggetti di studenti. 
Ciclare su tutti gli studenti e stampare per ognuno di essi, 
nome e cognome.  <-- conosciamo già la struttura.
Ricordatevi, è un array, quindi? for.
*/

var studentsList = [
    {
        nome: 'Pippo',
        cognome: 'Baudo',
        age: 80
    },
    {
        nome: 'Mimmo',
        cognome: 'Mimmo',
        age: 11
    }
];

for (var x = 0; x < studentsList.length; x++) {
    console.log(studentsList[x].nome, studentsList[x].cognome);
    // console.log(studentsList[x]['nome'], studentsList[x]['cognome']);
}

var classe = {
    name: 37,
    students: [
        {
            nome: 'Pippo',
            cognome: 'Baudo',
            age: 80
        },
        {
            nome: 'Mimmo',
            cognome: 'Mimmo',
            age: 11
        }
    ]
}

for (var x = 0; x < classe.students.length; x++) {
    console.log(classe.students[x].nome, classe.students[x].cognome);
    // console.log(studentsList[x]['nome'], studentsList[x]['cognome']);
}

/**
PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() 
- uno per ciascuna proprietà - di aggiungere UN SOLO oggetto 
studente inserendo nell’ordine: nome, cognome e età.
*/

var newName = prompt('Inserisci il nome dello studente');
var newSurname = prompt('Inserisci il cognome dello studente');
var newAge = prompt('Inserisci l\'età dello studente');

studentsList.push({
    nome: newName,
    cognome: newSurname,
    age: newAge
});


