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
          v-model="tabs"
          color="#FA8305"
          centered
          height="70px"
          class=""
          background-color="shadow-disabled"
      >
        <v-tab class="cards_winners">
          <p>Три Мушкетера</p>
        </v-tab>
        <v-tab class="cards_winners">
          <p>Дуэли</p>
        </v-tab>
        <v-tab class="cards_winners">
          <p>Конкурс</p>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs" class="shadow-disabled">
        <v-tab-item>
          <v-card class="shadow-disabled">
            <v-card-text>
              <v-row>
                <v-col order="1" cols="12" sm="4">
                  <v-card
                      class="list-third-place lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    3 Место
                    <ol>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                    </ol>
                  </v-card>
                </v-col>
                <v-col order="2" cols="12" sm="4">
                  <v-card
                      class="lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    1 Место
                    <ol>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                    </ol>
                  </v-card>
                </v-col>
                <v-col order="3" cols="12" sm="4">
                  <v-card
                      class="list-second-place lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    2 Место
                    <ol>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                    </ol>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="shadow-disabled">
            <v-card-text>
              Дуэли
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="shadow-disabled">
            <v-card-text>
              Конкурс
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-btn
        color="#FA8305"
        text
        style="text-transform: none"
    >
      Смотреть полностью &nbsp;
      <v-img
          width="24px"
          src="../assets/img/cursor.png"
          alt=""
      >
      </v-img>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Winners",
  data () {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style scoped>

.winners_bg{
  background: url("../assets/img/intro_bg_md.png") no-repeat 64%;
  background-size: cover;
  min-height: 560px;
  margin: 0 auto  ;
}

.v-tab p {
  line-height: 30px;
}

.v-tab {
  display: block;
  border-radius: 30px;
  margin: 20px;
}

.v-tab--active {
  outline: 1px solid #FA8305;
}

.lists{
  width: 260px;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .list-second-place {
    margin-top: 50px;
  }
  .list-third-place {
    margin-top: 100px;
  }
}

/*НАЧАЛО работы с табами, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/
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
/*КОНЕЦ работы с табами, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/

</style>