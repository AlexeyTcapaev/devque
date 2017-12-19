$(document).ready(function () {
    $('.collapsible').collapsible({
        accordion: false
    });
    var instance = M.Collapsible.getInstance(document.querySelector('.collapsible'));
    $("li.categories").hover(
        function () {
            if ($(this).find('.collapsible-body span').text() !== "") {
                instance.open($(this).index());               
            }
        },
        function () {
           
            instance.close($(this).index());
        }
    );
    $('nav').on('sticky-start', function () {
        document.querySelector('nav').style.backgroundColor = 'rgba(0, 209, 255, 1)';
    });
    $('nav').on('sticky-end', function () {
        document.querySelector('nav').style.backgroundColor = 'rgba(0, 209, 255, 0.8)';
    });
});