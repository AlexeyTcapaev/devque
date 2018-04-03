$(document).ready(function () {
    $('.user-panel').sidenav();
    var aside = $("aside.user-panel").width();
    $('main.container').css({
        "padding-top": $('nav').height()
    });
    $(window).resize(function () {
        var aside = $("aside.user-panel").width();
        $('main.container').css({
            "padding-top": $('nav').height()
        });
    });
    if ($(window).width() > 800) {
        $(".user-nav").sticky({
            topSpacing: $('nav').height() + 30,
            widthFromWrapper: true
        });
        $('.user-nav').on('sticky-start', function () {
            $("#sticky-wrapper").width(aside);
        });
    }
});