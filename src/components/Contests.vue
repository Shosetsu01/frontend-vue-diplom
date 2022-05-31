<template>
  <v-container class="block_contents">
    <v-card
        class="shadow-disabled"
    >
      <h2 class="headings">
        Подробнее о конкурсах
      </h2>
      <v-tabs
          color="#FA8305"
          centered
          :height="isMobile"
      >
        <v-tab class="contests_tabs">
          <img src="../assets/img/musketers.jpg" alt="">
          <p>Три Мушкетера</p>
          <img src="../assets/img/cursor.png"  alt="">
        </v-tab>
        <v-tab class="contests_tabs">
          <img src="../assets/img/musketers.jpg" alt="">
          <p>Дуэли</p>
          <img src="../assets/img/cursor.png" alt="">
        </v-tab>
        <v-tab class="contests_tabs">
          <img src="../assets/img/musketers.jpg" alt="">
          <p>Конкурс</p>
          <img src="../assets/img/cursor.png" alt="">
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              Три Мушкетера
            </v-card-title>
            <v-card-text class="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              Дуэли
            </v-card-title>
            <v-card-text class="text-left">
              <p>
                Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
              </p>

              <p>
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
              </p>

              <p class="mb-0">
                Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              Дуэли
            </v-card-title>
            <v-card-text  class="text-left">
              <p>
                Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
              </p>

              <p>
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Contests",
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return "210px"
      }
      else {
        return "300px"
      }
    }
  },
}
</script>

<style scoped>

.block_contents {
  min-height: 660px;
}

.contests_tabs {
  display: block;
  border-radius: 30px;
  margin: 20px;
}

.contests_tabs img {
  display: block;
}

.contests_tabs img:nth-child(1) {
  width: 230px;
  margin-top: 5px;
}

.contests_tabs img:nth-child(3) {
  margin: 0 auto;
}

.contests_tabs p {
  display: block;
  color: black;
}

/*ВЬЮШНЫЙ ТЕГ*/
.v-tab--active {
  box-shadow: 0 0 0 1px #FA8305;
}

/*НАЧАЛО работы с карточками, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/
.theme--light.v-tabs .v-tab:hover::before {
  border-radius: 30px;
  color: #FA8305;
}

.theme--light.v-tabs .v-tab:focus::before{
  border-radius: 30px;
  color: #FA8305;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #FA8305;
}
/*КОНЕЦ работы с карточками, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/

@media (max-width: 600px) {
  .contests_tabs {
    margin: 20px 1px;
  }

  .contests_tabs img:nth-child(1) {
    width: 126px;
  }

  .contests_tabs {
    height: 180px;
  }

}

</style>