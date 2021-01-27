new Vue({
  el: '#app',
  data: {
    active: true,
    colorList: [
      'red',
      'blue',
      'orange',
      'purple',
      'yellow',
      'green',
      'grey',
      'black',
      'brown'
    ],
    selectedColor: 'black',
    inputName: 'Scrivi il tuo nome',
    inputCiccio: 'Prova a scrivere ciccio'
  },
  methods: {
    randomNumber: function(min, max) {
      var result = Math.floor(Math.random() * (max + 1 - min) + min);
      return result;
    },
    changeColor: function() {
      let idxSelectedColor = this.randomNumber(0, this.colorList.length - 1)
      console.log(idxSelectedColor);
      this.selectedColor = this.colorList[idxSelectedColor];
      console.log(this.selectedColor);
    },
    colorizeTheCiccioField: function() {
      return { color: (this.inputCiccio === 'ciccio') ? 'red' : 'blue' }
    },
    evidenziaColoreSelezionato: function(color) {
      if(color === this.selectedColor) {
        return 'selected-color-text'
      } else {
        return 'generic-color-text'
      }
    }

  }
});
