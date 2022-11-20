(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.button__top').fadeIn();
        } else {
            $('.button__top').fadeOut();
        }
    });
    $('.button__top').click(function() {
        $('body, html').animate({scrollTop: 0}, 0);
    });
});