<template>
  <v-app>
    <Header/>
      <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
body {
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  color: white;
  text-align: center;
}

.theme--light.v-application {
  background: #F5F5F5 !important;
}

.container {
  max-width: 1200px !important;
  padding-top: 26px !important;
  background-color: white;
}

a {
  text-decoration: none !important;
  color: white !important;
}

.white--text {
  color: white !important;
}

.orange--text {
  color: #E47500 !important;
}
</style>
