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
                      <div class="font-weight-bold  green--text">{{ winners_list[2].name }}</div>
                      <div class="font-weight-bold">{{ winners_list[2].group }}</div>
                      <div>{{ winners_list[2].lineOne }}</div>
                      <div>{{ winners_list[2].lineTwo }}</div>
                      <div>{{ winners_list[2].lineThree }}</div>
                      <div>{{ winners_list[2].lineFour }}</div>
                      <div>{{ winners_list[2].lineFive }}</div>
                  </v-card>
                </v-col>
                <v-col order="2" cols="12" sm="4">
                  <v-card
                      class="lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    <p class="blue--text text--darken-2 font-weight-bold">1 Место</p>
                      <div class="font-weight-bold  green--text">{{ winners_list[0].name }}</div>
                      <div class="font-weight-bold">{{ winners_list[0].group }}</div>
                      <div>{{ winners_list[0].lineOne }}</div>
                      <div>{{ winners_list[0].lineTwo }}</div>
                      <div>{{ winners_list[0].lineThree }}</div>
                      <div>{{ winners_list[0].lineFour }}</div>
                      <div>{{ winners_list[0].lineFive }}</div>
                  </v-card>
                </v-col>
                <v-col order="3" cols="12" sm="4">
                  <v-card
                      class="list_second_place lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    <p class="blue--text text--darken-2 font-weight-bold ">2 Место</p>
                      <div class="font-weight-bold green--text">{{ winners_list[1].name }}</div>
                      <div class="font-weight-bold">{{ winners_list[1].group }}</div>
                      <div>{{ winners_list[1].lineOne }}</div>
                      <div>{{ winners_list[1].lineTwo }}</div>
                      <div>{{ winners_list[1].lineThree }}</div>
                      <div>{{ winners_list[1].lineFour }}</div>
                      <div>{{ winners_list[1].lineFive }}</div>
                  </v-card>
                </v-col>
                <v-col order="4" cols="12" sm="4" v-show="$vuetify.breakpoint.xsOnly">
                  <v-card
                      class="list_third_place lists shadow-disabled"
                      tile
                      color="transparent"
                  >
                    <p class="blue--text text--darken-2 font-weight-bold ">3 Место</p>
                    <div class="font-weight-bold green--text">{{ winners_list[2].name }}</div>
                    <div class="font-weight-bold">{{ winners_list[2].group }}</div>
                    <div>{{ winners_list[2].lineOne }}</div>
                    <div>{{ winners_list[2].lineTwo }}</div>
                    <div>{{ winners_list[2].lineThree }}</div>
                    <div>{{ winners_list[2].lineFour }}</div>
                    <div>{{ winners_list[2].lineFive }}</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="shadow-disabled">
            <v-card-text v-if="winners_list[3]">
              <p class="mb-0 green--text font-weight-bold">Победители Дуэлей</p>
              <p class="blue--text">(с наивысшим рейтингом)</p>
              <div>{{ winners_list[3].lineOne }}</div>
              <div>{{ winners_list[3].lineTwo }}</div>
              <div>{{ winners_list[3].lineThree }}</div>
              <div>{{ winners_list[3].lineFour }}</div>
              <div>{{ winners_list[3].lineFive }}</div>
            </v-card-text>
            <v-card-text v-else>
              <p class="green--text font-weight-bold">Ой, тут ничего нет</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="shadow-disabled">
            <v-card-text v-if="winners_list[4]">
              <p class="mb-0 green--text font-weight-bold">Лучшие группы факультета</p>
              <p class="blue--text">(с наивысшим рейтингом)</p>
              <div>1 курс {{ winners_list[4].group }}</div>
              <div>2 курс {{ winners_list[4].lineOne }}</div>
              <div>3 курс {{ winners_list[4].lineTwo }}</div>
              <div>4 курс {{ winners_list[4].lineThree }}</div>
              <div>1 курс маг. {{ winners_list[4].lineFour }}</div>
              <div>2 курс маг. {{ winners_list[4].lineFive }}</div>
            </v-card-text>
            <v-card-text v-else>
              <p class="green--text font-weight-bold">Ой, тут ничего нет</p>
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
        { name: null, group: null, lineOne: null, lineTwo: null, lineThree: null, lineFour: null, lineFive: null},
        { name: null, group: null, lineOne: null, lineTwo: null, lineThree: null, lineFour: null, lineFive: null},
        { name: null, group: null, lineOne: null, lineTwo: null, lineThree: null, lineFour: null, lineFive: null},
        { name: null, group: null, lineOne: null, lineTwo: null, lineThree: null, lineFour: null, lineFive: null},
        { name: null, group: null, lineOne: null, lineTwo: null, lineThree: null, lineFour: null, lineFive: null},
      ]
    }
  },
  mounted () {
    const requestListOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('http://127.0.0.1:8000/api/v1/winners_list', requestListOptions)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          }
        })
        .then(json => {
          this.winners_list = json
        })
        .catch((error) => {
          this.submitStatus = 'ERROR'
          console.log(JSON.stringify(error.response))
        });
  }
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

/*Vue system tags*/
.v-tab--active {
  box-shadow: 0 0 0 1px #FA8305;
}

/*Vue system tags*/
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