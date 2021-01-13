$(document).ready(function() {

  $('.button-for-toggle').click(function() {
    $('.paragraph').toggle();
  })


  $('.button-for-toggle-2').click(function() {
    $('.paragraph-2').toggle(1500, function() {
      console.log('Ho nascosto oppure visualizzato il paragrafo!')
    });
  })

  $('.button-for-toggle-3').click(function() {
    $('.paragraph-3').fadeToggle(function() {
      console.log('ho fatto il fade (in o out?)')
    });
  })


  /*
    slideDown ha bisogno di un display: none nel css, perchè andremo a "visualizzarlo"
    e se è già visualizzato non fa nulla (nessuna animazione).
    slideUp, invece, chiuderà il box verso l'alto (aggiungerà un display:none alla fine)
  */
  $('.button-for-slide-4').click(function() {
    $('.box-slide').slideUp();
  });

  $('.faq h2').click(function() {
    $(this).next().toggle();
  })


})
