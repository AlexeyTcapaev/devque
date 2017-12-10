<?php
    $telephone = get_page_by_title('Телефон',OBJECT,'post');
    $footer_email = get_page_by_title('Почта для сотрудничества',OBJECT,'post');
    $vk = get_page_by_title('Ссылка VK',OBJECT,'post');
    $instagram = get_page_by_title('Ссылка Instagram',OBJECT,'post');
    $facebook = get_page_by_title('Ссылка Facebook',OBJECT,'post');
    $logo = get_page_by_title('Лого низ',OBJECT,'post');
    $phone2 = get_page_by_title('Телефон низ',OBJECT,'post');
?>
<footer class="page-footer">
        <div class="footer-wrapper">
            <div class="container">
                <div class="social">
                    <a href="<?php echo  $vk->post_content; ?>">
                        <div class="vk"></div>
                    </a>
                    <a href="<?php echo  $instagram->post_content; ?>">
                        <div class="instagram"></div>
                    </a>
                    <a href="<?php echo  $facebook->post_content; ?>">
                        <div class="facebook"></div>
                    </a>
                </div>
                <div class="logo">
                    <?php echo $logo->post_content; ?>
                </div>
                <a href="tel:<?php echo  $telephone->post_content; ?>" class="footer-tel">
                <?php echo  $phone2->post_content; ?>
                    <span><?php echo  $telephone->post_content; ?></span>
                </a>
            </div>
        </div>
        <div class="footer-desc">
            <div class="timetable">
                <h5>Часы работы</h5>
                <div class="lines">
                    <div class="line">
                        <h6>C понедельника по четверг</h6>
                        <p>10:00 - 0:00</p>
                    </div>
                    <div class="line">
                        <h6>Пятница</h6>
                        <p>10:00 - 2:00</p>
                    </div>
                    <div class="line">
                        <h6>С субботы по воскресенье</h6>
                        <p>12:00 - 2:00</p>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <h4>По вопросам рекламы и сотрудничества:<?php echo  $footer_email->post_content; ?></h4>
            </div>
        </div>

    </footer>