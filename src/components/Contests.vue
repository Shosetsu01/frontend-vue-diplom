<template>
  <v-container>
    <h2 class="headings">
      Подробнее о конкурсах
    </h2>
    <v-card>
      <v-tabs
          color="#FA8305"
          centered
          height="300px"
      >
        <v-tab>
          <img src="../assets/img/musketers.jpg" alt="">
          <p>Три Мушкетера</p>
          <img src="../assets/img/cursor.png"  alt="">
        </v-tab>
        <v-tab>
          <img src="../assets/img/musketers.jpg" alt="">
          <p>Дуэли</p>
          <img src="../assets/img/cursor.png" alt="">
        </v-tab>
        <v-tab>
          <img src="../assets/img/musketers.jpg" alt="">
          <p>Конкурс</p>
          <img src="../assets/img/cursor.png" alt="">
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              Три Мушкетера
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              Дуэли
            </v-card-title>
            <v-card-text>
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
              Конкурс
            </v-card-title>
            <v-card-text>
              <p>
                Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
              </p>

              <p class="mb-0">
                Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>

</script>

<style scoped>

.headings {
  font-size: 40px;
  margin-bottom: 20px;
}

.v-tab {
  display: block;
  border-radius: 30px;
  margin: 20px;
}

.v-tab--active {
  outline: 1px solid #FA8305;
}

.v-tab img {
  display: block;
}

.v-tab img:nth-child(1) {
  width: 230px;
  margin-top: 5px;
}

.v-tab img:nth-child(3) {
  margin: 0 auto;
}

.v-tab p {
  display: block;
}

/*.v-tabs-slider-wrapper {*/
/*  height: 0px !important;*/
/*  border-color: #000;*/
/*}*/

.v-tabs-slider-wrapper {
  height: 0 !important;
}

.v-card__text {
  text-align: left;
}

.theme--light.v-tabs .v-tab--active:focus::before {
  border-radius: 30px;
}

.theme--light.v-tabs .v-tab--active:hover::before {
  border-radius: 30px;
}

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

</style>