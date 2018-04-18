$(document).ready(function() {
 
  var rot = 180;
  $(".dropdown-trigger").click(function() {
    if (rot === 180) {
      rot = 0;
    } else rot = 180;
    $(".bouquets i").css("-webkit-transform", "rotate(" + rot + "deg)");
  });
  $(".modal").modal();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });
  $(".dropdown-trigger").dropdown({
    belowOrigin: true
  });
  $(".button-collapse").sideNav();
  $(".sales .carousel").carousel({
    numVisible: 3
  });
});
