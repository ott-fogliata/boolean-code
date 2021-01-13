
$(document).ready(function() {

  $('.button-next').click(function() {
    $('.slider-box.active').removeClass('active').next().addClass('active');
  })

  $('.button-prev').click(function() {
    $('.slider-box.active').removeClass('active').prev().addClass('active');
  })

})
