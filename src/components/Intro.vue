<template>
  <v-container class="px-0">
    <div class="intro_bg" ref="intro">
      <div class="intro_bg__content">
        <p>Факультет ЦиТХИн</p>
        <h2 class="headings">Конкурсы декана</h2>
        <img src="../assets/img/contests.png" id="contests" alt="">
        <p>
          Веб-портал создан для студентов факультета Цифровых технологий
          и химического инжиниринга РХТУ им. Д.И. Менделеева.
          Для участия в конкурсах Вам необходимо зарегистрироваться.
        </p>
        <v-btn
            large
            rounded
            color="#FA8305"
            dark
            class="more"
            @click="matchHeight"
        >
          Узнать больше
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
  methods: {
    matchHeight () {
      let height = this.$refs.intro.clientHeight;
      if (this.$vuetify.breakpoint.smOnly) {
        window.scrollTo({
          top: 2*height+220,
          behavior: 'smooth'
        })
      } else {
        window.scrollTo({
          top: 2*height+15,
          behavior: 'smooth'
        })
      }
    }
  },
}
</script>

<style scoped>
.intro_bg{
  background: url("../assets/img/intro_bg.png") no-repeat 64%;
  background-size: cover;
  width: 100%;
  height: 666px;
  margin: 0 auto;
}

.intro_bg__content {
  width: 600px;
  position: absolute;
  margin-top: 10%;
  text-align: justify;
  padding-left: 6%;
}

.more {
  text-transform: none;
}

.intro_bg__content p:nth-child(1) {
  color: #FA8305;
}

.intro_bg__content p:nth-child(-n+2) {
  font-weight: bold;
}

.intro_bg__content p:nth-child(1) {
  font-size: 32px;
}
.intro_bg__content p:nth-child(2) {
  font-size: 40px;
  margin-top: 4%;
}
.intro_bg__content p:nth-child(4) {
  font-size: 18px;
  margin-top: 8%;
  margin-bottom: 6%;
}

#contests {
  display: none;
}

@media screen and (max-width: 600px) {
  .intro_bg {
    background: url("../assets/img/intro_bg_md.png") no-repeat 48%;
    background-size: cover;
    height: 670px;
  }

  #contests {
    width: 72%;
    display: block;
    margin: 4% auto 4% auto;
  }

  .intro_bg__content {
    width: 88%;
    text-align: justify;
    margin: 4% 0;
  }

  .intro_bg__content p:nth-child(4) {
    margin-top: 8%;
    margin-bottom: 8%;
  }

  .more {
    text-transform: none;
    font-size: 16px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 40px;
    margin-bottom: 8%;
  }
}

@media screen and (max-width: 420px) {
  .intro_bg__content p:nth-child(4) {
    margin-top: 8%;
    margin-bottom: 14%;
  }
}

@media screen and (max-width: 372px) {
  .intro_bg {
    height: 710px;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .intro_bg__content {
    width: 80%;
    text-align: justify;
    margin: 6% 6%;
  }
  .intro_bg {
    background: url("../assets/img/intro_bg_md.png") no-repeat 10% 10%;
    background-size: cover;
    height: 460px;
  }
  .more {
    text-transform: none;
    font-size: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 40px;
  }
}

@media (min-width: 600px) and (max-width: 769px) {
  .intro_bg__content p:nth-child(4) {
    font-size: 20px;
    margin-top: 7%;
    margin-bottom: 3%;
  }
}

@media (min-width: 960px) and (max-width: 1200px) {
  .intro_bg__content {
    width: 530px;
    text-align: justify;
  }
}

@media (min-width: 1200px) {
  .intro_bg__content {
    margin-top: 70px;
    padding-left: 110px;
  }
}
</style>