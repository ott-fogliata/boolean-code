var app = new Vue({
  el: '#app',
  data: {
    query: '',
    results: [],
    movieResults: [],
    tvShowResults: [],
    availableFlags: ['it', 'en'],
  },
  methods: {
    /*
    Metodo generale di ricerca che esegue sia ricerca film che ricerca tv show
    Attenzione ! I metodi sono asincroni, che dovremmo fare nel caso volessimo 
    eseguire il secondo metodo SOLO dopo aver ricevuto la risposta dal primo?
    */
    search() {
      this.results = [];
      this.searchMovies();
      this.searchTvShows();
    },

    /* 
    Rendiamo i dati atomici e teniamo le fonti dati separate: 
    metodo che restituisce solo i film 
    */
    searchMovies() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'e99307154c6dfb0b4750f6603256716d',
            query: this.query,
            language: 'it-IT',
          },
        })
        .then((response) => {
          //popolo prima l'array specifico dei film...
          this.movieResults = response.data.results;
          //e poi aggiungo i risultati all'array dei risultati generali
          this.results = [...this.results, ...this.movieResults];
        });
    },

    /* 
    Rendiamo i dati atomici e teniamo le fonti dati separate: 
    metodo che restituisce solo gli show tv */

    searchTvShows() {
      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: 'e99307154c6dfb0b4750f6603256716d',
            query: this.query,
            language: 'it-IT',
          },
        })
        .then((response) => {
          //popolo prima l'array specifico degli show tv...
          this.tvShowResults = response.data.results;
          //e poi aggiungo i risultati all'array dei risultati generali
          this.results = [...this.results, ...this.tvShowResults];
        });
    },

    getVote(vote) {
      return parseInt(vote / 2);
    },
  },
});
