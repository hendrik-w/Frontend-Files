$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
        $('.titel').css({
                'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none' });
    }
    else {
        $('.titel').css({
                'box-shadow': ':0 2px 5px 0 rgba(0, 0, 0, 0.26)',
                '-moz-box-shadow' : '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
                '-webkit-box-shadow' : '0 2px 5px 0 rgba(0, 0, 0, 0.26)' });
    }
});
