<?php
/*
Template Name: Главная
*/
?>
<?php
  $group_ID = 84;
  $fields = array();
  $fields = apply_filters('acf/field_group/get_fields', $fields, $group_ID);
  $video = get_field( $fields[8]['name'] );
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
        <div class="rest-wrapper">
            <video class="rest" muted="" loop="" autoplay="">
                <source src="<?php echo  $video; ?>" type="video/mp4">
            </video>
        </div>
        <div class="about">
            <?php $rest = get_page_by_title('О Ресторане',OBJECT,'post');?>
           
            <h1><?php echo $rest->post_title; ?></h1>
            <p><?php echo  $rest->post_content; ?></p>
        </div>
        <div class="dishes">
            <?php 
             $dishes = get_category_by_slug('dishes');
            ?>
            <h2><?php echo $dishes->name; ?></h2>
            <div class="carousel carousel-slider center" data-indicators="true">
                <?php	query_posts('cat='.$dishes->cat_ID); 
                while (have_posts()) : the_post();
                    $attachments = get_attached_media( 'image', get_the_ID() );
                ?>
                <div class="carousel-item  white-text" href="#<?php echo get_the_ID(); ?>">
                    <div class="more-wrapper">
                        <div class="more">
                            <h2><?php the_title(); ?></h2>
                            <p class="black-text"><?php echo wp_strip_all_tags( get_the_content(), 0 ); ?></p>
                        </div>
                    </div>
                    <img src="<?php echo array_shift($attachments)->guid; ?>">
                </div>
                <?php
                      endwhile;
                    wp_reset_query();
                ?>
            </div>
        </div>
        <div class="about">
        <?php $main_second = get_page_by_title('Главная блок текста 2',OBJECT,'post');?>
            <p><?php echo  $main_second->post_content; ?></p>
        </div>
        <div class="dishes">
        <?php 
             $interior = get_category_by_slug('interior');
             
        ?>
            <h2><?php echo $interior->name; ?></h2>
            <div class="carousel carousel-slider center" data-indicators="true">
                 <?php	query_posts('cat='.$interior->cat_ID); 
                 while (have_posts()) : the_post();
                     $attachments = get_attached_media( 'image', get_the_ID() );
                 ?>
                <div class="carousel-item red white-text" href="#<?php echo get_the_ID(); ?>">
                    <img src="<?php echo array_shift($attachments)->guid; ?>">
                </div>
                <?php
                    endwhile;
                    wp_reset_query();
                 ?>
            </div>
        </div>
        <div class="map">
            <iframe src="https://yandex.ru/map-widget/v1/-/CBaK5OWs9A" width="100%" height="400" frameborder="0"></iframe>
        </div>
    </main>
    <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>

</html>