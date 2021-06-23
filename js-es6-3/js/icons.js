const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte
// le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo


// l'obiettivo è creare una funzione che filtra l'array originale
// e a seconda della scelta ritorna un nuovo array.

/**
 * 
 * Filtra originaList a seconda della scelta, param choice
 * 
 * @param {*} choice ['all', 'user', 'vegetable', 'animal']
 * @param {*} originalList 
 */
function filterIcons(choice, originalList) {

     return originalList.filter((icon) => {
        // ritorniamo TRUE solo se corrisponde al filtro.
        if (choice === 'all') {
            return true;
        }

        if (choice === icon.type) {
            return true;
        }

        // se non è riuscito ad attivare 
        // gli altri return, allora...
        return false;

    })

}

function listIconsToHTML(value) {

    // filtra le icone dall'array originale.
    const iconsFiltered = filterIcons(value, icons);

    // crea oggetto html di icons-content
    const containerHTML = document.querySelector('.icons-content');

    // reset dell'html, così da cancellare la selezione precedente
    containerHTML.innerHTML = '';

    // per ciascuna icona all'interno del nuovo array, allora...
    iconsFiltered.forEach((icon) => {
    
        const { name, prefix, family, type } = icon;
    
        containerHTML.innerHTML += `
            <div class="icon-card col">
                <div class="icon-card-inner">
                    <div class="icon ${type}">
                        <i class="${family} ${prefix}${name}"></i>
                    </div>
                    <div class="name">
                        ${name}
                    </div>
                </div>
            </div>
        `
    });
}
// ------------------------------------------


// lancia la funzione che filtra con un return true tutti gli elementi
// e li stampa in html.
listIconsToHTML('all');

// popola variabile oggetto della select
const selectElement = document.querySelector('.type-select');

// ad ogni cambio (change) della select, rilancia listIconsToHTML
// ma con il value della select.
selectElement.addEventListener('change', (event) => {
    // event è la descrizione dell'evento e contiene
    // in event.target.value il valore della select selezionata.
    console.log(event);
    listIconsToHTML(event.target.value);  // ex. value="animal"

})

// Milestone 3
// Creiamo una select con i tipi di icone 
// e usiamola per filtrare le icone

/*

- si attiva quando l'utente cambia la select, addEventListener change



- avremo bisogno di un array, che cambia di volta in volta a seconda
della selezione dell'utente, di default questo array 
è uguale all'originale



*/