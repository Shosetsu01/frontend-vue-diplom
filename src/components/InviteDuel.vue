<template>
<v-container class="mb-8">
  <h2 align="start" class="ml-3">Вызвать на дуэль</h2>
  <v-card
    shaped
    color="green"
    elevation="7"
    class="mt-8 ml-4 mr-4"
  >
    <v-row>
      <v-col cols="7">
        <v-card-title class="ml-5 white--text" >Отправте вызов аппоненту</v-card-title>
        <v-card-text class="ml-5 white--text" align="start">
          Subscribe to receive the latest news and updates about TDA.
          We promise not to spam you! Subscribe to receive the latest news and updates about TDA.
          We promise not to spam you!
        </v-card-text>
      </v-col>
      <v-col cols="5" class="pr-8 pt-10">
        <v-card-text >
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