<?php 
    function theme_name_scripts()
    {
      wp_enqueue_script('jquery');
        
      wp_register_script( 'bootstrap','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',null );
        wp_enqueue_script('bootstrap');
      wp_register_script( 'mask',get_template_directory_uri().'/mask.js' ,null);
        wp_enqueue_script('mask');
      wp_register_script( 'modalbox',get_template_directory_uri().'/modalbox.js' ,null);
        wp_enqueue_script('modalbox');
      wp_register_script( 'mobnav',get_template_directory_uri().'/mobnav.js' ,null);
        wp_enqueue_script('mobnav');
      wp_register_script( 'progress',get_template_directory_uri().'/progress1.js' ,null);
        wp_enqueue_script('progress');
      wp_register_script( 'progressbar',get_template_directory_uri().'/progressbar.js' ,null);   
        wp_enqueue_script('progressbar');
      wp_register_script( 'scroll',get_template_directory_uri().'/scroll1.js',null ); 
        wp_enqueue_script('scroll');
      wp_enqueue_style( 'style',get_stylesheet_uri(),array(),'30',all);
      wp_register_script('ie9_1','https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js',null);
        wp_enqueue_script('ie9_1');
      wp_register_script('ie9_2','https://oss.maxcdn.com/respond/1.4.2/respond.min.js',null);
        wp_enqueue_script('ie9_2');
      wp_script_add_data('ie9_1','conditional','lt IE 9');
      wp_script_add_data('ie9_2','conditional','lt IE 9');
        
    }
    add_action('wp_enqueue_scripts','theme_name_scripts',5);
    add_theme_support('post-thumbnails');
    register_nav_menu('menu','head_menu');
    register_nav_menu('mobile_menu','mobile_head_menu');
    function register_menu_page_setting()
    {
    add_menu_page('Настройка темы','Настройка темы2',6,'seting_page.php','theme_setings');
    }
    add_action('admin_menu','register_menu_page_setting');
?>