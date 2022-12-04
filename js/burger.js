let burgerButton = document.querySelector('.burger__button');
let burger = document.querySelector('.burger');

burgerButton.addEventListener('click', function(){
    burgerButton.classList.toggle('burger__button-active')
	burger.classList.toggle('burger-active');
})