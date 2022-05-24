<template>
  <v-container>
    <UserInfo/>
    <InviteDuel/>
  </v-container>
</template>

<script>
import UserInfo from "../components/UserInfo";
import InviteDuel from "../components/InviteDuel";

export default {
  name: "User",
  components: {
    UserInfo,
    InviteDuel,
  }

}
</script>

<style lang="scss">
.shadow-disabled {
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>