$(document).ready(function() {

  $('.item').click(function() {

    $(this).fadeOut(function() {

      $('.modal').fadeIn();

      setTimeout(function() {
        $('.modal').fadeOut();
      }, 2000)

    });
  })



})
