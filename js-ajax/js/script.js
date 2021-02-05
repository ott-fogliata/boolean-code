// VANILLA --------------------------------------------------------
// creato l'oggetto, pronto per l'uso
var xhr = new XMLHttpRequest();

var vanillaRandElement = document.getElementById('rand-vanilla')


//listener, ovvero quando ricevo risposta faccio qualcosa
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    //qui faremo qualcosa
    console.log(this.response);
    var responseObject = JSON.parse(this.response)
    console.log(responseObject);
    console.log(responseObject.response)
    vanillaRandElement.innerText = responseObject.response;
  }
}

xhr.open('GET',
'https://flynn.boolean.careers/exercises/api/random/int', true)
xhr.send();


// JQUERY ---------------------------------------------------------

$.ajax(
 {
   url: "https://flynn.boolean.careers/exercises/api/random/int",
   method: "GET",
   success: function (data, status) {
     console.log(data);
     console.log(status)
     $("#rand-jquery").html(data.response);
   },
   error: function (request, status, error) {
     console.log(error)
     console.log(status)
     alert('errore')

   }
 }
);



// VUEJS ---------------------------------------------------------
new Vue({
  el: '#app',
  data: {
    numRand: 0
  },
  mounted() {
    const self = this;
    console.log('ho montato l\'app');
    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(function(resp) {
        console.log('risposta vue', resp.data);
        self.numRand = resp.data.response;
      });
  }

})
Vue.config.devtools = true
