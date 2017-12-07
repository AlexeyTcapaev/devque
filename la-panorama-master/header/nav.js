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
  check();
  $(window).resize(check);
  $('.sidenav').sidenav();
  $("nav").sticky({
    topSpacing: 0
  });
  jQuery(".close").click(function () {
    $('.sidenav').sidenav('close');
  });
});