$( document ).ready(function() {
       $('.sidenav').sidenav();
       $('ul.grid li img ').width(document.body.clientWidth/8)
       $(window).resize(function(){
        $('ul.grid li img ').width(document.body.clientWidth/8)
       });
});