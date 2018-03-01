$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $("nav").sticky({
        topSpacing: 0
    });
    $('nav').on('sticky-start', function () {
        $("nav").css("background-color","rgba(39,57,159,1)")
        console.log("s")
    });
    $('nav').on('sticky-end', function () {
        $("nav").css("background-color","rgba(39,57,159,0)")
        console.log("e")
    });
});