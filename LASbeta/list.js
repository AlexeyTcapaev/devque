function getWeekDay(date) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

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
           console.log(date);
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
function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  return dd + '.' + mm + '.' + date.getFullYear();
}
$(document).ready(function() 
{
     $("#ds_n").click(function()
          {
                
                var curr_day = $('#dtp').val()[0]+$('#dtp').val()[1];
                var curr_month = $('#dtp').val()[3]+$('#dtp').val()[4];
                var curr_year = $('#dtp').val()[6]+$('#dtp').val()[7]+$('#dtp').val()[8]+$('#dtp').val()[9];
                var d_p = new Date(curr_year, curr_month-1, curr_day-7);
                var d_v = new Date(d_p.getFullYear(),d_p.getMonth(),d_p.getDate()+6);
                console.log("d_p-"+d_p);
                console.log("d_v-"+d_v);
                document.getElementById('dtp').value=formatDate(d_p)+"-"+formatDate(d_v);
                var select_user;
                if($('*').is('.select_user_container'))
                select_user=$("#selectNumber").val();
               else select_user=$('#navbarDropdownMenuLink').val();
               
               $.ajax({
                  url:"ajax_main.php",
                  type:"POST",
                  data:({selectuser:select_user,edd:d_v,sdd:d_p}),
                  dataType: "json",
                  success: loadDataBD   

              });



          });
    
         $("#ds_v").click(function()
          {
                
                var curr_day = $('#dtp').val()[11]+$('#dtp').val()[12];
                var curr_month = $('#dtp').val()[14]+$('#dtp').val()[15];
                var curr_year = $('#dtp').val()[17]+$('#dtp').val()[18]+$('#dtp').val()[19]+$('#dtp').val()[20];
                var d_p = new Date(curr_year, curr_month-1, curr_day+7);
                var d_v = new Date(d_p.getFullYear(),d_p.getMonth(),d_p.getDate()+6);
                console.log("d_p-"+d_p);
                console.log("d_v-"+d_v);
                document.getElementById('dtp').value=formatDate(d_p)+"-"+formatDate(d_v);
                var select_user;
                if($('*').is('.select_user_container'))
                select_user=$("#selectNumber").val();
               else select_user=$('#navbarDropdownMenuLink').val();
               
               $.ajax({
                  url:"ajax_main.php",
                  type:"POST",
                  data:({selectuser:select_user,edd:d_v,sdd:d_p}),
                  dataType: "json",
                  success: loadDataBD   

              });



          });
});