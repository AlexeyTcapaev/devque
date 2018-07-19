<template>
<footer class="page-footer">
    <div class="container">
        <h2>Доставка и оплата</h2>
        <div class="topay">
            <div class="block">
                <h3 class="cash">Наличными</h3>
                <p>Оплата наличными курьеру после 30% предоплаты</p>
                <p>Выезд менеджера для приема оплаты
                    <br>(необходимо согласовать с оператором)</p>
            </div>
            <div class="block">
                <h3 class="cards">Банковские карты</h3>
                <ul>
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>На расчётный счет(через банковские системы)</li>
                </ul>
            </div>
            <div class="block">
                <h3 class="cards">Электронные деньги</h3>
                <ul>
                    <li>Оплата со счёта WebMoney</li>
                    <li>Оплата через Яндекс.Деньги</li>
                    <li>Оплата Qiwi</li>
                    <li>Оплата через PayPal</li>
                </ul>
            </div>
            <div class="block">
                <h3 class="call">
                    <a href="tel:88122344455">8(812) 234-44-55</a>
                </h3>
                <p>Работаем с 8:00 до 23:00</p>
                <ul class="social">
                    <li>
                        <a class="img-link vk"></a>
                    </li>
                    <li>
                        <a class="img-link inst"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
    </div>
</footer>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
