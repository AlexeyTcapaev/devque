<?php
// Dispay Sidebar if sidebar has widgets
if ( is_active_sidebar( 'hootubix-below-header' ) ) :

	?>
	<div <?php hybridextend_attr( 'below-header', '', 'inline_nav grid-stretch highlight-typo' ); ?>>
		<div class="grid">
			<div class="grid-span-12">
				<?php

				// Template modification Hook
				do_action( 'hootubix_template_sidebar_start', 'below-header' );

				?>
				<aside <?php hybridextend_attr( 'sidebar', 'below-header' ); ?>>
					<?php dynamic_sidebar( 'hootubix-below-header' ); ?>
				</aside>
				<?php

				// Template modification Hook
				do_action( 'hootubix_template_sidebar_end', 'below-header' );

				?>
			</div>
		</div>
	</div>
	<?php

endif;