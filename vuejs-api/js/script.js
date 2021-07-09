Vue.config.devtools = true;


// Chiamare l'api per poter generare un numero randomico(che ci restuisce il backend)
// e mostrare questo numero a schermo.

// => dobbiamo popolare un data (che all'inizio è 0), e mostrarlo a schermo {{ number }}

// generiamo 5 nomi random, e scriviamoli nell'html.

new Vue(
    {
        el: '#app',
        data: {
            number: 0,
            username: 'PIPPO',
            names: []
        },
        created() {

            this.getNames();

            // ma questa roba non la potevo mettere in una funzione? (method)
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                    console.log(response.data.response);
                    console.log(this);
                    this.number = response.data.response;
                });
            
            // alternativa con il that (quando non possiamo usare le arrow function)
            /*
            
            let that = this;

            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then(function(response)  {  // appena il server ci risponde, si attiva questa funzione
                    console.log(response.data.response);
                    console.log(that);
                    that.number = response.data.response;
                });

            */
        },
        computed: {
            // questa funzione viene eseguita ogni qual volta
            // il dato da cui dipende, cambia.
            usernameLower: function () {
                return this.username.toLowerCase();
            },
            // creo un computed readyNames, che sono popolati (sono pieni)
            // solo e soltanto se this.names.length === 5
            readyNames: function () {
                if (this.names.length === 5) {
                    return this.names;
                } else {
                    return [];
                }
            },
        },
        methods: {

            getNumber: function () {
                axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                    this.number = response.data.response;
                });
            },

            getNames: function () {
                // chiamiamo per 5 volte l'api dei nomi random.
                // ogni volta pushiamo il risultato in array di nomi.
                // stampiamo l'array nell'html (v-for)
                for (let i = 0; i < 5; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                        .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                            this.names.push(response.data.response);
                        });
                }
                
            }

        }
    });





