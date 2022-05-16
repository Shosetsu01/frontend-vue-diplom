<template>
  <v-footer
      color=#898989
      padless
      class="footer"
  >
    <v-row
        class="footer__items"
        no-gutters
    >
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

      <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
      >
        2022 — <strong>Конкурсы деканата ЦиТХИн</strong>
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
  justify-content: center;
}

.footer__item {
  margin-bottom: 20px;
  margin-right: 15px;
}

</style>