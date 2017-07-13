<?php
global $hootubix_theme;

if ( !isset( $hootubix_theme->slider ) || empty( $hootubix_theme->slider ) )
	return;

// Ok, so we have a slider to show. Now, lets display the slider.

/* Let developers alter slider via global $hootubix_theme */
do_action( 'hootubix_slider_start', 'image' );

/* Create Data attributes for javascript settings for this slider */
$atts = $class = '';
if ( isset( $hootubix_theme->sliderSettings ) && is_array( $hootubix_theme->sliderSettings ) ) {
	if ( isset( $hootubix_theme->sliderSettings['class'] ) )
		$class .= ' ' . sanitize_html_class( $hootubix_theme->sliderSettings['class'] );
	if ( isset( $hootubix_theme->sliderSettings['id'] ) )
		$atts .= ' id="' . sanitize_html_class( $hootubix_theme->sliderSettings['id'] ) . '"';
	foreach ( $hootubix_theme->sliderSettings as $setting => $value )
		$atts .= ' data-' . $setting . '="' . esc_attr( $value ) . '"';
}

/* Start Slider Template */
$slide_count = 1; ?>
<div class="hootslider-image-wrapper">
<ul class="lightSlider<?php echo $class; ?>"<?php echo $atts; ?>><?php
	foreach ( $hootubix_theme->slider as $slide ) :

		$slide = wp_parse_args( $slide, array(
			'image' => '',
			'caption' => '',
			'caption_bg' => 'dark-on-light',
			'button' => '',
			'url' => '',
		) );

		if ( !empty( $slide['image'] ) ) :

			?><li class="lightSlide hootslider-image-slide hootslider-image-slide-<?php echo $slide_count; $slide_count++; ?>">

				<?php if ( !empty( $slide['url'] ) && empty( $slide['button'] ) )
					echo '<a href="' . esc_url( $slide['url'] ) . '" ' . hybridextend_get_attr( 'hootslider-image-slide-link' ) . '>'; ?>
					<img src="<?php echo esc_url( $slide['image'] ); ?>" />
				<?php if ( !empty( $slide['url'] ) && empty( $slide['button'] ) )
					echo '</a>'; ?>

				<div class="hootslider-image-slide-content">
					<?php if ( !empty( $slide['caption'] ) ) : ?>
						<?php $caption_class = 'titlefont style-' . sanitize_html_class( $slide['caption_bg'] ); ?>
						<div <?php hybridextend_attr( 'hootslider-image-slide-caption', '', $caption_class ) ?>><?php echo wp_kses_post( wpautop( $slide['caption'] ) ); ?></div>
					<?php endif; ?>
					<?php if ( !empty( $slide['url'] ) && !empty( $slide['button'] ) ) : ?>
						<a href="<?php echo esc_url( $slide['url'] ) ?>" <?php hybridextend_attr( 'hootslider-image-slide-button', 'image-slider', 'button button-small' ); ?>><?php echo esc_html( $slide['button'] ) ?></a>
					<?php endif; ?>
				</div>

			</li><?php

		endif;
	endforeach; ?>
</ul>
</div>