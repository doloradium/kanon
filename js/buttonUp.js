let buttonUp = document.getElementById('buttonUp')
let buttonContacts = document.getElementById('buttonContacts')

function buttonApper(button) {
    if (document.documentElement.scrollTop > 20) {
        button.classList.remove('hidden')
        setTimeout(function() {
            button.classList.remove('opacity-0')
        }, 10)
    } else {
        button.classList.add('opacity-0')
    }
}

addEventListener('scroll', (event) => {
    buttonApper(buttonUp)
    buttonApper(buttonContacts)
});