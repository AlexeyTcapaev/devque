<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <title><?php bloginfo('name') ?></title>
    <?php wp_head(); ?>
</head>
<body>
    <nav class="top_nav">
        <div class="logo_container">
            <img src="<?php bloginfo('template_url') ?>/logo.svg ">
            <div>
                <h1 class="name1">Торговый дом</h1>
                <h1 class="name2">"Меркурий"</h1>
            </div>
        </div>
        <!--<div class="nav_buttons">-->
                <?php wp_nav_menu( array(
                    'theme_location' => 'menu',
                    'menu'            => '', 
                    'container'       => 'false', 
                    'container_class' => '', 
                    'container_id'    => '',
                    'menu_class'      => 'nav_buttons', 
                    'menu_id'         => '',
                    'echo'            => true,
                    'fallback_cb'     => 'wp_page_menu',
                    'before'          => '',
                    'after'           => '',
                    'link_before'     => '',
                    'link_after'      => '',
                    'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    'depth'           => 0,
                    'walker'          => '',

)); ?>
            
            
            
            <!--<a class="link_type1" id="a1" href="#about">О нас</a>
            <a class="link_type1" id="a2" href="#pruf">Наши приемущества</a>
            <a class="link_type2" id="a3" href="#call">Заказать обратный звонок!</a>-->
        <!--</div>-->
    </nav>
      <nav class="top_nav_modile">
        <div class="logo_container_mobile">
            <img src="<?php bloginfo('template_url') ?>/logo.svg ">
            <div>
                <h1 class="name1_mobile">Торговый дом</h1>
                <h1 class="name2_mobile">"Меркурий"</h1>
            </div>
        </div>
        <div class="mob_nav_anchor">
            <div class="mob_icon"></div>
            <!--<div class="nav_buttons_mobile" id="drop_menu">-->
                <?php wp_nav_menu( array(
                    'theme_location' => 'mobile_menu',
                    'menu'            => '', 
                    'container'       => 'false', 
                    'container_class' => '', 
                    'container_id'    => '',
                    'menu_class'      => 'nav_buttons_mobile', 
                    'menu_id'         => 'drop_menu',
                    'echo'            => true,
                    'fallback_cb'     => 'wp_page_menu',
                    'before'          => '',
                    'after'           => '',
                    'link_before'     => '',
                    'link_after'      => '',
                    'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    'depth'           => 0,
                    'walker'          => '',

)); ?>
            
                <!--
            <a class="link_type1_mobile" id="a1" href="#about">О нас</a>
            <a class="link_type1_mobile" id="a2" href="#pruf">Наши приемущества</a>
            <a class="link_type2_mobile" id="a3" href="#call">Заказать обратный звонок!</a>-->
       <!-- </div>-->
        </div>
    </nav>