$(document).ready(function () {
  $('.sidenav').sidenav();
  $("nav").sticky({
    topSpacing: 20
  });
  $('#sticky-wrapper').width($("nav").width());
});