<?php
/*
Template Name: Галерея
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
        $menu = get_category_by_slug('gallery');
        $sub_cats = get_categories( array(
            'child_of' => $menu->cat_ID,
            'hide_empty' => 0
        ) );
      ?>
        <div class="gallery-alboum-wrapper">
            <ul class="alboum-list">
            <?php 
              if( $sub_cats ){
              foreach( $sub_cats as $cat ){ 
            ?>
                <li>
                    <div id="modal<?php  echo  $cat->term_id; ?>" class="modal bottom-sheet">
                        <div class="modal-content">
                            <h4><?php echo $cat->name; ?></h4>
                            <p><?php echo category_description( $cat->term_id ); ?></p>
                            <div class="image-list-wrapper">
                                <ul class="image-list">
                                    <?php
                                         $myposts = get_posts( array(
                                            'numberposts' => -1,
                                            'category'    => $cat->cat_ID,
                                            'orderby'     => 'post_date',
                                            'order'       => 'DESC',
                                        ) );
                                        global $post1;
                                        foreach($myposts as $post1){
                                            setup_postdata($post1);
                                            $attachments = get_attached_media( 'image',$post1->ID );
                                    ?>
                                    <li>
                                        <img class="materialboxed"  src="<?php echo array_shift($attachments)->guid; ?>">
                                    </li>
                                        <?php } ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="#modal<?php  echo  $cat->term_id; ?>" class="modal-trigger">
                        <div class="card">
                            <div class="card-image">
                            <?php 
                                    $posts = query_posts('orderby=rand&showposts=1&category_name='.$cat->slug);
                                    foreach($posts as $post) {
                                    $attachments = get_attached_media( 'image', get_the_ID() );
                            ?>
                                <img src="<?php echo array_shift($attachments)->guid; ?>">
                                    <?php } ?>
                                <span class="card-title"><?php echo $cat->name; ?></span>
                            </div>
                            <div class="card-content">
                                <p><?php echo category_description( $cat->term_id ); ?></p>
                            </div>
                        </div>
                    </a>
                </li>
              <?php }} ?>
            </ul>
        </div>
    </main>
  <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>

</html>