Vue.config.devtools = true;

new Vue(
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
            showFlag: false,
            showHello: true,
            listaNomi: ['Pippo', 'Gino', 'Laura']
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
            },
            checkSalutoPersonalizzato: function () {
                return this.name.toLowerCase() === 'pierfilippo'
                    && this.showHello === true
            }
        }
    }
 );
  

