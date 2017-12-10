<?php
	function register_styles()
	{
			wp_register_style( 'materialize', get_template_directory_uri() . '/materialize/css/materialize.css');
			wp_enqueue_style('materialize');
			if (is_page('Главная')){
				wp_register_style( 'index', get_template_directory_uri() . '/index/index.css');
				wp_enqueue_style('index');
			}
			if (is_page('Акции')){
				wp_register_style( 'aktsii', get_template_directory_uri() . '/aktsii/aktsii.css');
				wp_enqueue_style('aktsii');
			}
			if (is_page('Из нашего окна')){
				wp_register_style( 'window', get_template_directory_uri() . '/window/window.css');
				wp_enqueue_style('window');
			}
			if (is_page('Меню')){
				wp_register_style( 'menu', get_template_directory_uri() . '/menu/menu.css');
				wp_enqueue_style('menu');
			}
			if (is_page('Галерея')){
				wp_register_style( 'gallery', get_template_directory_uri() . '/gallery/gallery.css');
				wp_enqueue_style('gallery');
			}
			if (is_page('3D Тур')){
				wp_register_style( 'tour', get_template_directory_uri() . '/tour/tour.css');
				wp_enqueue_style('tour');
			}
			if (is_page('Контакты')){
				wp_register_style( 'contacts', get_template_directory_uri() . '/contacts/contacts.css');
				wp_enqueue_style('contacts');
			}
	}
	function register_scripts()
	{
			wp_enqueue_script('jquery');
			if (is_page('Главная')){
				wp_register_script( 'index',  get_template_directory_uri() . '/index/index.js');
				wp_enqueue_script('index');
			}
			if (is_page('Акции')){
				wp_register_script( 'aktsii',  get_template_directory_uri() . '/aktsii/aktsii.js');
				wp_enqueue_script('aktsii');
			}
			if (is_page('Из нашего окна')){
				wp_register_script( 'window',  get_template_directory_uri() . '/window/window.js');
				wp_enqueue_script('window');
			}
			if (is_page('Меню')){
				wp_register_script( 'menu',  get_template_directory_uri() . '/menu/menu.js');
				wp_enqueue_script('menu');
			}
			if (is_page('Галерея')){
				wp_register_script( 'gallery',  get_template_directory_uri() . '/gallery/gallery.js');
				wp_enqueue_script('gallery');
			}
			if (is_page('3D Тур')){
				wp_register_script( 'tour',  get_template_directory_uri() . '/tour/tour.js');
				wp_enqueue_script('tour');
			}
			if (is_page('Контакты')){
				wp_register_script( 'contacts',  get_template_directory_uri() . '/contacts/contacts.js');
				wp_enqueue_script('contacts');
			}
			
			wp_register_script( 'materialize',  get_template_directory_uri() . '/materialize/js/materialize.js');
			wp_enqueue_script('materialize');
		
	}
	add_action( 'wp_enqueue_scripts','register_styles',18);
	add_action( 'wp_enqueue_scripts','register_scripts',18);


	function add_footer_styles() {
		wp_register_style( 'footer',  get_template_directory_uri() . '/footer/footer.css');
		wp_enqueue_style('footer');
	};

	add_action( 'get_footer', 'add_footer_styles' );

	function add_header_styles() {
		wp_register_style( 'header',  get_template_directory_uri() . '/header/header.css');
		wp_enqueue_style('header');
	};
	add_action( 'get_header', 'add_header_styles' );

	function add_footer_script() {
		wp_register_style( 'footer',  get_template_directory_uri() . '/footer/footer.css');
		wp_enqueue_style('footer');
	};

	add_action( 'get_footer', 'add_footer_script' );

	function add_header_script() {
		wp_register_script( 'header',  get_template_directory_uri() . '/header/header.js');
		wp_enqueue_script('header');
		wp_register_script( 'sticky',  get_template_directory_uri() . '/header/jquery.sticky.js');
		wp_enqueue_script('sticky');
	};
	add_action( 'get_header', 'add_header_script' );
	register_nav_menu( 'menu', 'Main_menu' );

?>