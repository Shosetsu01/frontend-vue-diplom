<template>
  <v-container>
    <div class="user">
      <h1>This is an user page</h1>
      <UserInfo/>
    </div>
  </v-container>
</template>

<script>
import UserInfo from "@/components/UserInfo";
export default {
  components: {UserInfo}
}
</script>