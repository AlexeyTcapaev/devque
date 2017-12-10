<?php
/*
Template Name: Акции
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
        <div class="menu-section">
        <?php 
            $aktsii = get_category_by_slug('aktsii');  
        ?>
            <ul class="menu-section-list">
            <?php	query_posts('cat='.$aktsii->cat_ID); 
                while (have_posts()) : the_post();
                    $attachments = get_attached_media( 'image', get_the_ID() );
                    $img_url=array_shift($attachments)->guid;
            ?>
                <li>
                    <div id="modal1" class="modal bottom-sheet dish">
                        <div class="dish-img-wrapper">
                            <div class="dish-img">
                                <img src="<?php echo  $img_url ; ?>">
                            </div>
                        </div>
                        <div class="modal-content">
                            <h4><?php the_title(); ?></h4>
                            <p><?php echo wp_strip_all_tags( get_the_content(), 0 ); ?></p>
                        </div>
                    </div>
                    <a href="#modal1" class="modal-trigger">
                        <div class="card">
                            <div class="card-image">
                                <img src="<?php echo  $img_url; ?>">
                                <span class="card-title"><?php the_title(); ?></span>
                            </div>
                            <div class="card-content">
                                <p><?php echo wp_strip_all_tags( get_the_excerpt(), 0 ); ?></p>
                            </div>
                        </div>
                    </a>
                </li>
            <?php
                endwhile;
                wp_reset_query();
            ?>
            </ul>
        </div>
    </main>
  <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>

</html>