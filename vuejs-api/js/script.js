Vue.config.devtools = true;


// Chiamare l'api per poter generare un numero randomico (che ci restuisce il backend)
// e mostrare questo numero a schermo.

// => dobbiamo popolare un data (che all'inizio è 0), e mostrarlo a schermo {{ number }}

new Vue(
    {
        el: '#app',
        data: {
            number: 0
        },
        created() {

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
        methods: {

            getNumber: function () {
                axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                    this.number = response.data.response;
                });
            }

        }
    });



