<?php
require('rb/rb.php');
R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
require 'vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;


$prevmoth = new DateTime();
$prevmoth->modify('-1 Months');
$thismoth = new DateTime();
$dep = [];
class User
{
    public $name;
    public $login;
    public $room;
    public $phone;
    public $email;
    public $title;
    public $dn;
}
$dn_osp = "OU=Users,OU=OSP,OU=Filials,DC=guss,DC=ru";
$dn_oms = "OU=Users,OU=OMS,OU=Filials,DC=guss,DC=ru";
function get_info_from_ad($dn)
{
         //LDAP server address
    $server = "ldap://10.78.4.105";
        //domain user to connect to LDAP
    $user = "GUSS\\tsapaevaa";
        //user password
    $psw = "123qwe!@#";
    $search = "CN=*";
    $ds = ldap_connect($server);
    ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ds, LDAP_OPT_REFERRALS, 0);
    $r = ldap_bind($ds, $user, $psw); 
        // performing search
    $sr = ldap_search($ds, $dn, $search);
    $data = ldap_get_entries($ds, $sr);
    return $data;
    ldap_close($ds);
}
foreach (get_info_from_ad($dn_osp) as $user) {
    $a = new User();
    $a->name = $user['displayname'][0];
    $a->login = $user['samaccountname'][0];
    $a->room = $user['physicaldeliveryofficename'][0];
    $a->phone = $user['ipphone'][0];
    $a->email = $user['mail'][0];
    $a->title = $user['title'][0];
    $a->dn = array_slice(explode(',', $user['distinguishedname'][0]), 0, sizeof(explode(',', $user['distinguishedname'][0])) - 5);
    foreach ($a->dn as $key => $value) {

        $a->dn[$key] = substr($value, 3);
        if (substr($a->dn[$key], 0, 1) == '0' || substr($a->dn[$key], 0, 1) == '1') {
            $a->dn[$key] = substr($a->dn[$key], 3);
        }
        if (substr($a->dn[$key], 0, 6) == 'Группа') {
            unset($$a->dn[$key]);
        }
    }
    $a->dn = array_reverse($a->dn);
    $a->dn = array_slice($a->dn, 0, sizeof($a->dn) - 1);
    if (sizeof($a->dn) == 0) {
        array_push($a->dn, 'Руководство');
    }
    $a->dn = array_unique($a->dn);
    if ($a->title != null)
        array_push($dep, $a);
}
foreach (get_info_from_ad($dn_oms) as $user) {
    $a = new User();
    $a->name = $user['displayname'][0];
    $a->login = $user['samaccountname'][0];
    $a->room = $user['physicaldeliveryofficename'][0];
    $a->phone = $user['ipphone'][0];
    $a->email = $user['mail'][0];
    $a->title = $user['title'][0];
    $a->dn = array_slice(explode(',', $user['distinguishedname'][0]), 0, sizeof(explode(',', $user['distinguishedname'][0])) - 5);
    foreach ($a->dn as $key => $value) {

        $a->dn[$key] = substr($value, 3);
        if (substr($a->dn[$key], 0, 1) == '0' || substr($a->dn[$key], 0, 1) == '1') {
            $a->dn[$key] = substr($a->dn[$key], 3);
        }
        if (substr($a->dn[$key], 0, 6) == 'Группа') {
            unset($$a->dn[$key]);
        }
    }

    $a->dn = array_reverse($a->dn);
    $a->dn = array_slice($a->dn, 0, sizeof($a->dn) - 1);
    if (sizeof($a->dn) == 0) {
        array_push($a->dn, 'Руководство');
    }
    $a->dn = array_unique($a->dn);
    if ($a->title != null)
        array_push($dep, $a);
}
foreach ($dep as $user) {
    $check = R::findOrCreate('users', array('name' => $user->name));
    $check->login = $user->login;
    $check->room = $user->room;
    $check->phone = $user->phone;
    $check->email = $user->email;

    $workshop = R::findOrCreate('workshops', array('name' => $user->dn[0]));
    $department = R::findOrCreate('departments', array('workshop' => $workshop->id, 'department' => $user->dn[1]));
    $position = R::findOrCreate('positions', array('department' => $department->id, 'position' => $user->title));

    $check->department = $department->id;
    $check->position = $position->id;
    $d = R::findOne('departments', 'id = ?', array($check->department));
    $w = R::findOne('workshops', 'id = ?', array($d->workshop));
    $check->workshop = $w->id;
    R::store($check);
}

