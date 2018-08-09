<?php

require('../rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
$ans = [];
$monday = new DateTime(date("Y-m-d 00:00:00", time() - (date("N") - 1) * 24 * 60 * 60));
$sunday = new DateTime(date("Y-m-d 00:00:00", time() - (-7 + date("N") - 1) * 24 * 60 * 60));
$interval = DateInterval::createFromDateString('1 day');
$period = new DatePeriod($monday, $interval, $sunday);
$projects = R::findAll('projects');
foreach ($projects as $project) {
    $project->label = $project->p_name;
    $project->data = [];
    $objects = R::findAll('objects', "project_id = ?", array($project->id));
    $toprj = [];
    foreach ($period as $dt) {
        $daysumm = 0;
        foreach ($objects as $obj) {

            $rows = R::findAll('strain', " o_id = ? and work_date = ? and query_for_del = ? and time > 0", array($obj->id, $dt->format('Y-m-d 00:00:00'), 0));
            foreach ($rows as $row) {
                $daysumm = (int)$daysumm + (int)$row->time;
            }

        }
        array_push($toprj, $daysumm);
    }
    $project->data = $toprj;
    if($project->data != 0)
    {
        array_push($ans,$project);
    }

}
echo json_encode($ans);
?>