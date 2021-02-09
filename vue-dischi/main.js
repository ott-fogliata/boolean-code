var app = new Vue({
    el: '#app',
    data: {
        cds: [],
        genreSelected: '',
        genreList: []
    },
    mounted() {
        const self = this;

        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function(result) {
                const cds = result.data.response;
                self.cds = cds;
                console.log(cds);

                self.cds.forEach(function(item) {
                  if(!self.genreList.includes(item.genre)) {
                    self.genreList.push(item.genre)
                  }
                })

            });



    },
    methods: {
      cdFilter: function(cd) {
        return cd.genre == this.genreSelected || this.genreSelected == ''
      }
    }
})
