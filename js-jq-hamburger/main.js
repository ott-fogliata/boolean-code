// $('.header-right > a').click(function() {
//   $('.hamburger-menu').fadeIn();
// })
//
// $('a.close').click(function() {
//   $('.hamburger-menu').fadeOut();
// })

$(document).ready(function () {

  utility();

  $('.header-right > a').click(function() {
    $('.hamburger-menu').addClass('active');
  })

  $('a.close').click(function() {
    $('.hamburger-menu').removeClass('active');
  })

});
