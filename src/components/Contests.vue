<template>
  <v-container class="block_contents">
    <v-card
        class="shadow-disabled"
    >
      <h2 class="headings">
        Подробнее о конкурсах
      </h2>
      <v-tabs
          color="#FA8305"
          centered
          :height="isMobile"
      >
        <v-tab class="contests_tabs">
          <img src="../assets/img/command_img.png" alt="command_img" class="mb-md-3 mb-4">
          <p>Три Мушкетера</p>
        </v-tab>
        <v-tab class="contests_tabs">
          <img src="../assets/img/duel_img.png" alt="duel_img" class="mb-md-3 mb-4">
          <p>Дуэли</p>
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              Три Мушкетера
            </v-card-title>
            <v-card-text class="text-justify">
              <p> 1. Всем желающим принять участие в конкурсе необходимо сформировать отряды, состоящие из 3–5 студентов любых групп нашего факультета.
              Отряды могут иметь любое адекватное название. Основная задача каждого отряда – набрать по итогам семестра наивысший рейтинг среди всех участвующих отрядов.
              При расчёте рейтинга отряда учитываются не только результаты отдельных его мушкетёров в текущем семестре, но и то, насколько они улучшились или ухудшились по сравнению с предыдущим семестром.
              </p>
              <p>
              2. Каждая учебная группа должна выставить для защиты чести группы один отряд из 3–5 своих студентов, не задействованных в других отрядах. Результаты этого отряда повлияют на рейтинг всей учебной группы в конкурсе «Лучшая группа». В названии такого отряда должно присутствовать имя группы, например: «Спецназ Тм-10». Если группа не выставит отряд, в конкурсе лучших групп для неё будет использован коэффициент, соответствующий худшему среди всех заявившихся групп.
              </p>
              <p>
              3. Для регистрации в конкурсе любой из участников сформированного отряда должен в личном кабинете добавить участников в команду. Примеры отрядов:
              Отряд «Белоснежка и семь гномов» (независимый):
              – Маргарита Вальдек (Тм-38);
              – Соня Мечтательный (Тм-38);
              – Весельчак У (МТ-10);
              – Тихоня Мирный (К-43)
              или
              Отряд "Богатыри Тм-10" (от группы Тм-10):
              - Илья Муромцев (Тм-10);
              - Никита Добрынин (Тм-10);
              - Алексей Попов (Тм-10).
              Каждый студент может быть участником только одного отряда.
              </p>
              <p>
              4. Итоги конкурса будут подведены и обнародованы в конце учебного семестра. Отряд-победитель и отряды-призёры получат дипломы.
              </p>
              <p>
                <a href="https://drive.google.com/file/d/1nOOiE4K50SGeZ2HiKAuFFeNkkVnd8VJq/view?usp=sharing" target="_blank" class="orange--text text-decoration-underline">Полный текст положения конкурса.</a>
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              Дуэли
            </v-card-title>
            <v-card-text class="text-justify">
              <p>
                1. Для участия должны быть сформированы пары дуэлянтов из студентов факультета ЦиТХИн.
                Основная задача каждого дуэлянта – заработать по итогам семестра интегральный учебный рейтинг выше, чем у его оппонента, и набрать наибольшее значение дуэльного рейтинга среди всех студентов, принимающих участие в дуэлях.
                При расчёте дуэльного рейтинга учитываются не только результаты оппонентов в текущем семестре, но и их изменение по сравнению с предыдущим семестром.
              </p>
              <p>
                2. Для регистрации в конкурсе любой студент факультета (кроме групп выпускного курса) должен вызвать своего оппонента на Дуэль в своем личном кабинета.
                Оппонент должен принять Ваш вызов. Дуэль будет считаться зарегистрированной, а студенты участвующими в конкурсе только при наличии вызова одного и положительного ответа другого.
                До тех пор пока пара оппонентов не сформирована (нет положительного ответа второго оппонента), каждый из потенциальных оппонентов может стать участником другой пары дуэлянтов. Пожалуйста, не отправляйте более одного вызова на дуэль.
              </p>
              <p>
                3. Каждый студент может стать участником только одной дуэли в семестре (первой подтверждённой).
                Участие студента в других конкурсах учебных достижений («Три мушкетёра») не является препятствием для участия в данном конкурсе.
              </p>
              <p>
                4. Итоги конкурса будут подведены и обнародованы в конце учебного семестра.
                Победители (обладатели наивысшего дуэльного рейтинга) и призёры (2 и 3 места в дуэльном рейтинге) получат дипломы.
              </p>
              <p>
                <a href="https://drive.google.com/file/d/13q-5-KAWUaQL1msKsUrT9YaM5B9FFoXq/view?usp=sharing" target="_blank" class="orange--text text-decoration-underline">Полный текст положения конкурса.</a>
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Contests",
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return "210px"
      }
      else {
        return "320px"
      }
    }
  },
}
</script>

<style scoped>

.block_contents {
  min-height: 660px;
}

.contests_tabs {
  display: block;
  border-radius: 30px;
  margin: 20px;
}

.contests_tabs img {
  display: block;
}

.contests_tabs img:nth-child(1) {
  width: 230px;
  margin-top: 5px;
}

.contests_tabs img:nth-child(3) {
  margin: 0 auto;
}

.contests_tabs p {
  display: block;
  color: black;
}

/*Vue system tags*/
.v-tab--active {
  box-shadow: 0 0 0 1px #FA8305;
}

/*Vue system tags*/
.theme--light.v-tabs .v-tab:hover::before {
  border-radius: 30px;
  color: #FA8305;
}

.theme--light.v-tabs .v-tab:focus::before{
  border-radius: 30px;
  color: #FA8305;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #FA8305;
}

@media (max-width: 600px) {
  .contests_tabs {
    margin: 20px 1px;
  }

  .contests_tabs img:nth-child(1) {
    width: 126px;
  }

  .contests_tabs {
    height: 180px;
  }
}
</style>