//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var student = {
    'nome': 'Ottavio',
    'lastname': 'Fogliata',
    'eta': 33,
};

for (var key in student) {
    console.log(key + ': ' + student[key]);
}


//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var students = [
    {'name': 'Michele', 'lastname': 'Papagni', 'eta': 31},
    {'name': 'Fabio', 'lastname': 'Forghieri', 'eta': 31},
    {'name': 'Roberto', 'lastname': 'Marazzini', 'eta': 33}
];
for (var i = 0; i < students.length; i++)
{
    var thisStudent = students[i];

    console.log(thisStudent.name);
    console.log(thisStudent.lastname);

}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newName = prompt('Inserisci il nome del nuovo studente');
var newLastname = prompt('Inserisci il cognome del nuovo studente');
var newEta = prompt('Inserisci l\'età del nuovo studente');

students.push({
    'name': newName,
    'lastname': newLastname,
    'eta': newEta
});

console.log(students);
