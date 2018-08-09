<?php
require_once('rb/rb.php');
if (!R::testConnection()) {
    R::setup('mysql:host=10.78.5.234;dbname=las', 'las', 'laspass');
    R::freeze(true);
    $au = R::findOne('employees', "`login_ad` = ?", array(str_replace("GUSS\\", "", $_SERVER['REMOTE_USER'])));
    $_SESSION['adm'] = $au->role;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <!--External Styles -->
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
    <link href="select2.css" rel="stylesheet" />
    <link rel="stylesheet" href="main1.css">
    <link rel="stylesheet" href="materialize.css">
    <link rel="stylesheet" href="nouislider.css"/>
    <title>Система учёта трудозатрат</title>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
</head>

<body>
        <ul id="slide-out" class="side-nav">
                <li><div class="user-view">
                  <div class="background">
                    <img src="images/office.jpg">
                  </div>
                  <a href="#!user"><img class="circle" src="<?php echo 'photo/' . str_replace("GUSS\\", "", $_SERVER['REMOTE_USER']) . '.jpg'; ?>"></a>
                  <a href="#!name"><span class="white-text name"></span></a>
                  <a href="#!email"><span class="white-text email"></span></a>
                </div></li>
                <li><a href="#!" class="position"></a></li>              
                    <li><div class="divider"></div></li>
                <li><a href="#!"  class="department_ad"></a></li>
                <li>      <?php if ($au->role == '2' || $au->role == '4') { ?>
                  <a href="newmetrick.php?user=<?php echo $au->id; ?>"><span class="">Выгрузка</span></a>
                  <?php 
                } ?></li>
                <li>
                    <ul id="tabs-swipe-demo" class="tabs">
                        <li class="tab col s3"><a href="#test-swipe-1">Форма обратной связи</a></li>
                        <li class="tab col s3"><a class="active" href="#test-swipe-2">Ответы на вопросы</a></li>
                    </ul>
                    <div id="test-swipe-1" class="col s12 tabdiv">
                        <div class="row sss">
                        
                            <div class="col s12 s_t">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">textsms</i>
                                    <input type="text" id="autocomplete-input" class="autocomplete7">
                                    <label for="autocomplete-input">Тема Обращения</label>
                                </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                <label for="textarea1">Сообщение</label>
                                </div>
                            </div>
                            <a class="waves-effect waves-light btn send_treat">Отправить</a>
                            </div>
                        
                        </div>
                    </div>
                    <div id="test-swipe-2" class="col s12 tabdiv">
                        <div class="row faqcont">
                                <div class="col s12">
                                   <!-- <div class="input-field col s12">
                                        <i class="material-icons prefix">textsms</i>
                                        <input type="text" id="autocomplete-input" class="autocomplete">
                                        <label for="autocomplete-input">Тема обращения</label>
                                    </div>-->
                                </div>
                                <ul class="collapsible cl" data-collapsible="expandable">
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Зачем это нужно?</div>
                                  <div class="collapsible-body"><span>Эти данные необходимы для расчета эффективности работы каждого отдела.</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Сколько часов должно быть в сумме за день?</div>
                                  <div class="collapsible-body"><span>При текущем трудовом распорядке дня с 9:00 до 18:00 (в пятницу до 16:45) и обедом в 45 минут
фактически нужно было бы заполнять в пн-чт 8,25 часов, а в пятницу 7 часов.
<br><br>Чтобы упростить отчетность принимаем, что с пн по пт должно быть в итого 8 часов при полном рабочем дне без переработок.
</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Как заполнять переработки?</div>
                                  <div class="collapsible-body"><span>В случае переработок в сумме за день должно получиться больше 8 часов.</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>С какой точностью заполнять данные?</div>
                                  <div class="collapsible-body"><span>Точность до 0,5 часа вполне достаточна.</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Что делать если нет нужного объекта?</div>
                                  <div class="collapsible-body"><span>Сообщить руководителю.</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Куда мне записать задачу на 15 минут?</div>
                                  <div class="collapsible-body"><span>Такую задачу можно записать в проект, на который ушло больше всего времени за день.</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Как учитываются отпуск, пропуск по болезни и другим причинам?</div>
                                  <div class="collapsible-body"><span>Для учёта пропуска в списке проектов нужно выбрать «Пропуск»
                                Далее в зависимости от причины в списке объектов выбирается<br>
                                «Отпуск»<br>
                                «Больничный»<br>
                                «Другое» - выбирается, если ни одна из причин не подходит.<br>
                                «В счет отработанного времени»<br>
                                «За свой счёт»<br>
                                В таблице, напротив выбранной причины ставится 8 часов за каждый пропущенный день, либо другое фактическое значение пропущенных часов.
                                </span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Как получить доступ к редактированию данных других сотрудников?</div>
                                  <div class="collapsible-body"><span>Обратиться к руководителю.</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Я веду проект в целом, координирую и контролирую сразу несколько объектов по проекту, как мне это учесть?</div>
                                  <div class="collapsible-body"><span>Такие трудозатраты записываются в объект «Администирование», который есть в каждом проекте.</span></div>
                                </li>
                                <li>
                                  <div class="collapsible-header hh"><i class="material-icons">description</i>Я занимаюсь организацией работы отдела, как мне учитывать свои трудозатраты?</div>
                                  <div class="collapsible-body"><span>Для начальников отделов и руководителей создан специальный проект «Руководство и организация работы», а записи в объекты производятся, исходя из основных функций руководителя:<br>
                                «Планирование» – планирование работы отдела, составление графиков проектирования и т.п.<br>
                                «Администрирование» - подготовка и выдача заданий в работу, промежуточный контроль выполнения работ, отчётность по работе отдела, и другие задачи касающиеся организации работы.<br>
                                «Совещания и коммуникация» - участие в совещаниях и переговорах, и т.п.<br>
                                «Контролирующая» - приём и проверка выполненных работ.
                                </span></div>
                                </li>
                              </ul>
                             
     
                        </div>
                    </div>    
                </li>
              </ul>
              
        <nav>
                <div class="nav-wrapper">
                  <a href="#!" class="brand-logo">Система учёта трудозатрат</a>
                  <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down">
                    <li><a href="#" data-activates="slide-out" class="user-info"></a></li>
                    <li><a href="http://<?php echo $_SERVER['SERVER_NAME']; ?>/caller/" data-activates="slide-out" class="views">Телефонный справочник</a></li>
                    <li v-if="user.role == 4"><a href="users/index.html" data-activates="slide-out" class="instructions">Сотрудники</a></li>
                    <li><a href="http://<?php echo $_SERVER['SERVER_NAME']; ?>/views/" data-activates="slide-out" class="views">Представление</a></li>
                    <li><a href="http://<?php echo $_SERVER['SERVER_NAME']; ?>/instructions/" data-activates="slide-out" class="instructions">Поручения</a></li>
                    <li class="active"><a href="main.php" data-activates="slide-out" class="instructions">Трудозатраты</a></li>
                    <li><a class="waves-effect waves-teal btn-flat white" href="away.php">Выйти</a></li>
                  </ul>
                  <ul class="side-nav" id="mobile-demo">
                    <li><a href="#" data-activates="slide-out" class="user-info"><?php echo $_SESSION['name']; ?></a></li>
                    <li><a href="http://<?php echo $_SERVER['SERVER_NAME']; ?>/instructions/" data-activates="slide-out" class="instructions">Поручения</a></li>
                    <li><a href="main.php" data-activates="slide-out" class="instructions">Трудозатраты</a></li>
                   
                    <li><a class="waves-effect waves-teal btn-flat">Выйти</a></li>
                  </ul>
                </div>
        </nav>
    <div id="app">
            <div id="modal4" class="modal bottom-sheet">
                        <div class="modal-content">
                        
                        <h4>Добавление нового проекта</h4>
                            <div class="input-field col s12 projects">
                        
                            <input v-once type="text" id="autocomplete-input" class="autocomplete4">
                            <label for="autocomplete-input">Проект</label>
                            </div>

                            <div class="input-field col s12 projects">
    
                            <input v-once type="text" id="autocomplete-input" class="autocomplete5">
                            <label for="autocomplete-input">Шифр</label>
                            </div>

                            <div class="input-field col s12 projects">
    
                            <input v-once type="text" id="autocomplete-input" class="autocomplete6">
                            <label for="autocomplete-input">Обьект</label>
                            </div>
                            
                        </div>
                        <div class="modal-footer">
                        <a @click="SendToBase()" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Подтвердить</a>
                        </div>
                </div>
             

                <div id="modal2" class="modal">
                    <div class="modal-content">
                    <h4>Вы уверены что хотите удалить обьект:</h4>
                    <p>{{DItem[0].prj+" - "+DItem[0].obj}}</p>
                    </div>
                    <div class="modal-footer">
                    <a @click="DelItem()" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Подтвердить</a>
                    </div>
                </div>

                <div id="modal1" class="modal bottom-sheet">
                <div class="modal-content">
                
                <h4>Выберите объект и проект для добавления</h4>
                    <div class="input-field col s12 projects">
                   
                    <input v-once type="text" id="autocomplete-input" class="autocomplete1">
                    <label for="autocomplete-input">Выбрать проект</label>
                    </div>
                    <div class="input-field col s12 projects">
                 
                    <input v-once type="text" id="autocomplete-input" class="autocomplete2">
                    <label for="autocomplete-input">Выбрать объект проекта</label>
                    </div>
                </div>
                <div class="modal-footer">
                <a @click="AddLine()" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Подтвердить</a>
                </div>
            </div>

            <div id="modal3" class="modal bottom-sheet">
                <div class="modal-content">
                <h4>Отменить скрытие</h4>
                <div class="input-field col s12 showed">
                    <i class="material-icons prefix">add_circle</i>
                    <input v-once type="text" id="autocomplete-input" class="autocomplete3">
                    <label for="autocomplete-input">Выбрать скрытый объект</label>
                    </div>
                </div>
                <div class="modal-footer">
                <a @click="RetToShow()" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Подтвердить</a>
                </div>
            </div>
             
        
        <div class="date-select">
        <?php if ($_SESSION['adm'] == 1 || $_SESSION['adm'] == 2)
            echo '
        <div class="input-field col s12 users">
                <i class="uu material-icons prefix">account_circle</i>
                <input v-once type="text" id="autocomplete-input" class="autocomplete">
                <label for="autocomplete-input">Выбрать сотрудника</label>
            </div>';
        ?>
            <div class="dates">
                    <a class="waves-effect waves-light btn" id="left" @click="leftdata" title="Перейти на предыдущую неделю" >Назад</a>
                    <input type="text" id="dates" disabled :value="dateline">
                    <a class="waves-effect waves-light btn" id="right" @click="rightdata" title="Перейти на следующую неделю">Вперед</a>
                    <a class="waves-effect waves-light btn" id="nowWeek" @click="nowWeek" title="Перейти на текущую неделю">Текущая неделя</a>
            </div>
                </div>
               
                <div id="test-slider"></div>
        <div class="table_container">
        <ul class="objects">
            <li><p id="table">Название проекта и обьекта</p></li>
            <li v-for="(r,key) in list" id="table" class="click-to-toggle" >
                    <div class="fixed-action-btn horizontal click-to-toggle">
                            <a id="settings_b" class="black btn-floating waves-effect waves-teal btn-flat" title="Действия с объектом">
                              <i class="material-icons">settings</i>
                            </a>
                            <ul>
                            <?php if ($_SESSION['adm'] == 1 || $_SESSION['adm'] == 2)
                                echo '<li><a class="btn-floating red modal-trigger" @click="BindItem(key)" href="#modal2" title="Удалить"><i class="material-icons">delete</i></a></li>' ?>
                              <li><a class="btn-floating yellow darken-1" @click="HideItem(key)" title="Скрыть"><i class="material-icons">remove_red_eye</i></a></li>
                            </ul>
                          </div>
                <div class="output_info">
                    <div class="top">
                        <p id="obj" name="1">{{r.obj}}</p>
                    </div>
                    <div class="key">
                        <p id="code">{{r.prj}}</p>
                        <p id="prj">{{r.code}}</p>
                    </div>
                </div>
            </li>
            <li class="sett">
                <a id="addd" @click="Reset()" class="btn-floating waves-effect waves-teal btn-flat modal-trigger" href="#modal1" title="Добавить объект"><i class="material-icons">add</i></a>    
                <?php 
                if ($_SESSION['adm'] == 2) {
                    echo '<a id="addd" @click="NewPrj()" class="black btn-floating waves-effect waves-teal btn-flat modal-trigger" href="#modal4" title="Добавить новый объект"><i class="material-icons">playlist_add</i></a>';
                }
                ?>
                <a @click="Showed()" class="black btn-floating waves-effect waves-teal btn-flat modal-trigger" href="#modal3" title="Отобразить скрытые объекты"><i class="material-icons">remove_red_eye</i></a><div v-if="hl > 0" class="hideCount">{{hl}}</div>
            </li>
        </ul>
        <ul class="dates">
            <li class="column" v-for="(date,key,index) in daterange" >
                <ul class="col_ul">
                    <li>
                        <p id="table">{{date.getDate()+'.'+(date.getMonth()+1)}}<br>{{getWeekDay(date)}}</p>
                    </li>
                    <li v-for="(r,key,index) in list">
                        <input @click="Note(r,r.dates.indexOf(tophpdatestr(date)))" onkeyup="return proverka(this);"  @input="ChekValue($event,key,r.dates.indexOf(tophpdatestr(date)))" id="table" autocomplete="off" v-if="tophpdatestr(date)==r.dates[r.dates.indexOf(tophpdatestr(date))]" @blur="InputHours($event,r,tophpdatestr(date))" v-model="r.hours[r.dates.indexOf(tophpdatestr(date))]">
                        <input @click="Note(r,r.dates.indexOf(tophpdatestr(date)))" onkeyup="return proverka(this);"  @input="ChekValue($event,key,r.dates.indexOf(tophpdatestr(date)))"  id="table" autocomplete="off" v-else="tophpdatestr(date)==r.dates[0]" @blur="InputHours($event,r,tophpdatestr(date))" >
                    </li>
                    <li>
                        <p id="table" v-if="Hide[tophpdatestr(date)] > 0">{{Summ[key]+' ('+Hide[tophpdatestr(date)]+')'}}</p>
                        <p id="table" v-else="Hide[tophpdatestr(date)] > 0">{{Summ[key]}}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    </div>
    

    <script src="jquery-3.2.1.min.js"></script>
    <script src="mask.js"></script>
    <script src="materialize.js"></script>
    <script src="vue.js"></script>
    <script src="v-mask.min.js"></script>
    <script src="nouislider.js"></script>
    <script src="jquery.materialize-autocomplete.js"></script>
    <script src="mainapp.js"></script>
    
</body>

</html>
