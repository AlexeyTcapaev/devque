<?php
/*
Template Name: Меню
*/
?>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html;charset=utf-8">
    <title><?php bloginfo('name'); ?></title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
</head>

<body>
  <?php get_header(); ?>
  <main>
      <?php  
        $menu = get_category_by_slug('menu');
        $sub_cats = get_categories( array(
            'child_of' => $menu->cat_ID,
            'hide_empty' => 0
        ) );
      ?>
    <ul id="tabs-swipe-demo" class="tabs">
        <?php 
            if( $sub_cats ){
            foreach( $sub_cats as $cat ){ 
        ?>
        <li class="tab col s3"><a href="#test-swipe-<?php  echo  $cat->term_id ?>"><?php echo $cat->name; ?></a></li>
            <?php }} ?>
    </ul>
    <?php 
            if( $sub_cats ){
            foreach( $sub_cats as $cat ){ 
                $myposts = get_posts( array(
                    'numberposts' => -1,
                    'category'    => $cat->cat_ID,
                    'orderby'     => 'post_date',
                    'order'       => 'DESC',
                ) );
                global $post;
                foreach($myposts as $post){
                    setup_postdata($post);
                    $attachments = get_attached_media( 'image',$post1->ID );
    ?>
    <div id="test-swipe-<?php  echo  $cat->term_id ?>" class="col s12">
        <div class="menu-section">
            <img src="<?php echo array_shift($attachments)->guid; ?>">
        </div>
    </div>
                <?php }}} ?>
</main>
  <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>

</html>