function getWeekDay(date) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  return days[date.getDay()];
}
function tophpdate(date)
{
   
    if(date.getDate() < 10)
        {
             var day = '0'+date.getDate();
        }
    else var day = date.getDate();
    var str=[date.getFullYear(),(date.getMonth()+1),day];
    return str;
    console.log(str);
}
function tophpdatestr(date)
{
   
    if(date.getDate() < 10)
        {
             var day = '0'+date.getDate();
        }
    else var day = date.getDate();
    var str=(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' 00:00:00').toString();
    return str;
}
var dayNames = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
function getWeekDay1(date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[date.getDay()];
}
function getWeek(date)
{
     var days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];
     return days[date];
}
function getdayforweek(date,n)
{
    if(n=='пн')
        {
         date.setDate(date.getDate());
        }
    if(n=='вт')
    {
           date.setDate(date.getDate()-1);
    }
    if(n=='ср')
        {
               date.setDate(date.getDate()-2);
        }
    if(n=='чт')
        {
               date.setDate(date.getDate()-3);
        }
    if(n=='пт')
        {
             date.setDate(date.getDate()-4);
        }
    if(n=='сб')
        {
              date.setDate(date.getDate()-5);
        }
    if(n=='вс')
        {
               date.setDate(date.getDate()-6);
        }
}

