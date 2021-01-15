//
// // funzione anonima.
// setTimeout(function() {
//   alert('Iscriviti alla newsletter!')
// }, 15000) // 15s * 1000 (ms)
//
// // dichiaro la funzione, e la invio come parametro.
// function urla() {
//   alert('AAAAAAAAH');
// }
// setTimeout(urla, 2000)


var flag = false;


var steve = setInterval(function() {
  if(!flag) {   // flag === false
    console.log('Lois');
    flag = true;
  } else {
    console.log('Penny');
    flag = false;
    clearInterval(steve);
  }
}, 500);
