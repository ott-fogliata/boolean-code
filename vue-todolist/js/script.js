new Vue({
  el: '#app',
  data: {
    list: [

    ],
    currentSentence: 'Inserisci il testo'
  },
  methods: {
    addToList: function() {
      this.list.push(this.currentSentence);
    },
    removeFromList: function(index) {
      this.list.splice(index, 1);
    },
    removeFromListWithFilter: function(indexElement) {
      this.list = this.list.filter((element) => {
        return element !== text;
      })
      // this.list = this.list.filter((element, index) => {
      //   return index !== indexElement;
      // })
    }
  }
});
Vue.config.devtools = true;
