<template>
  <v-container style="background-color: #F5F5F5">
    <v-card
        width="100%"
        height="600px"
        color="#F5F5F5"
        class="shadow-disabled news_content"
    >
      <div class="news_header">
        <h2 class="headings">
          Новости
        </h2>
      </div>
      <v-tabs
          show-arrows
          height="394px"
          color=#FA8305
          background-color="#F5F5F5"
      >
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab
            class="news_tabs"
            v-for="item in news_list"
            :key="item.id"
        >
          <v-card
              class="mx-auto news_content_card"
          >
            <v-card-subtitle class="pb-0">
              {{ item.date }}
            </v-card-subtitle>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text class="text--primary items_text">
              <p>{{ item.text }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="#FA8305"
                  text
                  @click="openNews(item.date, item.title, item.text)"
              >
                ПОДРОБНЕЕ ➜
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab>
      </v-tabs>
    </v-card>


    <v-dialog
        v-model="dialog"
        width="700"
    >
      <v-card style="border-radius: 20px !important;">
        <v-card-subtitle class="pt-4 pb-0 text-h6">
          {{ this.dialogDate.date }}
        </v-card-subtitle>
        <v-card-title class="text-sm-h4 text-h5 orange--text justify-center mb-3">
          {{ this.dialogDate.title }}
        </v-card-title>

        <v-card-text class="text-justify">
          {{ this.dialogDate.text }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="#FA8305"
              text
              @click="closeNews"
              min-width="150"
          >
            Закрыть
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "News",

  data() {
    return {
      dialog: false,
      dialogDate: {date: null, title: null, text: null},
      news_list: [
        {date: "10 февраля", title: "Результаты конкурса \"Дуэли\".", text: "В VII конкурсе деканата ЦиТХИн \"Дуэли\" определились победители пар и лучшие дуэлянты факультета. В VII конкурсе деканата ЦиТХИн \"Дуэли\" определились победители пар и лучшие дуэлянты факультета. В VII конкурсе деканата ЦиТХИн \"Дуэли\" определились победители пар и лучшие дуэлянты факультета. В VII конкурсе деканата ЦиТХИн \"Дуэли\" определились победители пар и лучшие дуэлянты факультета."},
        {date: "2 марта", title: "Дорогие студенты!", text: "Ознакомьтесь, пожалуйста, с составами отрядов конкурса \"Три мушкетёра\" и парами оппонентов конкурса \"Дуэли\". Если кто-то оказался пропущен или закралась ошибка, пожалуйста, напишите нам.\n"},
       ]
    }
  },
  methods: {
    openNews (date, title, text) {
      this.dialogDate.date = date
      this.dialogDate.title = title
      this.dialogDate.text = text
      this.dialog = true
    },
    closeNews () {
      this.dialog = false
    }
  },
  // mounted() {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   fetch('http://127.0.0.1:8000/api/v1/', requestOptions)
  //       .then(resp => {
  //         console.log(resp);
  //         if (!resp.ok) {
  //           throw Error(resp.statusText);
  //         }
  //         return resp.json()
  //       })
  //       .then(data => {
  //         this.news_list = data
  //       }).catch(error => {
  //     console.log(error)
  //   });
  // }
}
</script>

<style scoped>
.items_text {
  text-align: justify;
  height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}

.news_header {
  margin-left: 10%;
  padding-top: 40px;
  width: 68%;
}

.news_content {
  text-align: left;
}

.news_content .news_content_card {
  border-radius: 20px;
  width: 340px;
  height: 340px;
  text-align: left;
}

.news_tabs {
  text-transform: none;
  margin: 20px;
  height: 340px;
  padding: 0;
  border-radius: 20px;
}

/*Vue system tags*/
.theme--light.v-tabs .v-tab:hover::before {
  border-radius: 20px;
  color: #FA8305;
}
.theme--light.v-tabs .v-tab:focus::before{
  border-radius: 20px;
  color: #FA8305;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #FA8305;
  border-radius: 20px;
}

@media (max-width: 960px) {
  .news_tabs {
    margin: 20px 5px 20px 5px;
    height: 300px;
  }

  .news_content_card :nth-child(2) {
    font-size: 16px;
  }

  .news_content_card :nth-child(3) {
    font-size: 12px;
    padding-bottom: 0;
  }

  .news_content .news_content_card {
    width: 292px;
    height: 300px;
  }

}
</style>