<template>
  <v-container style="background-color: #F5F5F5">
    <v-card
        width="100%"
        height="700px"
        color="#F5F5F5"
        class="shadow-disabled"
    >
      <div class="news__content">
        <h2 class="headings">
          Новости
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <v-tabs
          show-arrows
          height="450px"
          color=#FA8305
          background-color="#F5F5F5"
      >
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab>
          <v-card
              class="mx-auto"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
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
        <v-tab>
          <v-card
              class="mx-auto"
              max-width="400"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
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
        <v-tab>
          <v-card
              class="mx-auto"
              max-width="400"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
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
        <v-tab>
          <v-card
              class="mx-auto"
              max-width="400"
          >
            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-card-text class="text--primary">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
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

.v-card-actions {
  float: right;
}

.news__content {
  margin-left: 20%;
  padding-top: 40px;
  width: 68%;
}

.headings {
  font-size: 40px;
  margin-bottom: 20px;
}

v-tabs > .v-tabs-bar {
  background-color: #F5F5AF !important;
}

.v-card {
  text-align: left;
}

.v-card .v-card{
  border-radius: 20px;
  width: 348px;
  height: 360px;
}

.v-btn {
  float: right;
}


.v-tab {
  text-transform: capitalize;
  margin: 2% 20px 20px 20px;
  height: 360px;
  padding: 0;
  border-radius: 20px;
}

.v-tabs-slider.teal.lighten-3 {
  height: 0;
}

.theme--light.v-tabs .v-tab--active:hover::before, .theme--light.v-tabs .v-tab--active::before {
   opacity: 0;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #FA8305;
  border-radius: 20px;
}

.v-application .primary--text {
  color: #FA8305;
  caret-color: #FA8305 !important;
  border-radius: 20px;
}

.theme--light.v-tabs .v-tab--active:focus::before {
  border-radius: 20px;
}

.theme--light.v-tabs .v-tab--active:hover::before {
  border-radius: 20px;
}

.theme--light.v-tabs .v-tab:hover::before {
  border-radius: 20px;
  color: #FA8305;
}

.theme--light.v-tabs .v-tab:focus::before{
  border-radius: 20px;
  color: #FA8305;
}

</style>