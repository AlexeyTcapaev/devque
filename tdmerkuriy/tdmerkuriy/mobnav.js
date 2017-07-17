jQuery.noConflict(); 
jQuery(document).ready(function ($) {
var grad = 0;
    var cc = 0;
    jQuery('.mob_icon').click(function () 
                         {
        jQuery(this).css({transform: 'rotate(' + (grad+=90) + 'deg)'});
        cc++;
         if(cc%2!=0)
            {
                jQuery('#drop_menu').fadeIn();
                document.getElementById('drop_menu').style.display="flex";
                
            }
        else  jQuery('#drop_menu').fadeOut();

});

            var image = document.getElementById('mb_img');
            var downloadingImage = new Image();
            downloadingImage.onload = function()
            {
            image.src = this.src; 
            };
});