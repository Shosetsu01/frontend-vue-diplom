<template>
  <v-footer
      color=#898989
      padless
      class="footer"
  >
    <v-row
        no-gutters
    >
      <v-col
          class="footer__items"
          cols="12" sm="6" md="4"
      >
        <h2 class="footer__item-title">
          КОНТАКТЫ
        </h2>
<!--        <div class="footer__item white&#45;&#45;text">-->
<!--          <v-icon>mdi-map-marker</v-icon>-->
<!--          Наш адрес:-->
<!--        </div>-->
        <div class="footer__item white--text">
          <v-icon>mdi-email-edit</v-icon>
          Почта для связи: <a href="mailto:">mail</a>
        </div>
        <div class="footer__item white--text">
          Нашли ошибку? Сообщите нам:<br>
          <a href="mailto: romamarin16@gmail.com" target="_blank">mail </a>
        </div>
      </v-col>

      <v-col
          class="footer__items"
          cols="12" xs="12" sm="5" md="3"
      >
        <h2 class="footer__item-title">
          МЕНЮ
        </h2>
        <div class="footer__item">
          <v-icon>mdi-home</v-icon>
          <router-link to="/" class="nav__item-burger">
            Главная
          </router-link>
        </div>
        <div class="footer__item">
          <v-icon>mdi-medal</v-icon>
          <router-link to="/results" class="nav__item-burger">
            Результаты
          </router-link>
        </div>
        <div class="footer__item">
          <v-icon>mdi-account</v-icon>
          <router-link to="/user" class="nav__item-burger">
            Личный кабинет
          </router-link>
        </div>
      </v-col>

      <v-col
          class="footer__items"
          cols="12" sm="12" md="4"
      >
        <h2 class="footer__item-title">
          СОЦИАЛЬНЫЕ СЕТИ
        </h2>
        <div class="footer__item-inline">
          <div class="footer__item">
            <a href="https://vk.com/dekanat_itu" target="_blank">
              <v-img
                  src="../assets/img/vk.svg"
                  height="42"
                  width="42"
              />
            </a>
          </div>
          <div class="footer__item">
            <a href="#" target="_blank">
              <v-img
                  src="../assets/img/youtube.svg"
                  height="42"
                  width="42"
              />
            </a>
          </div>
        </div>
      </v-col>

      <v-col
          cols="12"
      >
        2022 — <strong> © Веб-портал конкурсов учебных достижений обучающихся факультета ЦиТХИн</strong>
<!--        {{ new Date().getFullYear() }} —-->
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

}
</script>

<style scoped>
.footer {
  padding: 20px;
}

.footer__items {
  margin-left: 20px;
}

.footer__item {
  margin-bottom: 5px;
  margin-left: 15px;
  text-align: left;
}

.footer__item:hover {
  font-weight: bold;
}

.footer__item:last-child {
  margin-bottom: 20px;
}

.footer__item-title {
  margin-bottom: 5px;
  text-align: left;
  text-transform: uppercase;
}

.footer__item-inline {
  float: left;
  display: inline-flex;
}
</style>