jQuery.noConflict();
jQuery(document).ready(function ($) {
    jQuery('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        jQuery('html,body').stop().animate({ scrollTop: $(d).offset().top-200 }, t);
    });
});