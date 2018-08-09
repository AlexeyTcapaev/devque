$(document).ready(function () {
    var rotated = false;
    $.ajax({
        url: "InitUser.php",
        dataType: "json",
        data: ({

        }),
        success: function (request) {
            console.log(JSON.parse(request))
        }
    })
    $('.collapsible').collapsible();
    $('.tabs-nav').tabs();
    $('.tabs').tabs();
    $('.tabs').tabs('select', "test-swipe-1");
    $('.collapse-nav').click(function () {
        $('.tabs').tabs('updateTabIndicator');
        if ($('aside.nav').hasClass("hide"))
            $('aside.nav').removeClass("hide")
        else $('aside.nav').addClass("hide")
        document.querySelector('.collapse-nav').classList.toggle('rotated');
        var div = document.querySelector('.collapse-nav'),
            deg = rotated ? 0 : 180;

        div.style.webkitTransform = 'rotate(' + deg + 'deg)';
        div.style.mozTransform = 'rotate(' + deg + 'deg)';
        div.style.msTransform = 'rotate(' + deg + 'deg)';
        div.style.oTransform = 'rotate(' + deg + 'deg)';
        div.style.transform = 'rotate(' + deg + 'deg)';

        rotated = !rotated;

    });


});