<template>
  <v-container>
    <v-app-bar
        color=#E47500
        fixed
        elevation="5"
        elevate-on-scroll
    >
      <v-toolbar-title>
        <v-avatar class=""  size="36">
          <img src="https://via.placeholder.com/35" alt="logo"/>
        </v-avatar>
        <router-link to="/" class="header__title" v-show="$vuetify.breakpoint.smAndUp">
          Конкурсы деканата факультета ЦиТХИн
        </router-link>
        <router-link to="/" class="header__title" v-show="$vuetify.breakpoint.xsOnly">
          Конкурсы ЦиТХИн
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
          <v-btn
              color=#E47500
              depressed
          >
            <router-link to="/" class="nav__item">
              Главная
            </router-link>
          </v-btn>
        </v-toolbar-items>

        <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
          <v-btn
              color=#E47500
              depressed
          >
            <router-link to="/results" class="nav__item">
              Результаты
            </router-link>
          </v-btn>
        </v-toolbar-items>

        <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
          <v-btn
              color=#E47500
              depressed
          >
            <router-link to="/user" class="nav__item">
              Личный кабинет
            </router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar-items>

      <v-app-bar-nav-icon
          color=#ffffff
          @click="drawer = true"
          v-show="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        right
        fixed
    >
      <v-list
          nav
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-orange--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/" class="nav__item-burger">
                Главная
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-medal</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/results" class="nav__item-burger">
                Результаты
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/user" class="nav__item-burger">
                Личный кабинет
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style scoped>
.header__title {
  margin-left: 12px;
  color: white;
  vertical-align: middle;
}

.nav__item {
  color: white;
  font-weight: bold;
}

.nav__item-burger {
  color: black;
}

</style>