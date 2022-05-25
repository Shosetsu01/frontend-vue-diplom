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
          Subscribe to receive the latest news and updates about TDA.
          We promise not to spam you! Subscribe to receive the latest news and updates about TDA.
          We promise not to spam you!
        </v-card-text>
      </v-col>
      <v-col cols="12" md="5" class="pr-md-8 pt-md-10">
        <v-card-text>
          <v-text-field
              color=#898989
              solo
              label="Введите email оппонента"
              type="text"
              :append-icon="'mdi-send'"
              @click:append="toggleMarker"
          ></v-text-field>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
  <div class="mt-8">
    <router-link to="/results" class="orange--text"><h3>Список всех участников ➜</h3></router-link>
  </div>
</v-container>
</template>

<script>
export default {
  name: "InviteDuel",
  data: () => ({
    marker: true,
  }),
  methods: {
    toggleMarker () {
      alert('its work')
    },
  }
}
</script>

<style scoped>

</style>