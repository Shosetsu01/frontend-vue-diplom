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
            @click="dialog = true"
            class="mr-3"
            v-show="inviteDuel.length > 0"
        >
          <v-icon>
            mdi-email-newsletter
          </v-icon>
        </v-btn>
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

    <v-dialog
        v-model="dialog"
        width="700"
    >
      <v-card style="border-radius: 20px !important;">
        <v-card-title class="text-h6 orange--text justify-center mb-3">
          Входящие вызовы на дуэль
        </v-card-title>
        <v-card-text class="text-justify">
          <v-row
              v-for="item in inviteDuel"
              :key="item.id"
          >
            <v-col cols="6" class="text-sm-h4 text-h6"> {{ item.firstPeople }} </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6" class="text-right">
              <v-spacer></v-spacer>
              <v-btn
                  color=#E47500
                  fab
                  small
                  @click="rejectDuel(item)"
                  class="mr-3"
              >
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
              <v-btn
                  color=#E47500
                  fab
                  small
                  @click="acceptDuel(item)"
              >
                <v-icon>
                  mdi-check
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="#FA8305"
              text
              @click="dialog = false"
              min-width="150"
          >
            Закрыть
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {
  name: "UserInfo",
  data () {
    return {
      dialog: false,
      inviteDuel: [],
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

    acceptDuel (item) {
      const index = this.inviteDuel.indexOf(item)
      let formData = {
        id: item.id,
        firstPeople: item.firstPeople,
        groupFirst: item.groupFirst,
        secondPeople: item.secondPeople,
        groupSecond: item.groupSecond,
        acceptDuel: true
        }
      const address = "http://127.0.0.1:8000/api/v1/update_duel/"+item.id+"/"
      const requestOptions = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        }),
      };

      fetch(address, requestOptions)
          .then(response => {
            if (response.status === 200) {
              if (index >= 0) this.inviteDuel.splice(index, 1)
              this.dialog = false
              setTimeout(() => {
                             this.inviteDuel = null
                          }, 1000)
            }
          })
          .catch((error) => {
            console.log(JSON.stringify(error.response.data))
          })
    },

    rejectDuel (item) {
      const index = this.inviteDuel.indexOf(item)
      let formData = {
        id: item.id,
        firstPeople: item.firstPeople,
        groupFirst: item.groupFirst,
        secondPeople: item.secondPeople,
        groupSecond: item.groupSecond,
        acceptDuel: false
      }
      const address = "http://127.0.0.1:8000/api/v1/delete_duel/"+item.id+"/"
      const requestOptions = {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        }),
      };

      fetch(address, requestOptions)
          .then(response => {
            if (response.status === 204) {
              if (index >= 0) this.inviteDuel.splice(index, 1)
              this.dialog = false
            }
          })
          .catch((error) => {
            console.log(JSON.stringify(error.response.data))
          })
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
      // const requestOptions = {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     ...formData
      //   })
      // };
      // fetch("http://127.0.0.1:8000/api/v1/registration", requestOptions)
      //     .then(response => {
      //       if (response.status === 201) {
      //         this.hasSaved = true
      //         setTimeout(() => {
      //           this.$router.push({path: '/login', replace: true})
      //         }, 1000)
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(JSON.stringify(error.response.data))
      //     })
    // }
  },
  mounted() {
    this.userData.firstName = this.$store.state.savedCurrentUser.first_name
    this.userData.lastName = this.$store.state.savedCurrentUser.last_name
    this.userData.email = this.$store.state.savedCurrentUser.email
    this.userData.group = this.$store.state.savedCurrentUser.group
    this.userData.faculty = this.$store.state.savedCurrentUser.faculty

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
          for (let i = 0; i < json.length; i++ ) {
            this.groups.push(json[i].name)
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error.response))
        })

    fetch('http://127.0.0.1:8000/api/v1/duel_list', requestOptions)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          }
        })
        .then(json => {
          for (let i = 0; i < json.length; i++ ) {
            if ((this.userData.lastName + ' ' + this.userData.firstName) === json[i].secondPeople
                && json[i].acceptDuel === false) {
              this.inviteDuel.push(json[i])
            }
          }
        })
        .catch((error) => {
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