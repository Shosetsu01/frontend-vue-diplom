<template>
<v-container class="mb-4">
  <h2 class="ml-3 text-left">Вызвать на дуэль</h2>
  <v-card
    shaped
    color="green"
    elevation="7"
    class="mt-8 ml-md-4 mr-md-4"
  >
    <v-row>
      <v-col cols="12" md="7">
        <v-card-title class="ml-md-5 white--text" >Отправьте вызов оппоненту</v-card-title>
        <v-card-text class="ml-md-5 white--text text-left">
          После отправки оппонент получит письмо на email, если он примет вызов, то Ваша пара дуэлянтов появится в списке участников.
        </v-card-text>
      </v-col>
      <v-col cols="12" md="5" class="pr-md-8 pt-md-10">
        <v-card-text>
          <v-autocomplete
              color=#898989
              solo
              type="text"
              :append-icon="'mdi-send'"
              :items="states"
              item-value="id"
              v-model = state
              item-text="name"
              label="Введите имя оппонента"
              @click:append="toggleMarker"
          ></v-autocomplete>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>

  <v-btn
      text
      style="text-transform: none"
      class="mt-9"
      color=#FA8305
  >
    <router-link to="/results" class="orange--text"><h3>Список всех участников ➜</h3></router-link>
  </v-btn>

  <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      centered
  >
    Вызов на дуэль успешно отправлен
  </v-snackbar>
</v-container>
</template>

<script>
export default {
  name: "InviteDuel",
  data: () => ({
    marker: true,
    hasSaved: false,
    state: null,
    states: [],
  }),
  methods: {
    toggleMarker () {
      // this.inviteDuel()
    },

    // inviteDuel: function () {
    //   let formData = {
    //     name: null,
    //   }
    //   formData.name = this.state
    //
    //   const requestOptions = {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       ...formData
    //     })
    //   };
    //   fetch("http://127.0.0.1:8000/api/v1/", requestOptions)
    //       .then(response => {
    //         if (response.status === 201) {
    //           this.hasSaved = true
    //         }
    //       })
    //       .catch((error) => {
    //         this.submitStatus = 'ERROR'
    //         console.log(JSON.stringify(error.response.data))
    //       })
    // }
  },
  mounted() {
    let getPeople;

    const requestListOptions = {
      method: "GET",
      headers: {
        Authorization: 'Token' + ' ' + this.$store.state.savedCurrentToken
      },
    };
    fetch('http://127.0.0.1:8000/api/v1/users_list', requestListOptions)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          }
        })
        .then(json => {
          getPeople = json
          for (let i = 0; i < getPeople.length; i++ ) {
            this.states.push({
              name: getPeople[i].last_name+' '+getPeople[i].first_name,
              group: getPeople[i].group
            })
          }

        })
        .catch((error) => {
          this.submitStatus = 'ERROR'
          console.log(JSON.stringify(error.response))
        });
  }
}
</script>

<style scoped>

</style>