<template>
  <v-container class="winners_bg">
    <v-card
        class="shadow-disabled"
    >
      <div class="news__content">
        <h2 class="headings">
          Победители прошлого семестра
        </h2>
        <p class="black--text text--darken-4 font-weight-medium">В этом списке представлены только победители, <br v-show="$vuetify.breakpoint.smAndUp"> для ознакомления с полным списком перейдите на страницу результатов.</p>
      </div>
      <v-tabs
          v-model="tabs"
          color="#FA8305"
          centered
          height="70px"
          class=""
          background-color="shadow-disabled"
      >
        <v-tab class="winners_tabs">
          <p>Три Мушкетера</p>
        </v-tab>
        <v-tab class="winners_tabs">
          <p>Дуэли</p>
        </v-tab>
        <v-tab class="winners_tabs">
          <p>Лучшие группы</p>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs" class="shadow-disabled">
        <v-tab-item>
          <v-card class="shadow-disabled">
            <v-card-text>
              <v-row>
                <v-col order="1" cols="12" sm="4" v-show="$vuetify.breakpoint.smAndUp">
                  <v-card
                      class="list_third_place lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    <p class="blue--text text--darken-2 font-weight-bold ">3 Место</p>
                      <div class="font-weight-bold  green--text">{{ winners_list[2].command }}</div>
                      <div class="font-weight-bold">{{ winners_list[2].group }}</div>
                      <div>{{ winners_list[2].member1 }}</div>
                      <div>{{ winners_list[2].member2 }}</div>
                      <div>{{ winners_list[2].member3 }}</div>
                      <div>{{ winners_list[2].member4 }}</div>
                      <div>{{ winners_list[2].member5 }}</div>
                  </v-card>
                </v-col>
                <v-col order="2" cols="12" sm="4">
                  <v-card
                      class="lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    <p class="blue--text text--darken-2 font-weight-bold">1 Место</p>
                      <div class="font-weight-bold  green--text">{{ winners_list[0].command }}</div>
                      <div class="font-weight-bold">{{ winners_list[0].group }}</div>
                      <div>{{ winners_list[0].member1 }}</div>
                      <div>{{ winners_list[0].member2 }}</div>
                      <div>{{ winners_list[0].member3 }}</div>
                      <div>{{ winners_list[0].member4 }}</div>
                      <div>{{ winners_list[0].member5 }}</div>
                  </v-card>
                </v-col>
                <v-col order="3" cols="12" sm="4">
                  <v-card
                      class="list_second_place lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    <p class="blue--text text--darken-2 font-weight-bold ">2 Место</p>
                      <div class="font-weight-bold green--text">{{ winners_list[1].command }}</div>
                      <div class="font-weight-bold">{{ winners_list[1].group }}</div>
                      <div>{{ winners_list[1].member1 }}</div>
                      <div>{{ winners_list[1].member2 }}</div>
                      <div>{{ winners_list[1].member3 }}</div>
                      <div>{{ winners_list[1].member4 }}</div>
                      <div>{{ winners_list[1].member5 }}</div>
                  </v-card>
                </v-col>
                <v-col order="4" cols="12" sm="4" v-show="$vuetify.breakpoint.xsOnly">
                  <v-card
                      class="list_third_place lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    <p class="blue--text text--darken-2 font-weight-bold ">3 Место</p>
                    <div class="font-weight-bold green--text">{{ winners_list[2].command }}</div>
                    <div class="font-weight-bold">{{ winners_list[2].group }}</div>
                    <div>{{ winners_list[2].member1 }}</div>
                    <div>{{ winners_list[2].member2 }}</div>
                    <div>{{ winners_list[2].member3 }}</div>
                    <div>{{ winners_list[2].member4 }}</div>
                    <div>{{ winners_list[2].member5 }}</div>
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
              Лучшие группы
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-btn
        text
        style="text-transform: none"
        class="mt-sm-4 mb-2"
        color=#FA8305
    >
      <router-link to="/results" class="orange--text"><h3>Смотреть полностью ➜</h3></router-link>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Winners",
  data () {
    return {
      tabs: null,
      winners_list: [
        {command: "в бой идут одни старики", group: "МТ-18", member1: "Мавлянбердиев", member2: "Абузярова", member3: "Гайдукова", member4: "Городничев", member5: ""},
        {command: "Инженеры-заочники", group: "К-35", member1: "Гордионок", member2: "Окишева", member3: "Пашкин", member4: "Сулханов", member5: "Фаустова"},
        {command: "Кахцер ворикнер" , group: "Ц-11", member1: "Долгов", member2: "Неруссков", member3: "Бутырский", member4: "Варданян", member5: "Малашенков"},
      ]
    }
  },
}
</script>

<style scoped>
.winners_bg{
  background: url("../assets/img/intro_bg_md.png") no-repeat 64%;
  background-size: cover;
  min-height: 590px;
  margin: 0 auto  ;
}

.winners_tabs p {
  line-height: 30px;
}

.winners_tabs {
  display: block;
  border-radius: 30px;
  margin: 20px;
}

.lists{
  width: 260px;
  margin: 0 auto;
}

/*Vuetify ТЕГ*/
.v-tab--active {
  box-shadow: 0 0 0 1px #FA8305;
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

@media (min-width: 781px) {
  .list_second_place {
    margin-top: 50px;
  }

  .list_third_place {
    margin-top: 100px;
  }
}

@media (max-width: 600px) {
  .winners_tabs {
    margin: 20px 1px;
  }
}
</style>