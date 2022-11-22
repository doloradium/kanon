let buttonUp = document.getElementById('buttonUp')

window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        buttonUp.classList.remove('hidden')
        setTimeout(function() {
            buttonUp.classList.remove('opacity-0')
        }, 10)
    } else {
        buttonUp.classList.add('opacity-0')
    }
}