<?php
/**
 * Upsell page
 *
 * @package    Hoot
 * @subpackage Hoot Ubix
 */

/** Determine whether to load upsell subpage **/
$premium_features_file = HYBRIDEXTEND_INC . 'admin/premium.php';
$hootubix_load_upsell_subpage = apply_filters( 'hootubix_load_upsell_subpage', file_exists( $premium_features_file ) );
if ( !$hootubix_load_upsell_subpage )
	return;

/* Add the admin setup function to the 'admin_menu' hook. */
add_action( 'admin_menu', 'hootubix_appearance_subpage' );

/**
 * Sets up the Appearance Subpage
 *
 * @since 1.0
 * @access public
 * @return void
 */
function hootubix_appearance_subpage() {

	add_theme_page(
		__( 'Hoot Ubix Premium', 'hoot-ubix' ),	// Page Title
		__( 'Premium Options', 'hoot-ubix' ),	// Menu Title
		'edit_theme_options',					// capability
		'hoot-ubix-premium',						// menu-slug
		'hootubix_theme_appearance_subpage'			// function name
		);

	add_action( 'admin_enqueue_scripts', 'hootubix_admin_enqueue_upsell_styles' );

}

/**
 * Enqueue CSS
 *
 * @since 1.0
 * @access public
 * @return void
 */
function hootubix_admin_enqueue_upsell_styles( $hook ) {
	if ( $hook == 'appearance_page_hoot-ubix-premium' )
		wp_enqueue_style( 'hootubix-admin-upsell', HYBRIDEXTEND_INCURI . 'admin/css/upsell.css', array(),  HYBRIDEXTEND_VERSION );
}

/**
 * Display the Appearance Subpage
 *
 * @since 1.0
 * @access public
 * @return void
 */
function hootubix_theme_appearance_subpage() {
	/** Load Premium Features Data **/
	include_once( HYBRIDEXTEND_INC . 'admin/premium.php' );

	/** Display Premium Teasers **/
	$hootubix_cta = ( empty( $hootubix_cta ) ) ? '<a class="button button-primary button-buy-premium" href="http://wphoot.com/" target="_blank">' . __( 'Click here', 'hoot-ubix' ) . '</a>' : $hootubix_cta;
	$hootubix_cta_top = ( empty( $hootubix_cta_top ) ) ? $hootubix_cta : $hootubix_cta_top;
	$hootubix_intro = ( !empty( $hootubix_intro ) && is_array( $hootubix_intro ) ) ? $hootubix_intro : array();
	$hootubix_intro = wp_parse_args( $hootubix_intro, array(
		'name' => __('Upgrade to Premium', 'hoot-ubix'),
		'desc' => '',
		) );
	?>
	<div id="hootubix-upsell" class="wrap">
		<h1 class="centered"><?php echo $hootubix_intro['name']; ?></h1>
		<p class="hootubix-upsell-intro centered"><?php echo $hootubix_intro['desc']; ?></p>
		<p class="hootubix-upsell-cta centered"><?php echo $hootubix_cta_top; ?></p>
		<?php if ( !empty( $hootubix_cta_demo ) ) echo '<p class="hootubix-upsell-demo centered">' . $hootubix_cta_demo . '</p>'; ?>
		<?php if ( !empty( $hootubix_options_premium ) && is_array( $hootubix_options_premium ) ): ?>
			<div class="hootubix-upsell-sub">
				<?php foreach ( $hootubix_options_premium as $key => $feature ) : ?>
					<div class="section-premium-info">
						<?php if ( !empty( $feature['desc'] ) ) : ?>
							<div class="premium-info">
								<div class="premium-info-text">
									<?php if ( !empty( $feature['name'] ) ) : ?>
										<h4 class="heading"><?php echo $feature['name']; ?></h4>
									<?php endif; ?>
									<?php echo $feature['desc']; ?>
								</div>
								<?php if ( !empty( $feature['img'] ) ) : ?>
									<div class="premium-info-img">
										<img src="<?php echo esc_url( $feature['img'] ); ?>" />
									</div>
								<?php endif; ?>
								<div class="clear"></div>
							</div>
						<?php elseif ( !empty( $feature['name'] ) ) : ?>
							<h4 class="heading"><?php echo $feature['name']; ?></h4>
						<?php endif; ?>
						<?php if ( !empty( $feature['std'] ) ) echo $feature['std']; ?>
					</div>
				<?php endforeach; ?>
				<div class="section-premium-info hootubix-upsell-cta centered"><?php echo $hootubix_cta; ?></p>
			</div>
		<?php endif; ?>
	</div>
	<?php
}