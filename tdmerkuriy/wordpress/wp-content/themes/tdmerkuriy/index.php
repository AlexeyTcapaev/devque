<?php get_header(); ?>
    <div class="overlay" id="ol">
        <div class="modalbox">
            <img src="<?php bloginfo('template_url') ?>/check.svg" id="mb_img">
            <p id="mb_text">Спасибо за обращение! Ваша заявка будет обратотана и мы обязательно свяжемся с вами!</p>
        </div>
    </div>
    <img src="<?php bloginfo('template_url') ?>/img-1.png" class="img_1" id="i1">
    <div class="content1">
        <?php if( have_posts() ) :while ( have_posts() ) :the_post(); ?>
        <a name="call" id="call"></a>
        <h2>
            <?php the_title(); ?>
        </h2>
        <?php the_content(); ?>
        <?php endwhile; ?>
        <?php else: ?>
        <?php endif; ?>
        <div class="content_buttons">
             
            <input class="tel_input" maxlenght="10" placeholder="Ваш телефон" type="tel">
            <input class="tel_submit" type="submit" value="Оставить заявку">
        </div>
    </div>   
    <img src="<?php bloginfo('template_url') ?>/img-2.png" class="img_1">
    <h2>Торговый дом "Меркурий". Ваша цель ближе,чем вы думаете!</h2>
    <a name="about" id="about"></a>
    <div class="content2">
        <div class="content2_1div">
            <div class="content2_2div">  
                <div>
                     <div id="circle1" class="circle"></div>
                    <h4 class="circle_label">Другие</h4>
                </div>
           
                 <div>
                     <div id="circle2" class="circle"></div>
                     <h4 class="circle_label">Торговый дом<p class="merc">"Меркурий"</p></h4> 
                </div>
                </div>
        </div> 
        <p class="content2_p">На сегодняшний день массовой проблемой торговли является большое количество промежуточных организаций:оптовые поставщики,реселлеры и малый бизнес.Наша задача оставить как можно меньше организаций,которые захотят получить часть ваших средств!</p>
    </div>
    <img src="<?php bloginfo('template_url') ?>/img-3.png" class="img_1">
    <div class="content3">
         <a name="pruf" id="pruf"></a>
        <ul class="main_ul">
            <li>
                <img src="<?php bloginfo('template_url') ?>/img-st-1.svg">
                <h5>Безопастность</h5>
                 <ul class="soft_ul">
                    <li><p>Нет откатов и сговоров с поставщиком.</p></li>
                    <li><p>Собственный отдел экономической безопастности.</p></li>
                    <li><p>Нет недогруза.</p></li>
                    <li><p>Контроль выполнения поставок в строгом
                        соответсвии с графиком</p></li>
                </ul>
            </li>
             <li>
                <img src="<?php bloginfo('template_url') ?>/img-st-2.svg">
                <h5>Безопастность</h5>
                 <ul class="soft_ul">
                    <li><p>Нет откатов и сговоров с поставщиком.</p></li>
                    <li><p>Собственный отдел экономической безопастности.</p></li>
                    <li><p>Нет недогруза.</p></li>
                    <li><p>Контроль выполнения поставок в строгом
                        соответсвии с графиком</p></li>
                </ul>
            </li>
             <li>
                <img src="<?php bloginfo('template_url') ?>/img-st-3.svg">
                <h5>Безопастность</h5>
                <ul class="soft_ul">
                    <li><p>Нет откатов и сговоров с поставщиком.</p></li>
                    <li><p>Собственный отдел экономической безопастности.</p></li>
                    <li><p>Нет недогруза.</p></li>
                    <li><p>Контроль выполнения поставок в строгом
                        соответсвии с графиком</p></li>
                </ul>
            </li>
        </ul>
    </div>
<?php get_footer(); ?>