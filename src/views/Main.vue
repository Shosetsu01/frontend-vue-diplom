<template>
  <v-container class="pb-0">
    <Intro/>
    <News/>
    <Contests/>
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

.headings {
  font-size: 40px;
  margin-bottom: 20px;
}


/*ВЬЮШНЫЙ ТЕГ*/
.v-tabs-slider {
  height: 0;
}

/*ВЬЮШНЫЙ ТЕГ*/
.v-slide-group__content {
  padding: 1px;
}

@media (max-width: 960px) {
  /*ВЬЮШНЫЙ ТЕГ*/
  .v-slide-group__next, .v-slide-group__prev {
    min-width: 10px !important;
  }

  /*ВЬЮШНЫЙ ТЕГ*/
  .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev {
    display: none;
  }
}

@media (max-width: 600px) {

  .headings {
    font-size: 30px;
    line-height: 1.2;
  }
}

</style>