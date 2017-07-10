$(document).ready(function(){
    
     document.getElementById("s_b").style.background="url('content/search_1.svg')";
     document.getElementById("s_b").style.backgroundRepeat="no-repeat";
     document.getElementById("s_b").style.backgroundSize="contain";
     $('.search').click(function(event){
        document.getElementById("s").style.background="white";
       document.getElementById("s").style.color="#202e48";
       document.getElementById("head_search_form").style.background="white";
         document.getElementById("s_b").style.background="url('content/search_2.svg')";
          document.getElementById("s_b").style.backgroundRepeat="no-repeat";
                  document.getElementById("s_b").style.backgroundSize="contain";
       
    });
     $('body').click(function(event){
         if(event.target!=document.getElementById("s"))
             {
                
                document.getElementById("s").style.background="#192438";
               document.getElementById("s").style.color="rgba(255,255,255,1)";
                   document.getElementById("head_search_form").style.background="#192438";
                  document.getElementById("s_b").style.background="url('content/search_1.svg')";
                   document.getElementById("s_b").style.backgroundRepeat="no-repeat";
                  document.getElementById("s_b").style.backgroundSize="contain";
             }
       
    });
    particlesJS.load('particles-js','/bizakula/js/particles/particles.json',function(){
        console.log('callback - particle-js')
    })
     
    
});