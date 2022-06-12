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
            <v-text-field
                v-model="title"
                :disabled="isUpdating"
                color=#777777
                outlined
                rounded
                label="Учебная группа"
            ></v-text-field>
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
          @click="isUpdating = true"
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
</v-container>
</template>

<script>
export default {
  name: "InviteCommand",
  data () {
    return {
      autoUpdate: true,
      friends: ['Марьин Роман'],
      isUpdating: false,
      name: 'Абобусы Кс-40',
      people: [
        { header: 'Кс-40' },
        { name: 'Поляков Павел', group: 'Кс-40'},
        { name: 'Авдеев Алексей', group: 'Кс-40'},
        { name: 'Букин Никита', group: 'Кс-40' },
        { name: 'Абросимов Владислав', group: 'Кс-40'},
        { name: 'Марьин Роман', group: 'Кс-40'},
        { divider: true },
        { header: 'Кс-44' },
        { name: 'Макляев Илья', group: 'Кс-44'},
        { name: 'Богодухова Алина', group: 'Кс-44'},
        { name: 'Басистый Илья', group: 'Кс-44'},
        { name: 'Бочаров Михаил', group: 'Кс-44'},
      ],
      title: 'Группа Кс-40',
    }
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },

  methods: {
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.command__bg {
  height: auto;
  background: url("../assets/img/invite_command_bg.png") no-repeat;
  background-size: cover;
}
</style>