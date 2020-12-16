var listaOutput = document.getElementById('lista-spesa');
var listaSpesa = ['Latte', 'Cacao', 'insalata', 'carote', 'tofu', 'caffè', 'vino primitivo']
for (var i = 0; i < listaSpesa.length; i++) {
  var contenutoPrecedente = listaOutput.innerHTML;
  listaOutput.innerHTML = contenutoPrecedente + '<li>' + listaSpesa[i] + '</li>';
}
