$(document).ready(function () {
    // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
   var jqBar = $('#about');
    var jqBarStatus = true;
    $(window).scroll(function() {
         var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        
        
        if (scrollEvent && jqBarStatus) 
        { 
            var bar = new ProgressBar.Circle(circle2, {
  color: '#3c4761',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#dfe8ed', width: 8 },
  to: { color: '#30bae7', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+"%");
    }

  }
});
var bar1 = new ProgressBar.Circle(circle1, {
  color: '#3c4761',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#dfe8ed', width: 8 },
  to: { color: '#30bae7', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = Math.floor(circle.value() * 100);
     
    if (value === 0) {
      circle.setText('');
    } else 
    {
      circle.setText(value+"%");
    }
       

  }
});
            bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
           bar1.text.style.fontSize = '3vw';
           bar1.animate(0.40);  // Number from 0.0 to 1.0
           bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
           bar.text.style.fontSize = '3vw';
           bar.animate(1);  
           jqBarStatus = false;
        }
    });
    
});
    var grad = 0;
    var cc = 0;
    $('.mob_icon').click(function () 
                         {
        $(this).css({transform: 'rotate(' + (grad+=90) + 'deg)'});
        cc++;
         if(cc%2!=0)
            {
                $('#drop_menu').fadeIn();
                document.getElementById('drop_menu').style.display="flex";
                
            }
        else  $('#drop_menu').fadeOut();

});

            var image = document.getElementById('mb_img');
            var downloadingImage = new Image();
            downloadingImage.onload = function()
            {
            image.src = this.src; 
            };
 $('.tel_submit').click(function () 
{
         if($('.tel_input').val().length!==17)
             {
                downloadingImage.src = "attention.svg";
                 $('#mb_text').text("Введен некорректный номер, пожалуйста проверьте правильность ввода!");
             }
         else
             {
                 downloadingImage.src = "check.svg";
                 $('#mb_text').text("Спасибо за обращение! Ваша заявка будет обратотана и мы обязательно свяжемся с вами!");
             }
     
            
          
            
    
         $('.tel_input').val("");
     
     $('#ol').fadeIn();
     document.getElementById('ol').style.display="flex";
     setTimeout("$('#ol').fadeOut()", 2500);
       
     
});
