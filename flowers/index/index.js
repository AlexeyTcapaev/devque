$(document).ready(function() {
  $(".bouquets").click(function() {
 
    if ($("#bouquets").is(":visible")) {
      $('.dropdown-trigger').dropdown('close');
      console.log(1)
    } else {
      console.log(2)
      $('.dropdown-trigger').dropdown('open');
      $("#bouquets").addClass("grid");
    }
  });


  $(".aside-drop").click(function() {
 
    if ($("#bouquets-aside").is(":visible")) {
      $('.dropdown-trigger').dropdown('close');
      console.log(1)
    } else {
      console.log(2)
      $('.dropdown-trigger').dropdown('open');
      $("#bouquets-aside").addClass("grid");
    }
  });

  $(".modal").modal();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: false,
    autoplay: true
  });
  $(".dropdown-trigger").dropdown({
  
    onCloseEnd:function(){
      $("#bouquets").removeClass("grid")
    }
  });
  $(".sidenav").sidenav();
  $(".sales .carousel").carousel();
});
