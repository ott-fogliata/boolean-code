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
    search() {
      this.results = [];
      this.searchMovies();
      this.searchTvShows();
    },

    searchMovies() {
      //chiamo la funzione che ritorna la richiesta axios e gestisco la risposta nel then...
      this.buildGETAPICall('https://api.themoviedb.org/3/search/movie').then(
        (response) => {
          this.movieResults = response.data.results;
          this.results = [...this.results, ...this.movieResults];
        }
      );
    },

    searchTvShows() {
      //chiamo la funzione che ritorna la richiesta axios e gestisco la risposta nel then...

      this.buildGETAPICall('https://api.themoviedb.org/3/search/tv').then(
        (response) => {
          this.tvShowResults = response.data.results;
          this.results = [...this.results, ...this.tvShowResults];
        }
      );
    },

    /* 
    Piccolo refactor extra, una funzione che restituisce l'esecuzione 
    della chiamata axios
    */
    buildGETAPICall(URL) {
      return axios.get(URL, {
        params: {
          api_key: 'e99307154c6dfb0b4750f6603256716d',
          query: this.query,
          language: 'it-IT',
        },
      });
    },

    getVote(vote) {
      return parseInt(vote / 2);
    },
  },
});
