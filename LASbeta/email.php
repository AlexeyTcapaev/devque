<?php

        require('rb/rb.php');
       R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
        R::freeze(true);
        $users=R::findAll('employees');
        $sd = new DateTime();
        $ed = new DateTime();
        $sd->sub(new DateInterval('P6D'));
        foreach ($users as $user ) {
            $chekweekwork=R::findAll('strain','u_id = ?',array($user->id));
            if($chekweekwork==null)   mail($user->login_ad."@guov.ru", "Система учёта трудозатрат","Уважаемый(ая) ".$user->name."\n"."За прошедшую неделю,в период:"."\n".$sd->format('Y-m-d 00:00:00')." - ".$ed->format('Y-m-d 00:00:00')."\n"."Вы не ввели ни одного рабочего часа,убедительная просьба заполнить ваши рабочаи часы, заранее спасибо!"); 
            else 
            {
                $c=0;
            foreach ($chekweekwork as $value) {
               
                    if(($sd->format('Y-m-d 00:00:00') <= $value->work_date) && (($ed->format('Y-m-d 00:00:00') >= $user->value)))
                    {
                        if($c==0)
                        {
                        mail($user->login_ad."@guov.ru", "Система учёта трудозатрат", "Спасибо за потраченное время для работы с системой!"); 
                     
                        }
                        $c++;
                    }
                } 
                if($c==0)
                {
                    mail($user->login_ad."@guov.ru", "Система учёта трудозатрат","Уважаемый(ая) ".$user->name."\n"."За прошедшую неделю,в период:"."\n".$sd->format('Y-m-d 00:00:00')." - ".$ed->format('Y-m-d 00:00:00')."\n"."Вы не ввели ни одного рабочего часа,убедительная просьба заполнить ваши рабочаи часы, заранее спасибо!"); 
                  
                }
            }
        
        }
       
       
      
      

?>