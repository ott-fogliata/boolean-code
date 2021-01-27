new Vue({
 el: '#root',
 data: {
   name: '',
   surname: '',
   boxClassName: 'box',
   color: 'red',
   titleColor: 'red',
   titleColorClass: 'startTitleColor'
 },
 methods: {
   saluta: function() {
     alert('CIAO!')
   },
   submitFunction: function() {
     alert('Ora invierò i dati al server')
   },
   changeColor: function() {
     this.titleColor = 'blue';
   },
   changeColorClass: function() {
     this.titleColorClass = 'newTitleColor';
   }
 }
});
Vue.config.devtools = true;
