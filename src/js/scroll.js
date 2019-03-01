$(window).scroll(function(){
    if ($(window).scrollTop() > ($(window).height() - 56)) {
        $('.bottom-nav').addClass('bottom-nav--a');
    }
    else {
        $('.bottom-nav').removeClass('bottom-nav--a');
    }
});
