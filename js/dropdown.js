let dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach(function(dropdownSelector) {
    dropdownSelector.addEventListener('mouseenter', () => {
        dropdownButton = dropdownSelector.firstElementChild
        dropdownList = dropdownSelector.lastElementChild
        if (dropdownList.classList.contains('hidden')) {
            dropdownList.classList.remove('hidden')
            setTimeout(function() {
                dropdownList.classList.remove('opacity-0');
            }, 500)
        }
    })
    
// с первой частью проблем нет.
// но как мне сделать так, чтобы вторая часть работала только
// при окончании анимации первой части 

    dropdownSelector.addEventListener('mouseout', () => {
        if (dropdownList.classList.contains('hidden') == false) {
            dropdownList.classList.add('opacity-0')
            setTimeout(function() {
                dropdownList.classList.add('hidden');
            }, 500)
        }
    })
})


