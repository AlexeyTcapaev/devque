jQuery.noConflict();
jQuery(document).ready(function ($) {
 var image = document.getElementById('mb_img');
            var downloadingImage = new Image();
            downloadingImage.onload = function()
            {
            image.src = this.src; 
            };
jQuery('.tel_submit').click(function () 
{
         if(jQuery('.tel_input').val().length!==17)
             {
                 downloadingImage.src = "/wp-content/themes/tdmerkuriy/attention.svg";
                 jQuery('#mb_text').text("Введен некорректный номер, пожалуйста проверьте правильность ввода!");
             }
         else
             {
                 downloadingImage.src = "/wp-content/themes/tdmerkuriy/check.svg";
                 jQuery('#mb_text').text("Спасибо за обращение! Ваша заявка будет обратотана и мы обязательно свяжемся с вами!");
             }
     
            
          
            
    
         jQuery('.tel_input').val("");
     
     jQuery('#ol').fadeIn();
     document.getElementById('ol').style.display="flex";
     setTimeout("jQuery('#ol').fadeOut()", 2500);
       
     
});
});
    