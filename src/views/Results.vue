<template>
  <v-container class="pb-0">
    <ParticipatingNowCommand/>
    <ParticipatingNowDuel/>
    <Archive/>
  </v-container>
</template>

<script>
import Archive from "../components/Archive";
import ParticipatingNowCommand from "../components/ParticipatingNowCommand";
import ParticipatingNowDuel from "../components/ParticipatingNowDuel";

export default {
  name: "Results",
  components: {
    Archive,
    ParticipatingNowCommand,
    ParticipatingNowDuel
  }

}
</script>

<style scoped>

</style>