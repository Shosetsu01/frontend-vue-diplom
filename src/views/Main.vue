<template>
  <v-container>
    <Intro/>
    <Contests/>
    <News/>
    <Winners/>
  </v-container>
</template>

<script>
import Intro from "../components/Intro";
import Contests from "../components/Contests";
import News from "../components/News";
import Winners from "../components/Winners";

export default {
  name: "Main",
  components: {
    Intro,
    Contests,
    News,
    Winners,
  }
}
</script>

<style lang="scss">

.shadow-disabled {
  box-shadow: none !important;
  background-color: transparent !important;
}

</style>