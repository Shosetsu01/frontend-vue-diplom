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
        <div class="footer__item white--text">
          <v-icon>mdi-email-edit</v-icon>
          Почта для связи: <a href="mailto: deans-competitions@mail.ru">deans-competitions@mail.ru
        </a>
        </div>
        <div class="footer__item white--text">
          Нашли ошибку? Сообщите нам:<br>
          <a href="mailto: deans-competitions@mail.ru" target="_blank">deans-competitions@mail.ru</a>
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
            <a href="https://www.youtube.com/c/%D0%9A%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%98%D0%9A%D0%A2%D0%A0%D0%A5%D0%A2%D0%A3%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8%D0%94%D0%98%D0%9C%D0%B5%D0%BD%D0%B4%D0%B5%D0%BB%D0%B5%D0%B5%D0%B2%D0%B0/featured" target="_blank">
              <v-img
                  src="../assets/img/youtube.svg"
                  height="42"
                  width="42"
              />
            </a>
          </div>
          <div class="footer__item">
            <a href="https://ikt.muctr.ru/" target="_blank">
              <v-img
                  src="../assets/img/web-page-website-svgrepo-com.svg"
                  height="42"
                  width="42"
              />
            </a>
          </div>
        </div>
      </v-col>

      <v-col
          cols="12"
          class="text-center"
      >
        2022 — <strong> © Веб-портал конкурсов учебных достижений обучающихся факультета ЦиТХИн</strong>
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