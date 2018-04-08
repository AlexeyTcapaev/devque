$(document).ready(function() {
  $(".modal").modal();
  if (document.documentElement.clientWidth <= 768) $("aside").sidenav();
  let fullheights = document.querySelectorAll(".full-height");
  let a = 1;
  let b = 3;
  for (let index = 0; index < fullheights.length; index++) {
    if (document.documentElement.clientWidth > 1024)
      a = $(fullheights[index]).index() / 2;
    else a = $(fullheights[index]).index();
    if (a <= 0) a = 1;
    fullheights[index].style.gridRow = a + "/" + (a + 2);
  }
});
