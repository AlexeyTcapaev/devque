if (document.all) {
    console.log("!");
    var elem = document.querySelector(".rest-wrapper");
    document.querySelector("main").removeChild(elem);
}
jQuery(document).ready(function() {

    jQuery('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
   
      
});
