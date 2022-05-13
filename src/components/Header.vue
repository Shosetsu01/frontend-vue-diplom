<template>
  <div>
    <v-app-bar
        color=#b94289
        elevation="2"
    >

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>

        <v-toolbar-items class="" id="nav">
          <router-link to="/results">
            Results
          </router-link>
        </v-toolbar-items>

        <v-toolbar-items class="" id="nav">
          <router-link to="/user">
            User
          </router-link>
        </v-toolbar-items>

      </v-toolbar-items>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>