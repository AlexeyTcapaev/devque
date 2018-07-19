<template>
<main>
    <div class="breadcrumbs">
        <div class="container bread">
            <router-link class="breadcrumb" to="/">Главная</router-link>
            <router-link class="breadcrumb" :to="{name:'login'}">Авторизация</router-link>
        </div>
    </div>
    <div class="container">
        <h5>Пожалуйста,авторизуйтесь</h5>
        <div class="row form">
            <div class="input-field col s3">
                <a class="waves-effect waves-light btn-flat">
                    <i class="material-icons">account_circle</i>
                </a>
                <input class="my-input" id="username" type="text" required placeholder="ЛОГИН" v-model="login">
            </div>
            <div class="input-field col s3">
                <a class="waves-effect waves-light btn-flat">
                    <i class="material-icons">vpn_key</i>
                </a>
                <input class="my-input" id="password" type="password" required placeholder="ПАРОЛЬ" v-model="password">
            </div>
            <form class="col s3" action="#">
                <p>
                    <input id="test5" type="checkbox">
                    <label for="test5">Запомнить меня</label>
                </p>
                <a class="btn-large waves-effect buy" @click="loging">Войти</a>
            </form>
            <div class="input-field col s3 auth">
                <a href="#">Забыли пароль?</a>
                <router-link :to="{ name:'registration'}">Зарегестрироваться</router-link>
            </div>
        </div>
    </div>
</main>
</template>
<script>
import cookies from "js-cookie";
export default {
  metaInfo: {
    title: "Вход" // set a title
  },
  data: () => ({
    login: "",
    password: ""
  }),

  methods: {
    loging: function() {
      const init = this;
      axios
        .post("/api/login", {
          email: this.login,
          password: this.password
        })
        .then(function(resp) {
          cookies.set("token", resp.data.success.token);
          init.$store.state.user.token = resp.data.success.token;
          axios
            .post(
              "/api/user/details",
              {},
              {
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + init.$store.state.user.token
                }
              }
            )
            .then(function(resp) {
              cookies.set("name", resp.data.success.name);
              cookies.set("id", resp.data.success.id);
              init.$store.state.user.name = resp.data.success.name;
            });
          init.$router.push("/");
        });
    }
  }
};
</script>
<style scoped>
.breadcrumbs {
  width: 100%;
  background-color: #ffaf60;
}
.container {
}
.bread {
  display: flex;
  align-items: center;
  min-height: 64px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}
.breadcrumb:not:last-child:before {
  content: "\E5CC";
  color: rgba(255, 255, 255, 0.7);
  vertical-align: top;
  display: inline-block;
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  margin: 0 10px 0 8px;
  -webkit-font-smoothing: antialiased;
}
.breadcrumb:last-child {
  color: #fff;
}

* {
  outline: none !important;
}

[type="radio"]:not(:checked) + label:before,
[type="radio"]:not(:checked) + label:after {
  border: 2px solid black;
}

[type="radio"]:not(:checked) + label:before,
[type="radio"]:not(:checked) + label:after {
  border-radius: 0;
}

[type="radio"]:not(:checked) + label {
  justify-content: center;
  position: relative;
  cursor: pointer;
  display: flex;
  height: 107px;
  flex-direction: column;
  align-items: center;
  width: 135px;
  text-align: center;
  padding: 3px;
  line-height: 25px;
  font-size: 1rem;
  -webkit-transition: 0.28s ease;
  transition: 0.28s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.form {
  display: flex;
  flex-direction: column;
}

.my-input {
  box-shadow: none !important;
  border: 1px solid #ffaf60 !important;
  margin: 0 !important;
  padding: 0 0 0 10px !important;
  height: 47px !important;
  box-sizing: border-box !important;
}

.input-field.s3 {
  display: flex;
  min-width: 300px;
}

.s3 {
  margin-left: 0 !important;
}

.my-input:focus {
  border-bottom: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -5px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #ffaf60;
  border-bottom: 2px solid #ffaf60;
}

.form .input-field a.btn-flat {
  z-index: -1;
  background-color: #ffaf60;
  color: white;
  border-radius: 0;
  padding: 0;
  margin: 0;
  width: 47px;
  min-width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  -webkit-appearance: none !important;
}

.flower-height [type="radio"]:not(:checked) + label:before,
.flower-height [type="radio"]:not(:checked) + label:after {
  border-radius: 0;
}

.flower-height [type="radio"]:not(:checked) + label:before,
.flower-height [type="radio"]:not(:checked) + label:after {
  border: 2px solid black;
}

.flower-height [type="radio"]:not(:checked) + label {
  position: relative;
  cursor: pointer;
  width: 55px;
  padding: 0;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  -webkit-transition: 0.28s ease;
  transition: 0.28s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.auth {
  display: flex;
  flex-direction: column;
}

.buy {
  background-color: #ffaf60;
  border-radius: 0;
  color: #ffffff;
  align-items: center;
  box-shadow: none;
  transition: 0.2s linear;
}

.buy:hover {
  background-color: rgba(255, 173, 96, 0.6);
}

.row:after {
  content: "";
  display: none;
  clear: both;
}

@media only screen and (max-width: 320px) {
  .row {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;
  }
}

@media only screen and (max-width: 375px) {
  [type="radio"]:not(:checked) + label {
    justify-content: center;
    position: relative;
    cursor: pointer;
    display: flex;
    height: 107px;
    flex-direction: column;
    align-items: center;
    width: 116px;
    text-align: center;
    padding: 0;
    line-height: 25px;
    font-size: 0.9rem;
    -webkit-transition: 0.28s ease;
    transition: 0.28s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

@media only screen and (max-width: 412px) {
  .btn-large {
    height: 36px;
    line-height: 36px;
  }
}

@media only screen and (max-width: 414px) {
  .row:after {
    content: "";
    display: none;
    clear: both;
  }
  .btn-large {
    height: 36px;
    line-height: 36px;
  }
}

@media only screen and (max-width: 320px) {
  [type="radio"]:not(:checked) + label {
    justify-content: center;
    position: relative;
    cursor: pointer;
    display: flex;
    height: 97px;
    flex-direction: column;
    align-items: center;
    width: 97px;
    text-align: center;
    padding: 0;
    font-size: 0.8rem;
    line-height: 15px;
    -webkit-transition: 0.28s ease;
    transition: 0.28s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
