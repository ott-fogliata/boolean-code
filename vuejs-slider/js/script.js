Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            photos: [
                'img/image1.jpg',
                'img/image2.jpg',
                'img/image3.jpg',
                'img/image4.jpg',
            ],
            pictureIndex: 0,
            intervalSlot: null,
        },
        // la pagina vue.js è appena stata creata.
        created() {
            // tutto ciò che è eseguito qui, viene lanciato dopo la creazione
            // della pagina, una specie di document ready. => 
            // il componente principale è pronto
            this.timer();
        },
        methods: {
            timer: function () {
                this.intervalSlot = setInterval(() => {
                    this.next();
                }, 3000)  
            },
            next: function () {

                // se è l'ultimo, non incrementare,ma..
                if (this.pictureIndex === (this.photos.length - 1)) {
                    this.pictureIndex = 0;
                } else {
                    this.pictureIndex++;
                }

                clearInterval(this.intervalSlot)  // qui ferma il timer
                this.timer() // qui lo fa ripartire

            },
            prev: function () {
                
                // se la sua posizione è zero, non decrementare, ma..
                if (this.pictureIndex === 0) {
                    this.pictureIndex = this.photos.length - 1;
                } else {
                    this.pictureIndex--;
                }

                clearInterval(this.intervalSlot)  // qui ferma il timer
                this.timer() // qui lo fa ripartire

            },
            moveTo: function (index) {
                this.pictureIndex = index;
                clearInterval(this.intervalSlot)  // qui ferma il timer
                this.timer() // qui lo fa ripartire
            },
            // deve ritornare un nome di classe diverso
            // se la index === this.pictureIndex
            isCurrentDot: function (index) {
                if (index === this.pictureIndex) {
                    return 'current';
                } else {
                    return '';
                }
            }
        }
    }
);


