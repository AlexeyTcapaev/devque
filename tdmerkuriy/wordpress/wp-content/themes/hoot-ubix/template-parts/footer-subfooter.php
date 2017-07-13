<?php
if ( ! is_active_sidebar( 'hootubix-sub-footer' ) )
	return;
?>
<div <?php hybridextend_attr( 'sub-footer', '', 'grid-stretch inline_nav' ); ?>>
	<div class="grid">
		<div class="grid-span-12">
			<?php dynamic_sidebar( 'hootubix-sub-footer' ); ?>
		</div>
	</div>
</div>