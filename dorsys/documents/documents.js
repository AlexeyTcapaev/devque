$(document).ready(function(){
    $('.tabs').tabs();
    $('a.media').media({width:$('.list').width()/2,height:700});
    window.onresize = function(){
      console.log("!")
      $('a.media').media({width:$('.list').width()/2,height:700});
    }
  });
        