/*Descrizione:
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Bonus:
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Generiamo i pallini con JS
Consiglio del giorno:
Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.*/

function nextImg() {
  //se img. e i active ha la classe 'last'
  if ($('img.active').hasClass('last')) {
  //alla img. e i active rimuovi la classe active
    $('img.active, i.active').removeClass('active');
  //all img.first e i.first aggiungi la classe active
    $('img.first, i.first').addClass('active');
  } else {
    $('img.active, i.active')
      .removeClass('active').next().addClass('active');
  }
}

function prevImg() {
  if ($('img.active').hasClass('first')) {
    $('img.active, i.active').removeClass('active');
    $('img.last, i.last').addClass('active');
  } else {
    $('img.active, i.active')
      .removeClass('active').prev().addClass('active')
  }
}

$(document).ready(
  function(){

    var countImgs = $('img').length;

    for(var x = 0; x < countImgs; x++) {
      var dotClass = 'fas fa-circle';

      if(x === 0) {
        dotClass += ' active first';
      }

      if(x === countImgs - 1) {
        dotClass += ' last'
      }

      $('<i></i>', {
        'class': dotClass
      }).appendTo('.nav');
    }

     //ridimenisionamento img
    $('.images > img').css('width', '1200px');


    $('.next').click(function(){
      nextImg();
    })

    $('.prev').click(function(){
      prevImg();
    })

    $(document).keydown(function(e){
      if(e.which === 39) {
        nextImg();
      }

      if(e.which === 37) {
        prevImg();
      }
    });

    $('.nav i').click(function() {
      $('.nav i').removeClass('active');
      $(this).addClass('active');
      var index = $('.nav i').index(this) + 1;
      $('img').removeClass('active');

      //img:nth-child(2)
      $('img:nth-child(' + index + ')').addClass('active');
    })






})//end ready