$spreadsheet = new Spreadsheet();
$prjrow = [];
$projects = R::findAll('projects');
array_push($prjrow, 'ФИО / Проект');
foreach ($projects as $key => $project) {
    array_push($prjrow, $project->code . ' , ' . $project->p_name);
}
array_push($prjrow, 'Общий Итог [Часы]');
$spreadsheet->getActiveSheet()
    ->fromArray(
        $prjrow,   // The data to set
        null,        // Array values with this value will not be set
        'B3'
    );


$tablerows = [];
$user = R::findOne('users', 'name = ?', array(R::findOne('employees', 'id = ?', array($_GET['user']))->name));
if ($user->workshop == 14) {
    $workshops = R::findAll('workshops');
    $count = 4;
    foreach ($workshops as $workshop) {
        array_push($tablerows, $workshop->name);
        $count++;
        $departments = R::findAll('departments', 'workshop = ?', array($workshop->id));
        foreach ($departments as $key => $dep) {
            if ($dep->department != null) {
                array_push($tablerows, $dep->department);
            } else {
                array_push($tablerows, $workshop->name . " Без отдела");
            }
            $count++;
            $positions = R::findAll('positions', 'department = ?', array($dep->id));
            foreach ($positions as $key => $position) {
                array_push($tablerows, $position->position);
                $count++;
    
                $users = R::findAll('users', 'position = ?', array($position->id));
                foreach ($users as $key => $user) {
                    $user_id = R::findOne('employees', 'name = ?', array($user->name));
                    array_push($tablerows, $user->name);
                    $timerow = [];
                    $allusertime = 0;
                    foreach ($projects as $key => $project) {
                        $time = 0;
                        $strain = R::findAll('strain', 'project_id = ? and u_id = ? and query_for_del = 0 and work_date < ? and work_date >= ?', array($project->id, $user_id->id, $thismoth->format('Y-m-01 00:00:00'), $prevmoth->format('Y-m-00 00:00:00')));
                        foreach ($strain as $key => $work) {
                            $time += $work->time;
                            $allusertime += $work->time;
                        }
                        array_push($timerow, $time);
                    }
                    array_push($timerow, $allusertime);
                    $row = 'C' . $count;
                    $spreadsheet->getActiveSheet()
                        ->fromArray(
                            $timerow,   // The data to set
                            null,        // Array values with this value will not be set
                            $row         // Top left coordinate of the worksheet range where
                                //    we want to set these values (default is A1)
                        );
                    $count++;
                }
            }
            array_push($prjrow, 'Общий Итог [Часы]');
        }

    }
    array_push($tablerows, 'Общий Итог [Часы]');
    array_push($tablerows, 'Общий Итог [Денежные затраты за прошлый месяц]');
    array_push($tablerows, 'Общий Итог [Денежные затраты за все время]');
    $columnArray = array_chunk($tablerows, 1);
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $columnArray,   // The data to set
            null,        // Array values with this value will not be set
            'B4'         // Top left coordinate of the worksheet range where
                //    we want to set these values (default is A1)
        );
    $formulaarr = [];
    $totaltime = 0;
    $check = R::findOne('users', 'name = ?', array(R::findOne('employees', 'id = ?', array($work->u_id))->name));
    foreach ($projects as $key => $project) {
        $strain = R::findAll('strain', 'project_id = ? and query_for_del = 0', array($project->id));
        $coltime = 0;
        foreach ($strain as $key => $work) {
            $user = R::findOne('employees', 'id = ?', array($work->u_id));
            $user = R::findOne('users', 'name = ?', array($user->name));
            //if ($check->workshop == $user->workshop) {
            $coltime += $work->time;
            $totaltime += $work->time;
            //}
        }
        array_push($formulaarr, $coltime);
    }
    array_push($formulaarr, $totaltime);
    $row = 'C' . $count;
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $formulaarr,   // The data to set
            null,        // Array values with this value will not be set
            $row         // Top left coordinate of the worksheet range where
            //    we want to set these values (default is A1)
        );
    $count++;
    $moneypermonth = [];
    $allprice = 0;
    foreach ($projects as $key => $project) {
        $prise = 0;
        $strain = R::findAll('strain', 'project_id = ? and query_for_del = 0', array($project->id));
        foreach ($strain as $key => $line) {
            $user = R::findOne('employees', 'id = ?', array($line->u_id));
            $user = R::findOne('users', 'name = ?', array($user->name));
            //if ($check->workshop == $user->workshop) {
            $prise += (float)$line->time * (int)$user->price;
            $allprice += (float)$line->time * (int)$user->price;
            //}
        }
        array_push($moneypermonth, $prise);
    }
    array_push($moneypermonth, $allprice);
    $row = 'C' . $count;
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $moneypermonth,   // The data to set
            null,        // Array values with this value will not be set
            $row         // Top left coordinate of the worksheet range where
                //    we want to set these values (default is A1)
        );
    $count++;

    $allmoney = [];
    $total = 0;
    foreach ($projects as $key => $project) {
        $prise = 0;
        $strain = R::findAll(
            'strain',
            'project_id = ? and query_for_del = 0 ',
            array($project->id)
        );
        foreach ($strain as $key => $line) {
            $user = R::findOne('employees', 'id = ?', array($line->u_id));
            $user = R::findOne('users', 'name = ?', array($user->name));
            //if ($check->workshop == $user->workshop) {
            $prise += (float)$line->time * (int)$user->price;
            $total += (float)$line->time * (int)$user->price;
            //}
        }
        array_push($allmoney, $prise);
    }
    array_push($allmoney, $total);
    $row = 'C' . $count;
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $allmoney,   // The data to set
            null,        // Array values with this value will not be set
            $row         // Top left coordinate of the worksheet range where
                //    we want to set these values (default is A1)
        );
} else {
    $workshop = R::findOne('workshops', 'id = ?', array($user->workshop));
    $count = 4;
    array_push($tablerows, $workshop->name);
    $count++;
    $departments = R::findAll('departments', 'workshop = ?', array($workshop->id));
    foreach ($departments as $key => $dep) {
        if ($dep->department != null) {
            array_push($tablerows, $dep->department);
        } else {
            array_push($tablerows, $workshop->name . " Без отдела");
        }
        $count++;
        $positions = R::findAll('positions', 'department = ?', array($dep->id));
        foreach ($positions as $key => $position) {
            array_push($tablerows, $position->position);
            $count++;

            $users = R::findAll('users', 'position = ?', array($position->id));
            foreach ($users as $key => $user) {
                $user_id = R::findOne('employees', 'name = ?', array($user->name));
                array_push($tablerows, $user->name);
                $timerow = [];
                $allusertime = 0;
                foreach ($projects as $key => $project) {
                    $time = 0;
                    $strain = R::findAll('strain', 'project_id = ? and u_id = ? and query_for_del = 0 and work_date < ? and work_date >= ?', array($project->id, $user_id->id, $thismoth->format('Y-m-01 00:00:00'), $prevmoth->format('Y-m-00 00:00:00')));
                    foreach ($strain as $key => $work) {
                        $time += $work->time;
                        $allusertime += $work->time;
                    }
                    array_push($timerow, $time);
                }
                array_push($timerow, $allusertime);
                $row = 'C' . $count;
                $spreadsheet->getActiveSheet()
                    ->fromArray(
                        $timerow,   // The data to set
                        null,        // Array values with this value will not be set
                        $row         // Top left coordinate of the worksheet range where
                            //    we want to set these values (default is A1)
                    );
                $count++;
            }
        }
        array_push($prjrow, 'Общий Итог [Часы]');
    }

    array_push($tablerows, 'Общий Итог [Часы]');
    array_push($tablerows, 'Общий Итог [Денежные затраты за прошлый месяц]');
    array_push($tablerows, 'Общий Итог [Денежные затраты за все время]');
    $columnArray = array_chunk($tablerows, 1);
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $columnArray,   // The data to set
            null,        // Array values with this value will not be set
            'B4'         // Top left coordinate of the worksheet range where
                //    we want to set these values (default is A1)
        );
    $formulaarr = [];
    $totaltime = 0;
    $check = R::findOne('users', 'name = ?', array(R::findOne('employees', 'id = ?', array($work->u_id))->name));
    foreach ($projects as $key => $project) {
        $strain = R::findAll('strain', 'project_id = ? and query_for_del = 0 and work_date < ? and work_date >= ?', array($project->id, $thismoth->format('Y-m-01 00:00:00'), $prevmoth->format('Y-m-00 00:00:00')));
        $coltime = 0;
        foreach ($strain as $key => $work) {
            $user = R::findOne('employees', 'id = ?', array($work->u_id));
            $user = R::findOne('users', 'name = ?', array($user->name));
            if ($check->workshop == $user->workshop) {
                $coltime += $work->time;
                $totaltime += $work->time;
            }
        }
        array_push($formulaarr, $coltime);
    }
    array_push($formulaarr, $totaltime);
    $row = 'C' . $count;
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $formulaarr,   // The data to set
            null,        // Array values with this value will not be set
            $row         // Top left coordinate of the worksheet range where
            //    we want to set these values (default is A1)
        );
    $count++;
    $moneypermonth = [];
    $allprice = 0;
    foreach ($projects as $key => $project) {
        $prise = 0;
        $strain = R::findAll('strain', 'project_id = ? and query_for_del = 0 and work_date < ? and work_date >= ?', array($project->id, $thismoth->format('Y-m-01 00:00:00'), $prevmoth->format('Y-m-00 00:00:00')));
        foreach ($strain as $key => $line) {
            $user = R::findOne('employees', 'id = ?', array($line->u_id));
            $user = R::findOne('users', 'name = ?', array($user->name));
            if ($check->workshop == $user->workshop) {
                $prise += (float)$line->time * (int)$user->price;
                $allprice += (float)$line->time * (int)$user->price;
            }
        }
        array_push($moneypermonth, $prise);
    }
    array_push($moneypermonth, $allprice);
    $row = 'C' . $count;
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $moneypermonth,   // The data to set
            null,        // Array values with this value will not be set
            $row         // Top left coordinate of the worksheet range where
                //    we want to set these values (default is A1)
        );
    $count++;

    $allmoney = [];
    $total = 0;
    foreach ($projects as $key => $project) {
        $prise = 0;
        $strain = R::findAll(
            'strain',
            'project_id = ? and query_for_del = 0 ',
            array($project->id)
        );
        foreach ($strain as $key => $line) {
            $user = R::findOne('employees', 'id = ?', array($line->u_id));
            $user = R::findOne('users', 'name = ?', array($user->name));
            if ($check->workshop == $user->workshop) {
                $prise += (float)$line->time * (int)$user->price;
                $total += (float)$line->time * (int)$user->price;
            }
        }
        array_push($allmoney, $prise);
    }
    array_push($allmoney, $total);
    $row = 'C' . $count;
    $spreadsheet->getActiveSheet()
        ->fromArray(
            $allmoney,   // The data to set
            null,        // Array values with this value will not be set
            $row         // Top left coordinate of the worksheet range where
                //    we want to set these values (default is A1)
        );
}
$writer = new Xlsx($spreadsheet);
$writer->save('mothmetrick.xlsx');
$file = 'mothmetrick.xlsx';
header('Content-Type: image/jpeg');
header('Content-Disposition: attachment; filename="mothmetrick.xlsx"');
readfile($file);
?>