$(document).ready(function() {
  $(".bouquets").click(function() {
    if ($("#bouquets").hasClass("grid")) $("#bouquets").removeClass("grid");
    else $("#bouquets").addClass("grid");
  });
  $(".modal").modal();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: false,
    autoplay: true
  });

  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();
  $(".sales .carousel").carousel();
});
