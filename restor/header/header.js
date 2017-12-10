function check() {
  if (window.innerWidth <= 992) {
    document.querySelector(".mobile-phone ").style.display = "flex";
  }
  else
  {
    document.querySelector(".mobile-phone ").style.display = "none";
  }
}
jQuery(document).ready(function () {
  jQuery('.nav-logo').parent().css("display","none");
  check();
  jQuery(window).resize(check);
  jQuery('.sidenav').sidenav();
  jQuery("nav").sticky({
    topSpacing: 0
  });
  jQuery('nav').on('sticky-start', function() {  
    jQuery('.nav-logo').parent().fadeIn();
    jQuery('.nav-logo').parent().css("display","flex"); 
  });
  jQuery('nav').on('sticky-end', function() { jQuery('.nav-logo').parent().css("display","none"); });

  jQuery(".close").click(function () {
    jQuery('.sidenav').sidenav('close');
  });
});