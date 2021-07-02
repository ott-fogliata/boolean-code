Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            userMessage: '',
            currentContact: 0,  // questo cambia a seconda della selezione del contatto da parte dell'utente.
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods: {

            getCurrentDateTime: function () {
              
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
                
            },

            sendMessage: function () {
                // problema 1: a chi lo mando il messaggio? 
                // al contatto di currentContact <= è un indice.

                // problema 2: ma cosa pusho?
                // creiamo al volo un oggetto e lo pushamo nell'array 
                // messages del contatto attuale contacts[this.currentContact].messages

                // problema 3: come gestisco il datetime attuale?
                // - genero l'oggetto di dayjs per il datetime attuale.
                // - trasformo l'oggetto in una stringa con il formato datetime richiesto
                // day/month/year hour:minutes:seconds

                    this.contacts[this.currentContact].messages.push({
                    date: this.getCurrentDateTime(),
                    text: this.userMessage,
                    status: 'sent',
                });

                this.userMessage = '';

                // dopo 1 secondo, pushare una riposta.


            


            }

        }
    });