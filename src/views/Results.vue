<template>
  <div class="results">
    <h1>This is an results page</h1>
    <Intro></Intro>
    <Contests></Contests>
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import Contests from "@/components/Contests";
export default {
  components: {
    Intro,
    Contests,
  }
}
</script>