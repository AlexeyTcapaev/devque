$( document ).ready(function() {
    $('.portfolio-carousel').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        variableWidth: true,
        focusOnSelect: true,
      });
       $('.sidenav').sidenav();
});