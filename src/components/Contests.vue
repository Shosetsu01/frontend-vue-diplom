<template>
  <v-card>
    <v-tabs
        color="deep-purple accent-4"
        right
        height="300px"
    >
      <v-tab>
        <v-card
            class="mx-auto"
            max-width="300"
        >
          <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/img/musketers.jpg"
          >
          </v-img>

          <v-card-subtitle class="pb-0">
            Три Мушкетера
          </v-card-subtitle>

          <v-card-actions>
            <v-img
                max-height="32"
                max-width="32"
                src="../assets/img/cursor.png"
                style="margin: 0 auto"
            ></v-img>
          </v-card-actions>
        </v-card>
      </v-tab>
      <v-tab>
        <v-card
            class="mx-auto"
            max-width="300"
        >
          <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/img/duels.jpg"
          >
          </v-img>

          <v-card-subtitle class="pb-0">
            Дуэли
          </v-card-subtitle>
          <v-card-actions>
            <v-img
                max-height="32"
                max-width="32"
                src="../assets/img/cursor.png"
                style="margin: 0 auto"
            ></v-img>
          </v-card-actions>
        </v-card>
      </v-tab>
      <v-tab>
        <v-card
            class="mx-auto"
            max-width="300"
        >
          <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/img/competition.jpg"
          >
          </v-img>

          <v-card-subtitle class="pb-0">
            Конкурс
          </v-card-subtitle>

          <v-card-actions>
            <v-img
                max-height="32"
                max-width="32"
                src="../assets/img/cursor.png"
                style="margin: 0 auto"
            ></v-img>
          </v-card-actions>
        </v-card>
      </v-tab>
<!--      <v-tab>-->
<!--        привет-->
<!--      </v-tab>-->
      <v-tab-item
          v-for="n in 3"
          :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
                v-for="i in 6"
                :key="i"
                cols="12"
                md="4"
            >
              <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                  aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>

</script>

<style scoped>

 .v-tab {
   padding: 0;
   margin: 0 48px;
 }

 /*.v-tabs-slider {*/
 /*  background-color: #FA8305;*/
 /*}*/

 /*v-card{*/
 /*  border-radius: 30px;*/
 /*}*/


</style>