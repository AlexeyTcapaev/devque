$(document).ready(function() {
  let fullheights = document.querySelectorAll(".full-height");
  let a = 1;
  let b = 3;
  for (let index = 0; index < fullheights.length; index++) {
    let a = $(fullheights[index]).index() / 2;
    if (a <= 0) a = 1;
    fullheights[index].style.gridRow = a + "/" + (a + 2);
  }
});
