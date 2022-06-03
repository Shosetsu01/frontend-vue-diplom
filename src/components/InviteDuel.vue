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
<!--  <div class="mt-8">-->
<!--    <router-link to="/results" class="orange&#45;&#45;text"><h3>Список всех участников ➜</h3></router-link>-->
<!--  </div>-->

  <v-btn
      text
      style="text-transform: none"
      class="mt-9"
      color=#FA8305
  >
    <router-link to="/results" class="orange--text"><h3>Список всех участников ➜</h3></router-link>
  </v-btn>
</v-container>
</template>

<script>
export default {
  name: "InviteDuel",
  data: () => ({
    marker: true,
    state: null,
    states: [
      { name: 'Florida', abbr: 'FL', id: 1 },
      { name: 'Georgia', abbr: 'GA', id: 2 },
      { name: 'Nebraska', abbr: 'NE', id: 3 },
      { name: 'California', abbr: 'CA', id: 4 },
      { name: 'New York', abbr: 'NY', id: 5 },
    ],
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