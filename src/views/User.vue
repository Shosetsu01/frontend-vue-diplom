<template>
  <v-container>
    <UserInfo/>
    <InviteDuel/>
    <InviteCommand/>
    <Achievements/>
  </v-container>
</template>

<script>
import UserInfo from "../components/UserInfo";
import InviteDuel from "../components/InviteDuel";
import InviteCommand from "../components/InviteCommand";
import Achievements from "../components/Achievements";

export default {
  name: "User",
  components: {
    UserInfo,
    InviteDuel,
    InviteCommand,
    Achievements
  }

}
</script>

<style lang="scss">
.shadow-disabled {
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>