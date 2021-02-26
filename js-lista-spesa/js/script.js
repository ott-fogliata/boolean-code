var listaOutput = document.getElementById('lista-spesa');
var listaSpesa = ['Latte', 'Cacao', 'insalata', 'carote', 'tofu', 'caffè', 'vino primitivo']

var contenutoPrecedente;


for (var i = 0; i < listaSpesa.length; i++) {

  contenutoPrecedente = listaOutput.innerHTML;
  listaOutput.innerHTML = contenutoPrecedente + '<li>' + listaSpesa[i] + '</li>';

  //listaOutput.innerHTML += '<li>' + listaSpesa[i] + '</li>'

}

var ciao;

if(ciao){
  console.log('ciao è ' + ciao);
}
