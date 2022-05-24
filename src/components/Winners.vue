<template>
  <v-container class="winners_bg">
    <v-card
        class="shadow-disabled"
    >
      <div class="news__content">
        <h2 class="headings">
          Победители прошлого семестра
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <v-tabs
          color="#FA8305"
          centered
          height="70px"
      >
        <v-tab>
          <p>Три Мушкетера</p>
        </v-tab>
        <v-tab>
          <p>Дуэли</p>
        </v-tab>
        <v-tab>
          <p>Конкурс</p>
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
export default {
  name: "Winners"
}
</script>

<style scoped>

.winners_bg{
  background: url("../assets/img/intro_bg_md.png") no-repeat 64%;
  background-size: cover;
  width: 100%;
  /*height: 666px;*/
  margin: 0 auto;
}

.v-tab p {
  line-height: 30px;
}

.v-card__text {
  text-align: left;
}

.v-tabs-slider {
  height: 0;
}

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