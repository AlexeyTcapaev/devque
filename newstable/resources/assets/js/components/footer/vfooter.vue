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
    console.log("Component mounted.");
  }
};
</script>
<style scoped>
.page-footer {
  background-color: rgba(255, 255, 255, 0) !important;
  padding-top: 20px;
  margin: 20px 0 0 0;
  color: #fff;
  background-image: url("/storage/img/footer.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer .container h2 {
  font-weight: bolder;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 3.56rem;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
  text-transform: uppercase;
}
footer .container h2::before,
footer .container h2::after {
  display: block;
  content: " ";
  background-image: url("/storage/img/tulip.svg");
  margin: 0 15px;
  background-size: 3rem 3rem;
  color: #ffaf60;
  height: 3rem;
  width: 3rem;
}
.topay {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  justify-items: center;
  width: 100%;
}
.block {
  display: flex;
  flex-direction: column;
  width: 330px;
}
.block h3 {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  position: relative;
  align-items: center;
  margin: 5% 0 5% 0;
}
.cash::before {
  display: block;
  position: absolute;
  content: " ";
  background-image: url("/storage/img/funds.svg");
  background-size: 3rem 3rem;
  margin: 0 15px;
  color: #ffaf60;
  height: 3rem;
  width: 3rem;
  top: 0;
  width: 3rem;
  left: -5rem;
}
.cards::before {
  display: block;
  position: absolute;
  content: " ";
  background-image: url("/storage/img/credit-card.svg");
  background-size: 3rem 3rem;
  margin: 0 15px;
  color: #ffaf60;
  height: 3rem;
  width: 3rem;
  top: 0;
  width: 3rem;
  left: -5rem;
}
.call::before {
  display: block;
  position: absolute;
  content: " ";
  background-image: url("/storage/img/phone-call.svg");
  background-size: 3rem 3rem;
  margin: 0 15px;
  color: #ffaf60;
  height: 3rem;
  width: 3rem;
  top: 0;
  width: 3rem;
  left: -5rem;
}
a {
  color: #fff !important;
}
</style>
