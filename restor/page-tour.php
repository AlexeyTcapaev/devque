<?php
/*
Template Name: 3D Тур
*/
?>
<?php
    $tour = get_page_by_title('Ждём вас!',OBJECT,'post');
    $map = get_page_by_title('3D Тур карта',OBJECT,'post');
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
        <div class="paragraph">
            <h2><?php echo $tour->post_title; ?></h2>
            <p><?php echo $tour->post_content; ?></p>
            <div class="view"><?php echo $map->post_content; ?></div>
        </div>
    </main>
  <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>

</html>