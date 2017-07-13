<?php
/**
 * Premium Theme Options displayed in admin
 *
 * @package    Hoot
 * @subpackage Hoot Ubix
 * @return array Return Hoot Options array to be merged to the original Options array
 */

$hootubix_options_premium = array();
$imagepath =  HYBRIDEXTEND_INCURI . 'admin/images/';
$hootubix_cta_top = '<a class="button button-primary button-buy-premium" href="http://wphoot.com/themes/hoot-ubix/" target="_blank">' . __( 'Click here to know more', 'hoot-ubix' ) . '</a>';
$hootubix_cta_top = $hootubix_cta = '<a class="button button-primary button-buy-premium" href="http://wphoot.com/themes/hoot-ubix/" target="_blank">' . __( 'Buy Hoot Ubix Premium', 'hoot-ubix' ) . '</a>';

$hootubix_intro = array(
	'name' => __('Upgrade to Hoot Ubix Premium', 'hoot-ubix'),
	'desc' => __("If you've enjoyed using Hoot Ubix, you're going to love Hoot Ubix Premium.<br>It's a robust upgrade to Hoot Ubix that gives you many useful features.", 'hoot-ubix'),
	);

$hootubix_options_premium[] = array(
	'name' => __('Complete Style Customization', 'hoot-ubix'),
	'desc' => __('Hoot Ubix Premium lets you select unlimited colors for different sections of your site.<hr>Select pre-existing backgrounds for site sections like header, footer etc or upload your own background images/patterns.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-style.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Fonts and Typography Control', 'hoot-ubix'),
	'desc' => __('Assign different typography (fonts, text size, font color) to menu, topbar, logo, content headings, sidebar, footer etc.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-typography.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Unlimites Sliders, Unlimites Slides', 'hoot-ubix'),
	'desc' => __('Hoot Ubix Premium allows you to create unlimited sliders with as many slides as you need.<hr>You can use these sliders on your Frontpage, or add them anywhere using shortcodes - like in your Posts, Sidebars or Footer.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-sliders.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('600+ Google Fonts', 'hoot-ubix'),
	'desc' => __("With the integrated Google Fonts library, you can find the fonts that match your site's personality, and there's over 600 options to choose from.", 'hoot-ubix'),
	'img' => $imagepath . 'premium-googlefonts.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Shortcodes with Easy Generator', 'hoot-ubix'),
	'desc' => __('Enjoy the flexibility of using shortcodes throughout your site with Hoot Ubix premium. These shortcodes were specially designed for this theme and are very well integrated into the code to reduce loading times, thereby maximizing performance!<hr>Use shortcodes to insert buttons, sliders, tabs, toggles, columns, breaks, icons, lists, and a lot more design and layout modules.<hr>The intuitive Shortcode Generator has been built right into the Edit screen, so you dont have to hunt for shortcode syntax.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-shortcodes.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Image Carousels', 'hoot-ubix'),
	'desc' => __('Add carousels to your post, in your sidebar, on your frontpage or in your footer. A simple drag and drop interface allows you to easily create and manage carousels.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-carousels.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __("Floating 'Sticky' Header &amp; 'Goto Top' button (optional)", 'hoot-ubix'),
	'desc' => __("The floating header follows the user down your page as they scroll, which means they never have to scroll back up to access your navigation menu, improving user experience.<hr>Or, use the 'Goto Top' button appears on the screen when users scroll down your page, giving them a quick way to go back to the top of the page.", 'hoot-ubix'),
	'img' => $imagepath . 'premium-header-top.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('One Page Scrolling Website / Landing Page', 'hoot-ubix'),
	'desc' => __("Make One Page websites with menu items linking to different sections on the page. Watch the scroll animation kick in when a user clicks a menu item to jump to a page section.<hr>Create different landing pages on your site. Change the menu for each page so that the menu items point to sections of the page being displayed.", 'hoot-ubix'),
	'img' => $imagepath . 'premium-scroller.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('3 Blog Layouts (including pinterest type mosaic)', 'hoot-ubix'),
	'desc' => __('Hoot Ubix Premium gives you the option to display your post archives in 3 different layouts including a mosaic type layout similar to pinterest.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-blogstyles.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Custom Widgets', 'hoot-ubix'),
	'desc' => __('Custom widgets crafted and designed specifically for Hoot Ubix Premium Theme to give you the flexibility of adding stylized content.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-widgets.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Menu Icons', 'hoot-ubix'),
	'desc' => __('Select from over 500 icons for your main navigation menu links.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-menuicons.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Premium Background Patterns (CC0)', 'hoot-ubix'),
	'desc' => __('Hoot Ubix Premium comes with many additional premium background patterns. You can always upload your own background image/pattern to match your site design.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-backgrounds.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Automatic Image Lightbox and WordPress Gallery', 'hoot-ubix'),
	'desc' => __('Automatically open image links on your site with the integrates lightbox in Hoot Ubix Premium.<hr>Automatically convert standard WordPress galleries to beautiful lightbox gallery slider.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-lightbox.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Developers love {LESS}', 'hoot-ubix'),
	'desc' => __('CSS is passe. Developers love the modularity and ease of using LESS, which is why Hoot Ubix Premium comes with properly organized LESS files for the main stylesheet. You can even turn on less.js during development to increase productivity.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-lesscss.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Easy Import/Export', 'hoot-ubix'),
	'desc' => __('Moving to a new host? Or applying a new child theme? Easily import/export your customizer settings with just a few clicks - right from the backend.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-import-export.jpg',
	);

$hootubix_options_premium[] = array(
	'name' => __('Custom Javascript &amp; Google Analytics', 'hoot-ubix'),
	'std' => __("Easily insert any javascript snippet to your header without modifying the code files. This helps in adding scripts for Google Analytics, Adsense or any other custom code.", 'hoot-ubix'),
	);

$hootubix_options_premium[] = array(
	'name' => __('Custom CSS', 'hoot-ubix'),
	'std' => __("Add custom CSS to your theme right from the backend. If you are not a developer yourself, you can count on our support staff to help you with CSS snippets to get the look you're after. Best of all, your changes will persist across theme updates.", 'hoot-ubix'),
	);

$hootubix_options_premium[] = array(
	'name' => __('Continued Updates', 'hoot-ubix'),
	'std' => __("You'll help support the continued development of Hoot Ubix - ensuring it works with future versions of WordPress for years to come.", 'hoot-ubix'),
	);

$hootubix_options_premium[] = array(
	'name' => __('Premium Priority Support', 'hoot-ubix'),
	'desc' => __('Need help setting up Hoot Ubix? Upgrading to Hoot Ubix Premium gives you prioritized support. We have a growing support team ready to help you with your questions.', 'hoot-ubix'),
	'img' => $imagepath . 'premium-support.jpg',
	);