let box = document.getElementById('buttonUp')
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        box.classList.remove('button__top-hidden');
        setTimeout(function () {
            box.classList.remove('button__top-opacity');
        }, 20);
    } else {
        box.classList.add('button__top-opacity');    
        box.addEventListener('transitionend', function(e) {
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}