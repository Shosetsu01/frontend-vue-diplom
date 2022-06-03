<template>
  <v-container class="login__bg px-0 mt-1 mt-md-3">
    <v-card
        class="shadow-disabled pa-md-16 mt-md-4"
    >
      <v-toolbar
          flat
          color="transparent"
      >
        <v-spacer></v-spacer>
        <v-icon class="text-h5 mr-3  text-md-h4 mb-4">mdi-account</v-icon>
        <v-toolbar-title class="text-h5 text-md-h4 font-weight-medium mr-3 mb-4">
          Привет!
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-row class="justify-center">
        <v-col
            cols="12" md="6" sm="8"
        >
          <v-card-text>
            <v-text-field
                color=#898989
                outlined
                solo
                rounded
                label="Электронная почта"
                type="email"
            ></v-text-field>
            <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                outlined
                solo
                rounded
                color=#898989
                label="Пароль"
                @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex flex-wrap justify-center">
        <v-btn
            rounded
            color="white"
            outlined
            class="pa-5 orange--text btn-bg mb-5 mb-sm-0 mx-16 mx-sm-0"

            elevation="2"
            min-width="186"
        >
          Войти
        </v-btn>
        <v-btn
            rounded
            color="white"
            outlined
            class="pa-5 grey--text ml-sm-2 mx-16 mx-sm-0 mb-5 mb-sm-0"

            elevation="2"
            min-width="150"
        >
          Забыли пароль?
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      hasSaved: false,
      model: null,
      state: null,
      states: [
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 },
      ],
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      }
    }
  },
  methods: {
    // customFilter (item, queryText) {
    //   const textOne = item.name.toLowerCase()
    //   const textTwo = item.abbr.toLowerCase()
    //   const searchText = queryText.toLowerCase()
    //
    //   return textOne.indexOf(searchText) > -1 ||
    //       textTwo.indexOf(searchText) > -1
    // },
  },
}
</script>

<style scoped>
.login__bg {
  background: url("../assets/img/login_bg.png") no-repeat;
  background-size: cover;
  min-height: 68.5vh;
  border-radius: 30px;
}

.v-text-field--outlined >>> fieldset {
  border-color: #E47500;
}

.btn-bg {
  background-color: white;
}
</style>
