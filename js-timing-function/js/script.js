/**
 * 
 * funzioni anonime
 * asyncronia
 * timing function
 */


// document ready => diciamo al js di eseguire il codice, 
// solo dopo l'evento di DOMContentLoaded; e il tutto lo 
// eseguiamo all'interno di una funzione anonima.
document.addEventListener('DOMContentLoaded', function () {

    var buttonTest = document.getElementById('example-button');
    var buttonTest2 = document.getElementById('example-button2');

    // la function in questo click è definita una funzione ANONIMA.
    buttonTest.addEventListener('click', function () {
        console.log('Click!')
    });

    function clickExe() {
        console.log('Questo è un click in una funzione con un nome.')
    }

    // ecco come eseguire un event listener con una funzione che abbia
    // un nome ben preciso
    buttonTest2.addEventListener('click', clickExe);

    // ma quando viene realmente eseguito il codice? al click!
    // viene eseguito "dopo", prenotato prima, ma eseguito dopo.
    console.log('CIAONE');

    // ------------------ timing function -------------------------------

    console.log('prenoto il setTimeout');

    setTimeout(function () {
        console.log('SetTimeout inizio esecuzione');
        //document.getElementsByClassName('newsletter-modal')[0].style.display = 'block';
        var modal = document.querySelector('.newsletter-modal');
        var closeButton = document.querySelector('.newsletter-modal .close');
        modal.style.display = 'block';
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        })
        // alternativa querySelectorAll(); ma torna la lista
    }, 2000); //5s


    // eseguiamo un setInterval ogni secondo, 
    // ma se l'utente clicca sul pulsante "STOP", 
    // cancelleremo il loop setInterval.

    var intervallo = setInterval(function () {
        console.log('intervallo');
    }, 500); // sempre in ms (mezzo secondo)

    var stopButton = document.querySelector('.stop-interval');
    stopButton.addEventListener('click', function () {
        console.log('STOP LOOP')
        clearInterval(intervallo);
    })

});