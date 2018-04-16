$(document).ready(function() {
  $(".bouquets").click(function() {
 
    if ($("#bouquets").is(":visible")) {
      console.log(1)
    } else {
      console.log(2)
      $("#bouquets").addClass("grid");
    }
  });
  $(".modal").modal();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: false,
    autoplay: true
  });

  $(".dropdown-trigger").dropdown({
    belowOrigin: true,
    onCloseEnd:function(){
      $("#bouquets").removeClass("grid")
    }
  });
  $(".sidenav").sidenav();
  $(".sales .carousel").carousel();
});
