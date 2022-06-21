<template>
<v-container class="command__bg">
  <h2 class="ml-3 text-left">Создать команду мушкетёров</h2>
  <v-card
      class="shadow-disabled pa-2"
      color="transparent"
  >
    <v-row
        class="pa-4"
        align="center"
        justify="center"
    >
      <v-col class="text-center grey--text text--darken-4">
        <h3 class="text-h5">
          {{ name }}
        </h3>
        <span class="grey--text text--darken-3">{{ title }}</span>
      </v-col>
    </v-row>
    <v-form>
      <v-container style="background-color: transparent">
        <v-row>
          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                v-model="name"
                :disabled="isUpdating"
                color=#777777
                outlined
                rounded
                label="Название команды"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="6"
          >
            <v-autocomplete
                :disabled="isUpdating"
                outlined
                rounded
                :items="groups"
                item-value="id"
                color=#777777
                item-text="name"
                label="Учебная группа"
                v-model="title"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
                v-model="friends"
                :disabled="isUpdating"
                :items="people"
                chips
                color=#777777
                outlined
                rounded
                label="Выберите участников команды"
                item-text="name"
                item-value="name"
                multiple
            >
              <template v-slot:selection="data">
                <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                >
                  <v-avatar left>
<!--                    <v-img :src="data.item.avatar"></v-img>-->
                    <v-icon >mdi-account</v-icon>
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar>
<!--                    <img :src="data.item.avatar" alt="avatar">-->
                    <v-icon >mdi-account</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions class="d-block d-md-flex">
      <v-spacer></v-spacer>
      <v-btn
          :loading="isUpdating"
          @click="saveCommand"
          rounded
          outlined
          class="pa-5 mr-md-2 mt-3 orange--text"
          elevation="2"
      >
        Сохранить команду
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-btn
      color="#777777"
      text
      style="text-transform: none"
      class="mt-4 mb-4"
  >
    <router-link to="/results" class="grey--text text--darken-2"><h3>Посмотреть список <br v-show="$vuetify.breakpoint.xsOnly"> участвующих команд ➜</h3></router-link>
  </v-btn>

  <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      centered
  >
    Команда успешно создана!
  </v-snackbar>

  <v-snackbar
      v-model="errorCommand"
      :timeout="2000"
      absolute
      bottom
      centered
  >
    Заполните поля правильно!
  </v-snackbar>

  <v-snackbar
      v-model="errorBadRequest"
      :timeout="4000"
      absolute
      bottom
      centered
  >
    Имя команды или учебная группа уже используются. <br>
    А также выбранные участники возможно состоять в другой команду.
  </v-snackbar>
</v-container>
</template>

<script>
export default {
  name: "InviteCommand",
  data () {
    return {
      hasSaved: false,
      errorCommand: false,
      errorBadRequest: false,
      friends: [],
      isUpdating: false,
      name: '',
      people: [],
      title: null,
      groups: [],
    }
  },
  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 2000)
      }
    },
  },
  methods: {
    saveCommand () {
      if (this.friends.length <= 5 && this.friends.length >= 3 && this.name && this.title) {
        this.isUpdating = true
        if (this.friends.length === 3) {
          this.friends.push(null)
          this.friends.push(null)
          this.inviteDuel()
        } else if (this.friends.length === 4) {
          this.friends.push(null)
          this.inviteDuel()
        } else {
          this.inviteDuel()
        }
      } else {
        this.errorCommand = true
      }
    },

    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },

    inviteDuel: function () {
      let formData = {
        name: this.name,
        group: this.title,
        firstPeople: this.friends[0],
        secondPeople: this.friends[1],
        thirdPeople: this.friends[2],
        fourthPeople: this.friends[3],
        fifthPeople: this.friends[4],
      }

      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        })
      };
      fetch("http://127.0.0.1:8000/api/v1/command", requestOptions)
          .then(response => {
            if (response.status === 201) {
              this.hasSaved = true
              this.title = null
              this.name = null
              this.friends = null
            } else {
              this.errorBadRequest = true
            }
          })
          .catch((error) => {
            console.log(JSON.stringify(error.response.data))
          })
    }
  },
  mounted() {
    this.friends.push(this.$store.state.savedCurrentUser.last_name+' '+this.$store.state.savedCurrentUser.first_name)
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
        });

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
          for (let i = 0; i < json.length; i++ ) {
            this.people.push({
              name: json[i].last_name+' '+json[i].first_name,
              group: json[i].group
            })
          }

        })
        .catch((error) => {
          console.log(JSON.stringify(error.response))
        });
  }
}
</script>

<style scoped>
.command__bg {
  height: auto;
  background: url("../assets/img/invite_command_bg.png") no-repeat;
  background-size: cover;
}

</style>