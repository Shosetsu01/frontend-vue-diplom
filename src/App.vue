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
  background-color: white;
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  color: white;
  text-align: center;
}

.container {
  max-width: 1200px !important;
  padding-top: 26px;
}

a {
  text-decoration: none !important;
  color: white !important;
}

.white--text {
  color: white !important;
}
</style>
