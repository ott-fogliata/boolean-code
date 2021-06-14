
document.addEventListener('DOMContentLoaded', function () {
    
    
    var seconds = 10;
    var outputCountdown = document.querySelector('.countdown');
    var clock = setInterval(function () {

        console.log('step');
        outputCountdown.innerText = seconds;

        if (seconds === 0) {
            outputCountdown.innerText = 'Buon anno!'
            clearInterval(clock);
        } else {
            seconds--;
        }
        
    }, 1000);

    
    

    // soluzione con setTimeout che spegne l'interval 
    /*
    var seconds = 10;
    var outputCountdown = document.querySelector('.countdown');
    
    var clock = setInterval(function () {
        console.log('step');
        outputCountdown.innerText = seconds;
        seconds--;
    }, 1000);

    setTimeout(function () {
        outputCountdown.innerText = 'Buon anno!';
        clearInterval(clock);
    }, (seconds + 1) * 1000);
    // seconds varrà per lui sempre 10, perché quando è stato lanciato
    // seconds era semplicemente 10.
    */

});
