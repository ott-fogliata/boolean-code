
// 1 versione, con mouseenter e mouseleave
// $('#button-1').mouseenter(function() {
//   $('#button-1').addClass('red');
// });
//
// $('#button-1').mouseleave(function() {
//   $('#button-1').removeClass('red');
// });
//

// 2 versione, con mouseenter e mouseleave
$('#button-1').mouseenter(function() {
  $(this).addClass('red');
});

$('#button-1').mouseleave(function() {
  $(this).removeClass('red');
});

$('#button-1').dblclick(function() {
  $(this).text('cliccato');
})



// 3 versione, hover()
// accetta due argomenti, due funzioni
// la prima si attiva quando sono in HOVER
// la seconda quando "esco", quando lo stato HOVER non esiste più
$('#button-2').hover(
  function() {
    $(this).addClass('red');
},
  function() {
    $(this).removeClass('red');
})





$('.hide-exercise').mouseenter(function() {
  $(this).hide();  // alias dell'elemento su cui sono in hover
})
