<template>
  <v-container>
    <Intro/>
    <Contests/>
  </v-container>
</template>

<script>
import Intro from "../components/Intro";
import Contests from "../components/Contests";

export default {
  name: "Main",
  components: {
    Intro,
    Contests
  }
}
</script>

<style scoped>

</style>