$(document).ready(function() {
    $("#loadinfo").click(function()
          {
                if(document.getElementById('wl').style.display=="none")
                    {
                          var date_log=$('#dtp1').val();
                    }
                else   var date_log=$('#dtp').val(); 
                var sdd = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]).toString(),(date_log[0]+date_log[1]).toString());
                var edd = new Date((date_log[17]+date_log[18]+date_log[19]+date_log[20]).toString(),(date_log[14]+date_log[15]).toString(),(date_log[11]+date_log[12]).toString());
                var sdd_to_php = [sdd.getFullYear(),sdd.setMonth(sdd.getMonth()-1),sdd.getDate()];
                var edd_to_php = [edd.getFullYear(),edd.getMonth(),edd.getDate()];
                var t;
                console.log(sdd.getFullYear(),sdd.getMonth(),sdd.getDate());
                var select_user;
                if($('*').is('.select_user_container'))
                if($("#selectNumber").val()!="Выберите сотрудника")
                select_user=$("#selectNumber").val();
                else select_user=document.querySelector('#navbarDropdownMenuLink').text;
              $('.dates').remove();
               $.ajax({
                  url:"ajax_main.php",
                  type:"GET",
                  data:({selectuser:select_user,sd:sdd.getTime(),ed:edd.getTime(),s:sdd_to_php,e:edd_to_php}),
                  dataType: "json",
                  success: regenerate   

              });

          });  
    var dropdown = document.getElementById("selectNumber");
     $('#add_obj').click(function(){
        document.querySelector('.overlay').style.display="block";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="flex";
    });
    $('.del_line').click(function(){
        document.querySelector('.overlay').style.display="block";
        document.querySelector('.add_obj').style.display="none";
        delobj=$(this).attr('id');
        $('#modal_text').text('Вы действительно хотите удалить обьект: '+$('p[name='+$(this).attr('id')+']').text());
    });
    $('#obj_cancel').click(function(){
        document.querySelector('.overlay').style.display="none";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="none";
    });
    $('#obj_confrim').click(function(){
        document.querySelector('.overlay').style.display="none";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="none";
        
                var date_log=$('#dtp2').val();
                var sdd = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]-1).toString(),(date_log[0]+date_log[1]).toString());
                var sdd_to_php = [sdd.getFullYear(),Number(date_log[3]+date_log[4]),sdd.getDate()];
                var select_user=document.querySelector('#navbarDropdownMenuLink').text;
              if(document.getElementById('wl').style.display=="none")
                        {
                              var date_log=$('#dtp1').val();
                        }
                    else   var date_log=$('#dtp').val(); 
                    var sdd1 = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]).toString(),(date_log[0]+date_log[1]).toString());
                    var edd1 = new Date((date_log[17]+date_log[18]+date_log[19]+date_log[20]).toString(),(date_log[14]+date_log[15]).toString(),(date_log[11]+date_log[12]).toString());
                    var sdd_to_php1 = [sdd1.getFullYear(),sdd1.setMonth(sdd1.getMonth()-1),sdd1.getDate()];
                    var edd_to_php1 = [edd1.getFullYear(),edd1.getMonth(),edd1.getDate()];
               $.ajax({
                  url:"add_obj.php",
                  type:"GET",
                  data:({selectuser:select_user,s:tophpdate(sdd),obj:$('#selectObj').val(),prj:$('#selectPrj').val(),hours:$('#dtp3').val(),sd:sdd_to_php1,ed:edd_to_php1}),
                  dataType: "json",
                  success: regenerate   

              });
       

    location.reload();
        
        
        
        
    });
    $('#overlay_cancel').click(function(){
        document.querySelector('.overlay').style.display="none";
    });
     $('#overlay_confrim').click(function(){
                var select_user;
                if($('*').is('.select_user_container'))
                    if($("#selectNumber").val()!=='Выберите сотрудника')
                        select_user=$("#selectNumber").val();
                        else select_user=document.querySelector('#navbarDropdownMenuLink').text;
                else select_user=document.querySelector('#navbarDropdownMenuLink').text;
         
                if(document.getElementById('wl').style.display=="none")
                    {
                          var date_log=$('#dtp1').val();
                    }
                else   var date_log=$('#dtp').val(); 
                var sdd = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]-1).toString(),(date_log[0]+date_log[1]).toString());
                var edd = new Date((date_log[17]+date_log[18]+date_log[19]+date_log[20]).toString(),(date_log[14]+date_log[15]-1).toString(),(date_log[11]+date_log[12]).toString());
                document.querySelector('.overlay').style.display="none";
               $.ajax({
                  url:"delete_object.php",
                  type:"GET",
                  data:({selectuser:select_user,sd:sdd.getTime(),ed:edd.getTime(),s:tophpdate(sdd),e:tophpdate(edd),deleted_object:delobj}),
                  dataType: "json",
                  success: regenerate   

              });
         location.reload();
    });   
    $( "#selectPrj" ).change(function() {
           $("#selectObj").empty()
        var select_prj=$('#selectPrj').val();
        console.log(select_prj);
        $.ajax({
                  url:"query.php",
                  type:"GET",
                  data:({sp:select_prj}),
                  dataType: "json",
                  success: addobjs   

              });
        function addobjs(request)
        {
             $('#selectObj').append('<option>Выберите объект</option>');
            for (var property in request) 
            {
                if (request.hasOwnProperty(property)) 
                {
                    var value = request[property];
                    $('#selectObj').append('<option>'+value+'</option>');
                }
               
            }
        }
        
        
    });
   $('.js-switch').onchange = function(){
       console.log("change");
   } 
    $("span[name='setting1']").click(function() {
        ch++;
        console.log("l");
        if(ch%2==0)
            {
                document.querySelector('.week_list').style.display="none";
                document.querySelector('.air_picker_wrapper').style.display="flex";
            }
        else 
            {
              document.querySelector('.week_list').style.display="flex";
               document.querySelector('.air_picker_wrapper').style.display="none";
            }
     
    });
       $('.datepicker-here').datepicker({
           clearButton:true
       });      
    if(document.getElementById('wl').style.display=="none")
    {
                          var date_log=$('#dtp1').val();
                    }
                else   var date_log=$('#dtp').val(); 
                var sdd = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]).toString(),(date_log[0]+date_log[1]).toString());
                var edd = new Date((date_log[17]+date_log[18]+date_log[19]+date_log[20]).toString(),(date_log[14]+date_log[15]).toString(),(date_log[11]+date_log[12]).toString());
                var sdd_to_php = [sdd.getFullYear(),sdd.setMonth(sdd.getMonth()-1),sdd.getDate()];
                var edd_to_php = [edd.getFullYear(),edd.getMonth(),edd.getDate()];
                var t;
                var select_user;
                if($('*').is('.select_user_container'))
                if($("#selectNumber").val()!="Выберите сотрудника")
                select_user=$("#selectNumber").val();
                else select_user=document.querySelector('#navbarDropdownMenuLink').text;
    
                $.ajax({
                  url:"ajax_main.php",
                  type:"GET",
                  data:({selectuser:select_user,sd:sdd.getTime(),ed:edd.getTime(),s:tophpdate(sdd),e:tophpdate(edd)}),
                  dataType: "json",
                  success: regenerate   

                });
    var delobj;
    var ch=1;
    var mass=[];
    var dropdown = document.getElementById("selectNumber");
    var now=new Date();
    var week = new Date();
    week.setDate(now.getDate()+7);
    getdayforweek(now,getWeekDay(now));
    var Switchery = require('switchery');
    var elem = document.querySelector('.js-switch');
    var init = new Switchery(elem,{color: '#3398db'});   
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-disable_obj'));

    elems.forEach(function(html) {
      var switchery = new Switchery(html,{color: '#3398db'});
    });
  function regeneratefunctions()
    {
        var dropdown = document.getElementById("selectNumber");
         $('.form-group').disabled=true;
          $("#loadinfo").click(function()
          {
                if(document.getElementById('wl').style.display=="none")
                    {
                          var date_log=$('#dtp1').val();
                    }
                else   var date_log=$('#dtp').val(); 
                var sdd = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]).toString(),(date_log[0]+date_log[1]).toString());
                var edd = new Date((date_log[17]+date_log[18]+date_log[19]+date_log[20]).toString(),(date_log[14]+date_log[15]).toString(),(date_log[11]+date_log[12]).toString());
                var sdd_to_php = [sdd.getFullYear(),sdd.setMonth(sdd.getMonth()-1),sdd.getDate()];
                var edd_to_php = [edd.getFullYear(),edd.getMonth(),edd.getDate()];
                var t;
                console.log(sdd.getFullYear(),sdd.getMonth(),sdd.getDate());
                var select_user;
                if($('*').is('.select_user_container'))
                if($("#selectNumber").val()!="Выберите сотрудника")
                select_user=$("#selectNumber").val();
                else select_user=document.querySelector('#navbarDropdownMenuLink').text;
               $.ajax({
                  url:"ajax_main.php",
                  type:"GET",
                  data:({selectuser:select_user,sd:sdd.getTime(),ed:edd.getTime(),s:sdd_to_php,e:edd_to_php}),
                  dataType: "json",
                  success: regenerate   

              });



          });  
    
    
    }
  function regenerate(request)
    {
            console.log(request);
            $('.dates').remove();
            $('.objects').remove();
            $('.table_container').append('<ul class="objects"><li><p id="table">Название проекта и обьекта</p></li>');
            var i=0;
            for (var property in request) 
            {
                if (request.hasOwnProperty(property)) 
                {
                    var value = request[property];
                    mass[i] = value;
                    $('.objects').append('<li class="obj '+value['o_id']+'" id="table"><div class="output_info"><div class="top"><p id="obj" name="'+value['o_id']+'">'+value['obj']+'</p></div><div class="key"><p id="code">'+value['prj']+'</p><p id="prj">'+value['code']+'</p></div></div><div class="options"><div class="switch_wrapper"><p>Скрыть</p><input type="checkbox" class="js-disable_obj " name="setting9"></div><input type="submit" class="date_sub del_line" value="Удалить объект" id="'+value['o_id']+'"></div></li>');
                    i++;           
                }
               
            }
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-disable_obj'));
        elems.forEach(function(html) {
          var switchery = new Switchery(html,{color: '#3398db'});
        });
        
        
        
        $('.objects').append('<li class="sett"><input type="submit" class="date_sub" id="add_obj" value="Добавить объект"><a href="#" class="sl">Кол-во скрытых:</a><p>Итого:</p></li></ul>');
        $('.table_container').append('<ul class="dates">');
        
                if(document.getElementById('wl').style.display=="none")
                    {
                          var date_log=$('#dtp1').val();
                    }
                else   var date_log=$('#dtp').val(); 
                var sdd = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]-1).toString(),(date_log[0]+date_log[1]).toString());
                var edd = new Date((date_log[17]+date_log[18]+date_log[19]+date_log[20]).toString(),(date_log[14]+date_log[15]-1).toString(),(date_log[11]+date_log[12]).toString());
        for(var i = sdd;i<=edd;i.setDate(i.getDate()+1))
            {
                $('.dates').append('<li class="column"><ul class="col_ul '+i.getDate()+'-'+(i.getMonth()+1)+'"'+'><li><p id="table">'+i.getDate()+'.'+(i.getMonth()+1)+' '+getWeekDay1(i)+'</p></li>');
                var ul='.'+i.getDate()+'-'+(i.getMonth()+1);
                var sum=0;
                console.log(mass.length);
                for(var j = 0;j < mass.length; j++)
                    {
                         var datesarr= Array();
                        for(var dd in mass[j]['dates'])
                            {
                            datesarr.push(mass[j]['dates'][dd]);
                           
                        if(datesarr.indexOf(tophpdatestr(i))!=-1)
                        {
                            sum+=Number(mass[j]['hours'][datesarr.indexOf(tophpdatestr(i))]);
                            $(ul).append('<li><p id="table">'+mass[j]['hours'][datesarr.indexOf(tophpdatestr(i))]+'</p></li>'); 
                        }
                        else  $(ul).append('<li><p id="table"></p></li>'); 
                            }
                        
                        
                    }
                $(ul).append('<li><p id="table">'+sum+'</p></li>');   
                $(ul).append('</ul></li'); 
            }
        
                
        $('.form-group').disabled=false;
            var dropdown = document.getElementById("selectNumber");
     $('#add_obj').click(function(){
        document.querySelector('.overlay').style.display="block";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="flex";
    });
    $('.del_line').click(function(){
        document.querySelector('.overlay').style.display="block";
        document.querySelector('.add_obj').style.display="none";
        delobj=$(this).attr('id');
        $('#modal_text').text('Вы действительно хотите удалить обьект: '+$('p[name='+$(this).attr('id')+']').text());
    });
    $('#add_obj').click(function(){
        document.querySelector('.overlay').style.display="block";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="flex";
    });
    $('#obj_cancel').click(function(){
        document.querySelector('.overlay').style.display="none";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="none";
    });
    $('#obj_confrim').click(function(){
        document.querySelector('.overlay').style.display="none";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="none";
        
                var date_log=$('#dtp2').val();
                var sdd = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]-1).toString(),(date_log[0]+date_log[1]).toString());
                var sdd_to_php = [sdd.getFullYear(),Number(date_log[3]+date_log[4]),sdd.getDate()];
                var select_user=document.querySelector('#navbarDropdownMenuLink').text;
              if(document.getElementById('wl').style.display=="none")
                        {
                              var date_log=$('#dtp1').val();
                        }
                    else   var date_log=$('#dtp').val(); 
                    var sdd1 = new Date((date_log[6]+date_log[7]+date_log[8]+date_log[9]).toString(),(date_log[3]+date_log[4]).toString(),(date_log[0]+date_log[1]).toString());
                    var edd1 = new Date((date_log[17]+date_log[18]+date_log[19]+date_log[20]).toString(),(date_log[14]+date_log[15]).toString(),(date_log[11]+date_log[12]).toString());
                    var sdd_to_php1 = [sdd1.getFullYear(),sdd1.setMonth(sdd1.getMonth()-1),sdd1.getDate()];
                    var edd_to_php1 = [edd1.getFullYear(),edd1.getMonth(),edd1.getDate()];
               $.ajax({
                  url:"add_obj.php",
                  type:"GET",
                  data:({selectuser:select_user,s:tophpdatestr(sdd),obj:$('#selectObj').val(),prj:$('#selectPrj').val(),hours:$('#dtp3').val(),sd:sdd_to_php1,ed:edd_to_php1}),
                  dataType: "json",
                  success: regenerate   

              });
            location.reload();
    
        
        
        
        
    });
    $('#overlay_cancel').click(function(){
        document.querySelector('.overlay').style.display="none";
    });
    
   
   
     $('#add_obj').click(function(){
        document.querySelector('.overlay').style.display="block";
        document.querySelector('.modalbox').style.display="none";
        document.querySelector('.add_obj').style.display="flex";
    });
   $('.js-switch').onchange = function(){
       console.log("change");
   } 
    $("span[name='setting1']").click(function() {
        ch++;
        console.log("l");
        if(ch%2==0)
            {
                document.querySelector('.week_list').style.display="none";
                document.querySelector('.air_picker_wrapper').style.display="flex";
            }
        else 
            {
              document.querySelector('.week_list').style.display="flex";
               document.querySelector('.air_picker_wrapper').style.display="none";
            }
     
    });
       $('.datepicker-here').datepicker({
           clearButton:true
       });
        return;  
    }   
});