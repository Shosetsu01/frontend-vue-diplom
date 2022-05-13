<template>
<v-container>
  <div style="background-color: #FDF6EE">
    <div class="mob">
      <p style="color: #FA8305; font-weight: bold; font-size: calc(8px + 1vw);">Факультет ЦиТХИн</p>
      <p style="font-weight: bold; font-size: calc(22px + 1vw); margin-top: 4%;">Конкурсы декана</p>
      <p style="font-size: calc(5px + 1vw); margin-top: 6%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea eum molestiae quidem? Consequuntur ea eius iure modi necessitatibus, nostrum numquam, possimus praesentium quidem quos repellendus rerum sequi ullam voluptas!</p>
      <v-btn
          rounded
          color="#FA8305"
          dark
          class="more"
      >
        Узнать больше
      </v-btn>
    </div>
  </div>
  <div class="intro_bg">
    <div class="intro_bg__content">
      <p style="color: #FA8305; font-weight: bold; font-size: calc(8px + 1vw);">Факультет ЦиТХИн</p>
      <p style="font-weight: bold; font-size: calc(22px + 1vw); margin-top: 4%;">Конкурсы декана</p>
      <p style="font-size: calc(5px + 1vw); margin-top: 6%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea eum molestiae quidem? Consequuntur ea eius iure modi necessitatibus, nostrum numquam, possimus praesentium quidem quos repellendus rerum sequi ullam voluptas!</p>
      <v-btn
          rounded
          color="#FA8305"
          dark
          class="more"
      >
        Узнать больше
      </v-btn>
    </div>
  </div>
</v-container>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style scoped>
.intro_bg{
  background: url("../assets/img/intro_fon.png") no-repeat 10% 10%;
  background-size: 100% auto;
  width: 100%;
  height: 666px;
  margin: 0 auto;
  /*padding: 0 20px;*/
}
.more {
  text-transform: none;
  font-size: calc(5px + 1vw);
  margin-top: 6%;
}
.intro_bg__content {
  width: 40%;
  position: absolute;
  margin-top: 10%;
  text-align: left;
  padding-left: 8%;
}

.mob {
  display: none;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  padding: 5px;
}

@media screen and (max-width: 500px) {
  .mob {
    display: block;
  }
  .intro_bg__content {
    display: none;
  }
}
</style>