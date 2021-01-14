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


$(document).ready(
  function(){

     //ridimenisionamento img
    $('.images > img').css(
      'width', '1200px'
    )


    $('.next').click(function(){
      //se img.active ha la classe 'last'
      if ($('img.active').hasClass('last')) {
      //alla img.active rimuovi la classe active
        $('img.active').removeClass('active');
      //all img.first aggiungi la classe active
        $('img.first').addClass('active');
      } else {
        $('img.active')
          .removeClass('active').next().addClass('active')
      }

    })

    $('.prev').click(function(){
      if ($('img.active').hasClass('first')) {
        $('img.active').removeClass('active');
        $('img.last').addClass('active');
      } else {
        $('img.active')
          .removeClass('active').prev().addClass('active')
      }

    })













})//end ready
