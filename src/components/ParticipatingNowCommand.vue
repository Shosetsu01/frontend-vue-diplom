<template>
<v-container class="px-0">
  <h2 class="text-center mb-5">Составы команд конкурса “Три мушкетера”</h2>
    <v-simple-table
      dense
      fixed-header
      height="600px"
      class="text-left grey lighten-4"
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left grey lighten-4">
            Название команды
          </th>
          <th class="text-left grey lighten-4">
            Группа
          </th>
          <th class="text-left grey lighten-4">
            Участник 1
          </th>
          <th class="text-left grey lighten-4">
            Участник 2
          </th>
          <th class="text-left grey lighten-4">
            Участник 3
          </th>
          <th class="text-left grey lighten-4">
            Участник 4
          </th>
          <th class="text-left grey lighten-4">
            Участник 5
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in command"
            :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.group }}</td>
          <td>{{ item.member1 }}</td>
          <td>{{ item.member2 }}</td>
          <td>{{ item.member3 }}</td>
          <td>{{ item.member4 }}</td>
          <td>{{ item.member5 }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

</v-container>
</template>

<script>
export default {
  name: "ParticipatingNowCommand",
  data () {
  return {
    command: [
      {
        name: "Мушкетеры",
        group: "Кс-40",
        member1: "Авдеев",
        member2: "Абросимов",
        member3: "Букин",
        member4: "Бессогонова",
        member5: "Деев",
      },
      {
        name: "Мушкетеры",
        group: "Кс-40",
        member1: "Авдеев",
        member2: "Абросимов",
        member3: "Бессогонова",
        member4: "Деев",
      },
      {
        name: "Мушкетеры",
        group: "Кс-40",
        member1: "Авдеев",
        member2: "Абросимов",
        member3: "Букин",

      },
      {
        name: "Мушкетеры",
        group: "Кс-40",
        member1: "Авдеев",
        member2: "Абросимов",
        member3: "Букин",
        member4: "Бессогонова",
        member5: "Деев",
      },
    ],
  }
  }
}
</script>

<style scoped>

</style>