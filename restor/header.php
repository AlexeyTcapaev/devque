<?php
    $telephone = get_page_by_title('Телефон',OBJECT,'post');
    $logo = get_page_by_title('Лого Верх',OBJECT,'post');
    $phone1 = get_page_by_title('Телефон верх',OBJECT,'post');
?>
<header>
        <div class="row tel">
            <a href="tel:<?php echo  $telephone->post_content; ?>">
                <?php echo  $phone1->post_content; ?>
                <span><?php echo  $telephone->post_content; ?></span>
            </a>
        </div>
        <a class="logo" href="<?php echo get_home_url(); ?>">
          <?php echo $logo->post_content; ?>
        </a>
    </header>
    <nav>
        <div class="nav-wrapper">
            <a href="tel:<?php echo  $telephone->post_content; ?>" class="mobile-phone">
                <?php echo  $phone1->post_content; ?>
                <span><?php echo  $telephone->post_content; ?></span>
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                <i class="material-icons">menu</i>
            </a>
            <?php echo wp_nav_menu(array('theme_location' => 'menu',
                                                'container'       => false,
                                                'echo'            => false,
                                                'items_wrap' => '<ul class="hide-on-med-and-down"><li>
                                                <a class="nav-logo" href="'.get_home_url().'">
                                                   '.$logo->post_content.'
                                                </a>
                                            </li>%3$s</ul>',
                                                'depth'           => 0,  )); ?>
              <?php echo wp_nav_menu(array('theme_location' => 'menu',
                                                'container'       => false,
                                                'echo'            => false,
                                                'items_wrap' => '<ul class="sidenav" id="mobile-demo"><li class="close">
                                                <a>
                                                    <i class="material-icons">close</i>
                                                </a>
                                            </li>%3$s</ul>',
                                                'depth'           => 0,  )); ?>
        </div>
    </nav>