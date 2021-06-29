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
        },
        // la pagina vue.js è appena stata creata.
        created() {
            // tutto ciò che è eseguito qui, viene lanciato dopo la creazione
            // della pagina, una specie di document ready. => 
            // il componente principale è pronto
            setInterval(() => {
                this.next();
            }, 3000)
        },
        methods: {
            next: function () {

                // se è l'ultimo, non incrementare,ma..
                if (this.pictureIndex === (this.photos.length - 1)) {
                    this.pictureIndex = 0;
                } else {
                    this.pictureIndex++;
                }
            },
            prev: function () {
                
                // se la sua posizione è zero, non decrementare, ma..
                if (this.pictureIndex === 0) {
                    this.pictureIndex = this.photos.length - 1;
                } else {
                    this.pictureIndex--;
                }
            },
            moveTo: function (index) {
                this.pictureIndex = index;
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


