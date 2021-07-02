

new Vue({
    el: '#app',
    data: {
        todoList: [
            'fare la spesa',
            'portare a spasso il cane',
            'chiamare il meccanico'
        ],
        newTask: '',
    },

    // l'html (scritto da vuejs) è stato "montato", scritto all'interno
    // del browser, nello spazio/contenitore a lui dedicato che è #app
    mounted() {
        this.autofocus();
    },
    methods: {
        autofocus: function () {
            // proviamo l'autofocus al caricamento di pagina, così a buffo.
            const element = document.getElementById('newTaskElement');
            element.focus();  
        },
        addTask: function () {
            this.todoList.push(this.newTask);
            this.newTask = '';
            this.autofocus();
        },
        deleteTask: function (index) {
            console.log(index);

            // a: start, da dove inizia lo splice
            // b: quanti elementi cancello a partire dallo start?
            // se non inserisco b, lui mi ritorna un array a partire dallo start.
            this.todoList.splice(index, 1)
            this.autofocus();
        }

    }
})