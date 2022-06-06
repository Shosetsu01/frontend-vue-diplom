<template>
<!--  <v-container>-->
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
            Регистрация
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-row>
          <v-col
              cols="12" md="6"
          >
            <v-card-text>
              <v-text-field
                  color=#898989
                  outlined
                  solo
                  rounded
                  label="Имя"
                  type="text"
              ></v-text-field>
              <v-text-field
                  color=#898989
                  outlined
                  solo
                  rounded
                  label="Фамилия"
                  type="text"
              ></v-text-field>
              <v-text-field
                  color=#898989
                  outlined
                  solo
                  rounded
                  label="Электронная почта"
                  type="email"
              ></v-text-field>
              <v-text-field
                  v-show="$vuetify.breakpoint.smAndDown"
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
              <v-autocomplete
                  v-show="$vuetify.breakpoint.smAndDown"
                  outlined
                  solo
                  rounded
                  :items="states"
                  item-value="id"
                  v-model = state
                  color=#898989
                  item-text="name"
                  label="Факультет"
              ></v-autocomplete>
              <v-autocomplete
                  v-show="$vuetify.breakpoint.smAndDown"
                  outlined
                  solo
                  rounded
                  :items="states"
                  item-value="id"
                  v-model = state
                  color=#898989
                  item-text="name"
                  label="Группа"
              ></v-autocomplete>
            </v-card-text>
          </v-col>
          <v-col
              cols="12" md="6"
              v-show="$vuetify.breakpoint.mdAndUp"
          >
            <v-card-text>
              <v-autocomplete
                  outlined
                  solo
                  rounded
                  :items="states"
                  item-value="id"
                  v-model = state
                  color=#898989
                  item-text="name"
                  label="Факультет"
              ></v-autocomplete><v-autocomplete
                outlined
                solo
                rounded
                :items="states"
                item-value="id"
                v-model = state
                color=#898989
                item-text="name"
                label="Группа"
            ></v-autocomplete>
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
        <v-card-actions class="d-block d-md-flex">
          <v-spacer></v-spacer>
          <v-btn
              rounded
              color="white"
              outlined
              class="pa-5 mr-md-3 mb-4 orange--text btn-bg"
              @click="save"
              elevation="2"
              to="/user"
          >
            Создать аккаунт
          </v-btn>
        </v-card-actions>
        <v-snackbar
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            centered
        >
          Спасибо за регистрацию в личном кабинете
        </v-snackbar>
      </v-card>
    </v-container>
<!--  </v-container>-->
</template>

<script>
export default {
  name: "Registration",
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
    save () {
      this.hasSaved = true
    },
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
