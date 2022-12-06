let burgerButton = document.querySelector('.burger__button')
let burger = document.querySelector('.burger')
let body = document.querySelector('body')

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('burger__button-active')
	burger.classList.toggle('burger-active')
    body.classList.toggle('overflow')
})