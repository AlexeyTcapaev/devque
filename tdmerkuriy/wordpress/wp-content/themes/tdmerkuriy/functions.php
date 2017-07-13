<?php 
    function theme_name_scripts()
    {
        wp_enqueue_style( 'style',get_stylesheet_uri());
        wp_enqueue_script( 'mask',get_template_directory_uri() . '/mask.js' );
        wp_enqueue_script( 'progress' ,get_template_directory_uri() . '/progress.js' );
        wp_enqueue_script( 'progressbar',get_template_directory_uri() . '/progressbar.js' );
        wp_enqueue_script( 'progressbar.min',get_template_directory_uri() . '/progressbar.min.js' );
    }
add_action('wp_enqueue_scripts','theme_name_scripts');
    add_theme_support('post-thumbnails');
?>