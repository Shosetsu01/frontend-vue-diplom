<template>
  <v-container class="user__intro">
    <v-card
        class="overflow-hidden shadow-disabled"
    >
      <v-toolbar
          flat
          color="transparent"
      >
        <v-icon class="mr-3">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-medium">
          Данные пользователя
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            color=#E47500
            fab
            small
            @click="isEditing = !isEditing"
        >
          <v-icon v-if="isEditing">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-pencil
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-row>
        <v-col
            cols="12" md="4"
        >
          <v-avatar
              size="200px"
              color=#E47500
              class="mt-md-8 ml-md-7"
          >
            <img
                src="https://via.placeholder.com/200"
                alt="avatar"
            >
          </v-avatar>
        </v-col>
        <v-col
            cols="12" md="4"
        >
          <v-card-text>
            <v-text-field
                :disabled="!isEditing"
                color=#898989
                outlined
                solo
                rounded
                label="Имя"
                type="text"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                color=#898989
                outlined
                solo
                rounded
                label="Фамилия"
                type="text"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                color=#898989
                outlined
                solo
                rounded
                label="Электронная почта"
                type="email"
            ></v-text-field>
            <v-text-field
                v-show="$vuetify.breakpoint.smAndDown"
                :disabled="!isEditing"
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
              :disabled="!isEditing"
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
              :disabled="!isEditing"
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
            cols="12" md="4"
            v-show="$vuetify.breakpoint.mdAndUp"
        >
          <v-card-text>
            <v-autocomplete
                :disabled="!isEditing"
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
                :disabled="!isEditing"
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
                :disabled="!isEditing"
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
            :disabled="!isEditing"
            rounded
            color="white"
            outlined
            class="pa-5 mr-md-3 mb-4 orange--text btn-bg"
            @click="save"
            elevation="2"
        >
          Сохранить изменения
        </v-btn>
      </v-card-actions>
      <v-snackbar
          v-model="hasSaved"
          :timeout="2000"
          absolute
          bottom
          centered
      >
        Данные профиля пользователя были обновлены.
      </v-snackbar>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "UserInfo",
  data () {
    return {
      hasSaved: false,
      isEditing: null,
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
      this.isEditing = !this.isEditing
      this.hasSaved = true
    },
  },
}
</script>

<style scoped>
.user__intro {
  height: auto;
  background: url("../assets/img/user_bg.png") no-repeat;
  background-size: cover;
}

.v-text-field--outlined >>> fieldset {
  border-color: #E47500;
}

.btn-bg {
  background-color: white;
}

</style>