<template>
  <v-container class="pb-0 mb-n3">
    <h2 class="ml-3 mb-2 text-left">Мои достижения</h2>
    <v-card
        width="100%"
        class="shadow-disabled achievements_content"
        color=#F5F5F5
    >
      <v-tabs
          show-arrows
          height="394px"
          color=#00DC72
      >
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab
            class="achievements_tabs shadow-disabled"
            v-for="item in achievements_list"
            :key="item.id"
        >
          <v-card
              class="mx-auto achievements_content_card"
          >
            <v-card-subtitle class="pb-0">{{ item.date }}</v-card-subtitle>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text class="text--primary">
              <p class="mb-0">{{ item.text}}</p>
            </v-card-text>

          </v-card>
        </v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Achievements",

  data() {
    return {
      achievements_list: [
        {date: "11.01.2012",title: "Диплом победителя", text: "Лучшему из лучших среди сильнейших героев из самой отважной группы падших бойцов отряда Кс-40"},
        {date: "11.01.2012",title: "Диплом победителя", text: "Лучшему из лучших среди сильнейших героев из самой отважной группы падших бойцов отряда Кс-40"},
        {date: "11.01.2012",title: "Диплом победителя", text: "Лучшему из лучших среди сильнейших героев из самой отважной группы падших бойцов отряда Кс-40"},
        {date: "11.01.2012",title: "Диплом победителя", text: "Лучшему из лучших среди сильнейших героев из самой отважной группы падших бойцов отряда Кс-40"},
        {date: "11.01.2012",title: "Диплом победителя", text: "Лучшему из лучших среди сильнейших героев из самой отважной группы падших бойцов отряда Кс-40"},
        {date: "11.01.2012",title: "Диплом победителя", text: "Лучшему из лучших среди сильнейших героев из самой отважной группы падших бойцов отряда Кс-40"},
        {date: "11.01.2012",title: "Диплом победителя", text: "Лучшему из лучших среди сильнейших героев из самой отважной группы падших бойцов отряда Кс-40"},
      ]
    }
  }
}
</script>

<style scoped>
.achievements_content {
  text-align: left;
}

.achievements_content .achievements_content_card {
  border-radius: 20px;
  width: 320px;
  height: 320px;
  text-align: left;
  filter: drop-shadow(0 0 10px rgba(0, 220, 114, 0.4));
  background-color: rgba(0, 220, 114, 0.4);
}

.achievements_tabs {
  text-transform: none;
  margin: 20px;
  height: 320px;
  padding: 0;
  border-radius: 20px;
}

/*НАЧАЛО работы с карточками, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/
.theme--light.v-tabs .v-tab:hover::before {
  border-radius: 20px;
  color: #00DC72;
}
.theme--light.v-tabs .v-tab:focus::before{
  border-radius: 20px;
  color: #00DC72;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #00DC72;
  border-radius: 20px;
}
/*КОНЕЦ работы с карточками, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/

@media (max-width: 960px) {

  .achievements_tabs {
    margin: 20px 5px 20px 5px;
    height: 300px;
  }

  .achievements_content_card :nth-child(2) {
    font-size: 16px;
  }

  .achievements_content_card :nth-child(3) {
    font-size: 12px;
    padding-bottom: 0;
  }

  .achievements_content .achievements_content_card {
    width: 292px;
    height: 300px;
  }

}
</style>