<template>
  <v-container>
    <v-app-bar
        color=#E47500
        fixed
        elevation="5"
        elevate-on-scroll
    >
      <router-link to="/">
      <v-toolbar-title>
        <v-avatar size="36">
          <img src="../assets/img/cithin_logo_white.png" alt="logo"/>
        </v-avatar>
        <span class="header__title">Конкурсы деканата <span v-show="$vuetify.breakpoint.smAndUp">факультета ЦиТХИн</span></span>
      </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <router-link to="/">
        <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
          <v-btn
              color=#E47500
              depressed
              class="white--text font-weight-bold"
              min-height="64px"
          >
              Главная
          </v-btn>
        </v-toolbar-items>
        </router-link>

        <router-link to="/results">
        <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
          <v-btn
              color=#E47500
              depressed
              class="white--text font-weight-bold"
              min-height="64px"
          >
              Результаты
          </v-btn>
        </v-toolbar-items>
        </router-link>

        <router-link to="/user" >
        <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp" >
          <v-btn
              color=#E47500
              depressed
              class="white--text font-weight-bold"
              min-height="64px"
          >
              Личный кабинет
              <v-icon class="ml-1 pb-1">mdi-account</v-icon>
          </v-btn>
        </v-toolbar-items>
        </router-link>
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
          <router-link to="/" >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="black--text text-left">
                Главная
            </v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/results" >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-medal</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="black--text text-left">
                Результаты
            </v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/user" >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="black--text text-left">
                Личный кабинет
            </v-list-item-title>
          </v-list-item>
          </router-link>
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

</style>