/**

Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina la lista dei gatti, visualizzando solo il nome di ciascun gatto

Colorare il nome del gatto a seconda del suo stesso colore.
*/

const cats = [
    {
        name: 'pippo',
        age: 3,
        color: 'red',
        gender: 'm'
    },
    {
        name: 'bit',
        age: 5,
        color: 'grey',
        gender: 'f'
    },
    {
        name: 'romeo',
        age: 4,
        color: 'white',
        gender: 'm'
    }
];


const ulElement = document.querySelector('.cats-list');

cats.forEach((cat) => {

    ulElement.innerHTML += `
        <li style="color: ${cat.color}">
            ${cat.name}
        </li>
        `;

});


// ternary operator
const flag = true;

//                   condizione r if   r else
let linguaSelezionata = flag ? 'en' : 'it';

console.log(linguaSelezionata);