<template>
  <v-container style="background-color: rgba(225,122,14,0.08)">
    <h2 class="text-center mb-5">Архив прошлых конкурсов</h2>
    <v-row justify="center">
      <v-expansion-panels popout class="pa-5">
        <v-expansion-panel
            v-for="(item, i) in archive_list"
            :key="item.id"
            class="orange--text font-weight-bold mb-3"
        >
          <v-expansion-panel-header>{{ item.year }} год {{ item.semester }} семестр</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <img :src="item.duel" alt="rez_duel" height="180px" width="270px" :class="getImageClass(i)" @click="onImageClick(i)"/>
                <p class="black--text font-weight-medium mt-2" v-show="!(fullWidthImageIndex === i)">Дуэли</p>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <img :src="item.musketeers" alt="rez_duel" height="180px" width="270px" :class="getImageClass(i+1)" @click="onImageClick(i+1)"/>
                <p class="black--text font-weight-medium mt-2" v-show="!(fullWidthImageIndex === i+1)">Три мушкетера</p>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <img :src="item.groups" alt="rez_duel" height="180px" width="270px" :class="getImageClass(i+2)" @click="onImageClick(i+2)"/>
                <p class="black--text font-weight-medium mt-2" v-show="!(fullWidthImageIndex === i+2)">Лучшие группы</p>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Archive",
  data() {
    return {
      fullWidthImageIndex: null,
      archive_list: [
        {
          year: "2021/22",
          semester: "Осенний",
          musketeers: "https://sun9-33.userapi.com/s/v1/ig2/IVpaZx_3NUP4_aqv-g0-_qYGzlNcpUT4dVvmQ_jCYYvi6PJ19NEoEVnXabtXhLydgv1djmIysv_152mz-TIHR6bi.jpg?size=805x701&quality=96&type=album",
          duel: "https://sun9-43.userapi.com/s/v1/ig2/BZ9kYpUy4dDOWfoP8ZBGU9CLJeAvOb916-2DEW6jTfAU5mE5npCqDums6aHmDhphhyiSmKN-_552rNycP_LC2ee5.jpg?size=547x749&quality=96&type=album",
          groups: "https://sun9-78.userapi.com/s/v1/ig2/w2GeK7OwMm2lUEAGakGW5JORfHPtWBxCrh9BZlpw1Yuk5ltVY8EMe4XX_kIkiKxlsIrowGrhEJmixTzePf6gwMP9.jpg?size=1353x741&quality=96&type=album"
        },{
          year: "2020/21",
          semester: "Весенний",
          musketeers: "https://via.placeholder.com/300x200",
          duel: "https://via.placeholder.com/300x200",
          groups: "https://via.placeholder.com/300x200"
        },{
          year: "2020/21",
          semester: "Осенний",
          musketeers: "https://via.placeholder.com/300x200",
          duel: "https://via.placeholder.com/300x200",
          groups: "https://via.placeholder.com/300x200"
        },{
          year: "2019/20",
          semester: "Весенний",
          musketeers: "https://via.placeholder.com/300x200",
          duel: "https://via.placeholder.com/300x200",
          groups: "https://via.placeholder.com/300x200"
        },
      ]
    }
  },
  methods: {
    getImageClass (i) {
      return {
        'fullWidthImage': this.fullWidthImageIndex === i
      };
    },
    onImageClick (i) {
      if (this.fullWidthImageIndex === i) {
        this.fullWidthImageIndex = null;
      } else {
        this.fullWidthImageIndex = i;
      }
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
  //         this.archive_list = data
  //       }).catch(error => {
  //     console.log(error)
  //   });
  // }
}
</script>

<style scoped>
.fullWidthImage {
  width: 990px !important;
  height: 660px !important;
  display: flex;
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

/*Vue system tags*/
.v-expansion-panel {
  border-radius: 20px !important;
}

/*Vue system tags*/
.v-expansion-panel:not(:first-child)::after {
  border-top: none;
}

@media screen and (max-width: 990px){
.fullWidthImage {
  width: 750px !important;
  height: 500px !important;
}
}

@media screen and (max-width: 760px){
.fullWidthImage {
  width: 490px !important;
  height: 360px !important;
}
}

@media screen and (max-width: 490px){
  .fullWidthImage {
    width: 360px !important;
    height: 240px !important;
  }
}
</style>