<template>
  <v-container>
    <UserInfo/>
    <InviteDuel/>
    <InviteCommand/>
  </v-container>
</template>

<script>
import UserInfo from "../components/UserInfo";
import InviteDuel from "../components/InviteDuel";
import InviteCommand from "../components/InviteCommand";

export default {
  name: "User",
  components: {
    UserInfo,
    InviteDuel,
    InviteCommand,
  }

}
</script>

<style lang="scss">
.shadow-disabled {
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>