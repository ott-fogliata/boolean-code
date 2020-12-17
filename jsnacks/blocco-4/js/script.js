var listaInvitati = ['Pino', 'Paolo', 'Mimmo'];
var userName = prompt('Qual è il tuo nome?')
if(listaInvitati.indexOf(userName) === -1) {
  console.log('Non puoi entrare');
} else {
  console.log('Benvenuto.')
}
