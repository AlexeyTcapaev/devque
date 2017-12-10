<?php
/*
Template Name: Из нашего окна
*/
?>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html;charset=utf-8">
    <title><?php bloginfo('name'); ?></title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
</head>

<body>
  <?php get_header(); ?>
  <main>
        <div class="paragraph sobor-hover">
            <div class="image">
                <div class="front"></div>
                <img src="http://restor/wp-content/uploads/2017/12/main.png">
            </div>
            <div class="text">
                <p>Построен в 1818—1858 гг. по проекту архитектора Огюста Монферрана. Cтроительство курировал император Николай
                    I, председателем Комиссии о построении собора был Карл Опперман. Творение Монферрана — четвёртый по счёту
                    храм в честь Исаакия Далматского, построенный на этом месте в Санкт-Петербурге.
                </p>
            </div>
        </div>
    </main>
  <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>

</html>