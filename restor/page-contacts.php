<?php
/*
Template Name: Контакты
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
        <div class="main-wrapper">
            <div class="map">
                <iframe src="https://yandex.ru/map-widget/v1/-/CBaK5OWs9A" width="100%" height="400" frameborder="0"></iframe>
            </div>
            <div class="contact-info">
                <h2>
                    <a href="https://www.google.ru/maps/place/59%C2%B055'59.0%22N+30%C2%B015'24.6%22E/@59.93307,30.25682,19z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0"
                        target="_blank">Васильевский остров, 26 линия,
                        <br> дом 15, корп. 2, 15-й этаж</a>
                </h2>
                <h5>Просим при себе иметь любой документ, удостоверяющий личность. Спасибо. Надеемся на понимание</h5>
                <a>
                    <h5>E-mail: iloverestoran@mail.ru</h5>
                </a>
            </div>
        </div>
    </main>
  <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>

</html>