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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <v-tabs
          show-arrows
          height="394px"
          color=#FA8305
          background-color="#F5F5F5"
      >
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab class="news_tabs">
          <v-card
              class="mx-auto news_content_card"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                  color="#FA8305"
                  text
              >
                Read more &nbsp;
                <v-img
                    width="24px"
                    src="../assets/img/cursor.png"
                    alt=""
                >
                </v-img>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab>
        <v-tab class="news_tabs">
          <v-card
              class="mx-auto news_content_card"
              max-width="400"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                  color="#FA8305"
                  text
              >
                Read more &nbsp;
                <v-img
                    width="24px"
                    src="../assets/img/cursor.png"
                    alt=""
                >
                </v-img>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab>
        <v-tab class="news_tabs">
          <v-card
              class="mx-auto news_content_card"
              max-width="400"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="#FA8305"
                  text
              >
                Read more &nbsp;
                <v-img
                    width="24px"
                    src="../assets/img/cursor.png"
                    alt=""
                >
                </v-img>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab>
        <v-tab class="news_tabs">
          <v-card
              class="mx-auto news_content_card"
              max-width="400"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="#FA8305"
                  text
              >
                Read more &nbsp;
                <v-img
                    width="24px"
                    src="../assets/img/cursor.png"
                    alt=""
                >
                </v-img>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "News"
}
</script>

<style scoped>

.news_header {
  margin-left: 20%;
  padding-top: 40px;
  width: 68%;
}

.news_content {
  text-align: left;
}

.news_content .news_content_card {
  border-radius: 20px;
  width: 348px;
  height: 320px;
  text-align: left;
}

.news_tabs {
  text-transform: capitalize;
  margin: 2% 20px 20px 20px;
  height: 320px;
  padding: 0;
  border-radius: 20px;
}

/*НАЧАЛО работы с карточками, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/
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
/*КОНЕЦ работы с карточками, СКРУГЛЕНИЕ БОРДЕРОВ, РЕДАКТИРОВАНИЕ ЦВЕТА*/

@media (max-width: 960px) {

  .news_tabs {
    margin: 2% 5px 20px 5px;
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