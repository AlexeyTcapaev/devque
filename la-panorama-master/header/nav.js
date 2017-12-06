$(document).ready(function(){
    $('.sidenav').sidenav();
    $("nav").sticky({topSpacing:0});
    jQuery( ".close" ).click(function() {
      $('.sidenav').sidenav('close');
    });
  });