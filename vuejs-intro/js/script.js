const app = new Vue(
    {
        el: '#app',
        data: {
            // qui dentro metteremo tutti i dati
            // della nostra applicazione.
            // la nostra app si attiverà e verrà 
            // eseguita in funzione di...
            name: '',
            contentClass: 'hidden',
            buttonText: 'Show me!',
        },
        methods: {
            saluta: function () {
                // this è come un alias (per adesso) di data
                alert(`Ciao ${this.name}!`);
            },
            showElement: function () {
                if (this.contentClass === 'hidden') {
                    this.buttonText = 'Hide me!'
                    this.contentClass = 'show';
                } else {
                    this.buttonText = 'Show me!'
                    this.contentClass = 'hidden';
                }
            }
        }
    }
 );
  

