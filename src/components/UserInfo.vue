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
            <v-icon size="160" class="mb-3 white--text">mdi-account</v-icon>
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
                v-model="userData.firstName"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                color=#898989
                outlined
                solo
                rounded
                label="Фамилия"
                type="text"
                v-model="userData.lastName"
            ></v-text-field>
            <v-text-field
                :disabled="!isEditing"
                color=#898989
                outlined
                solo
                rounded
                label="Электронная почта"
                type="email"
                v-model="userData.email"
            ></v-text-field>
            <v-text-field
                v-show="$vuetify.breakpoint.smAndDown"
                :disabled="!isEditing"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                outlined
                solo
                rounded
                color=#898989
                label="Пароль"
                @click:append="show1 = !show1"
                v-model="userData.password"
            ></v-text-field>
            <v-autocomplete
              v-show="$vuetify.breakpoint.smAndDown"
              :disabled="!isEditing"
              outlined
              solo
              rounded
              :items="faculties"
              item-value="id"
              color=#898989
              item-text="name"
              label="Факультет"
              v-model="userData.faculty"
            ></v-autocomplete>
            <v-autocomplete
              v-show="$vuetify.breakpoint.smAndDown"
              :disabled="!isEditing"
              outlined
              solo
              rounded
              :items="groups"
              item-value="id"
              color=#898989
              item-text="name"
              label="Группа"
              v-model="userData.group"
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
                :items="faculties"
                item-value="id"
                color=#898989
                item-text="name"
                label="Факультет"
                v-model="userData.faculty"
            ></v-autocomplete>
            <v-autocomplete
                :disabled="!isEditing"
                outlined
                solo
                rounded
                :items="groups"
                item-value="id"
                color=#898989
                item-text="name"
                label="Группа"
                v-model="userData.group"
            ></v-autocomplete>
            <v-text-field
                :disabled="!isEditing"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                outlined
                solo
                rounded
                color=#898989
                label="Пароль"
                v-model="userData.password"
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
      userData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        group: null,
        faculty: null
      },
      hasSaved: false,
      isEditing: null,
      model: null,
      groups: [],
      faculties: ['ЦиТХИн'],
      show1: false,
    }
  },
  methods: {
    save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
    },

    // changeUserDate: function () {
    //   let formData = {
    //     first_name: null,
    //     last_name: null,
    //     email: null,
    //     password: null,
    //     group: null,
    //     faculty: null
    //   }
    //   formData.first_name = this.firstName
    //   formData.last_name = this.lastName
    //   formData.email = this.email
    //   formData.password = this.password
    //   formData.group = this.group
    //   formData.faculty = this.faculty
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
    //           setTimeout(() => {
    //             this.$router.push({path: '/login', replace: true})
    //           }, 1000)
    //         }
    //       })
    //       .catch((error) => {
    //         this.submitStatus = 'ERROR'
    //         console.log(JSON.stringify(error.response.data))
    //       })
    // }
  },
  mounted() {
    this.userData.firstName = this.$store.state.savedCurrentUser.first_name
    this.userData.lastName = this.$store.state.savedCurrentUser.last_name
    this.userData.email = this.$store.state.savedCurrentUser.email
    this.userData.group = this.$store.state.savedCurrentUser.group
    this.userData.faculty = this.$store.state.savedCurrentUser.faculty

    let getGroups;
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('http://127.0.0.1:8000/api/v1/groups_list', requestOptions)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          }
        })
        .then(json => {
          getGroups = json
          for (let i = 0; i < getGroups.length; i++ ) {
            this.groups.push(getGroups[i].name)
          }
        })
        .catch((error) => {
          this.submitStatus = 'ERROR'
          console.log(JSON.stringify(error.response))
        })
  }
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