<?php 
require('rb/rb.php');
R::setup('mysql:host=10.78.5.144;dbname=las','root','');
R::freeze(true);
echo '<pre>';
$view=R::exec("select `projects`.`p_name` AS `p_name`,`projects`.`code` AS `p_code`,`objects`.`o_name` AS `o_name`,`strain`.`time` AS `time`,(`strain`.`time` / 8) AS `load`,`strain`.`work_date` AS `work_date`,`employees`.`department_ad` AS `department_ad`,`employees`.`name` AS `name` from (((`strain` join `employees` on((`strain`.`u_id` = `employees`.`id`))) join `objects` on((`strain`.`o_id` = `objects`.`id`))) join `projects` on((`objects`.`project_id` = `projects`.`id`))) where (`strain`.`time` <> '') order by `strain`.`work_date`");
foreach($view as $v)
var_dump($v);
echo '</pre>';
