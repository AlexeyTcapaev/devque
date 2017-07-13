<?php
/**
 * Call To Action Widget
 *
 * @package    Hoot
 * @subpackage Hoot Ubix
 */

/**
* Class Hootubix_CTA_Widget
*/
class Hootubix_CTA_Widget extends HybridExtend_WP_Widget {

	function __construct() {

		$settings['id'] = 'hootubix-cta-widget';
		$settings['name'] = __( 'Hoot > Call To Action', 'hoot-ubix' );
		$settings['widget_options'] = array(
			'description'	=> __('Display Call To Action block.', 'hoot-ubix'),
			'class'			=> 'hootubix-cta-widget', // CSS class applied to frontend widget container via 'before_widget' arg
		);
		$settings['control_options'] = array();
		$settings['form_options'] = array(
			//'name' => can be empty or false to hide the name
			array(
				'name'		=> __( 'Headline', 'hoot-ubix' ),
				'id'		=> 'headline',
				'type'		=> 'text',
			),
			array(
				'name'		=> __( 'Description', 'hoot-ubix' ),
				'id'		=> 'description',
				'type'		=> 'text',
			),
			array(
				'name'		=> __( 'Button Text', 'hoot-ubix' ),
				'desc'		=> __( 'Leave empty if you dont want to show button', 'hoot-ubix' ),
				'id'		=> 'button_text',
				'type'		=> 'text',
				'std'		=> __( 'KNOW MORE', 'hoot-ubix' ),
			),
			array(
				'name'		=> __( 'URL', 'hoot-ubix' ),
				'desc'		=> __( 'Leave empty if you dont want to show button', 'hoot-ubix' ),
				'id'		=> 'url',
				'type'		=> 'text',
				'sanitize'	=> 'url',
			),
			array(
				'name'		=> __( 'Border', 'hoot-ubix' ),
				'desc'		=> __( 'Top and bottom borders.', 'hoot-ubix' ),
				'id'		=> 'border',
				'type'		=> 'select',
				'std'		=> 'none none',
				'options'	=> array(
					'line line'		=> __( 'Top - Line || Bottom - Line', 'hoot-ubix' ),
					'line shadow'	=> __( 'Top - Line || Bottom - DoubleLine', 'hoot-ubix' ),
					'line none'		=> __( 'Top - Line || Bottom - None', 'hoot-ubix' ),
					'shadow line'	=> __( 'Top - DoubleLine || Bottom - Line', 'hoot-ubix' ),
					'shadow shadow'	=> __( 'Top - DoubleLine || Bottom - DoubleLine', 'hoot-ubix' ),
					'shadow none'	=> __( 'Top - DoubleLine || Bottom - None', 'hoot-ubix' ),
					'none line'		=> __( 'Top - None || Bottom - Line', 'hoot-ubix' ),
					'none shadow'	=> __( 'Top - None || Bottom - DoubleLine', 'hoot-ubix' ),
					'none none'		=> __( 'Top - None || Bottom - None', 'hoot-ubix' ),
				),
			),
		);

		$settings = apply_filters( 'hootubix_cta_widget_settings', $settings );

		parent::__construct( $settings['id'], $settings['name'], $settings['widget_options'], $settings['control_options'], $settings['form_options'] );

	}

	/**
	 * Echo the widget content
	 */
	function display_widget( $instance, $before_title = '', $title='', $after_title = '' ) {
		extract( $instance, EXTR_SKIP );
		include( hybridextend_locate_widget( 'cta' ) ); // Loads the widget/cta or template-parts/widget-cta.php template.
	}

}

/**
 * Register Widget
 */
function hootubix_cta_widget_register(){
	register_widget('Hootubix_CTA_Widget');
}
add_action('widgets_init', 'hootubix_cta_widget_register');