$( document ).ready(function() {
       $('.sidenav').sidenav();
       $('ul.grid li img ').width(document.body.clientWidth/6)
       $(window).resize(function(){
        $('ul.grid li img ').width(document.body.clientWidth/6)
       });
});