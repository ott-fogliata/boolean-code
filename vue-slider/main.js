new Vue({
  el: '#app',
  data: {
    images: [
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
    ],
    currentImageIdx: 0,

  },
  methods: {
    next: function() {
      this.currentImageIdx += 1;
      if(this.currentImageIdx > this.images.length - 1) {
        this.currentImageIdx = 0
      }

      // if(this.currentImageIdx === this.images.length - 1) {
      //   this.currentImageIdx = 0
      // } else {
      //   this.currentImageIdx += 1;
      // }

    },
    prev: function() {
      this.currentImageIdx -= 1;
      if(this.currentImageIdx < 0) {
        this.currentImageIdx = this.images.length - 1  // ultima posizione dell'array
      }
    },
    selectImageIdx: function(newIndex) {
      this.currentImageIdx = newIndex;
    }
  }
})
Vue.config.devtools = true;
