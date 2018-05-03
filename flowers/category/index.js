$(document).ready(function() {
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
