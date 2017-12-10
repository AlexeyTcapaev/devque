function check() {
  if (window.innerWidth <= 992) {
    document.querySelector(".mobile-phone ").style.display = "flex";
  }
  else
  {
    document.querySelector(".mobile-phone ").style.display = "none";
  }
}
$(document).ready(function () {
  jQuery('.nav-logo').parent().css("display","none");
  check();
  $(window).resize(check);
  $('.sidenav').sidenav();
  $("nav").sticky({
    topSpacing: 0
  });
  jQuery('nav').on('sticky-start', function() {  jQuery('.nav-logo').parent().css("display","flex"); });
  jQuery('nav').on('sticky-end', function() { jQuery('.nav-logo').parent().css("display","none"); });

  jQuery(".close").click(function () {
    $('.sidenav').sidenav('close');
  });
});