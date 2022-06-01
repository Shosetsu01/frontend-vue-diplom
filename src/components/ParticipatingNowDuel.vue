<template>
  <v-container class="px-0">
    <h2 class="text-center mb-5">Пары оппонентов конкурса “Дуэли”</h2>
    <v-simple-table
        dense
        fixed-header
        height="600px"
        class="text-center grey lighten-4"
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-center grey lighten-4">
            Оппонент 1
          </th>
          <th class="text-center grey lighten-4">
            Группа
          </th>
          <th class="text-center grey lighten-4"></th>
          <th class="text-center grey lighten-4">
            Оппонент 2
          </th>
          <th class="text-center grey lighten-4">
            Группа
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in opponents"
            :key="item.id"
        >
          <td>{{ item.people1 }}</td>
          <td>{{ item.group1 }}</td>
          <td> — </td>
          <td>{{ item.people2 }}</td>
          <td>{{ item.group2 }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

  </v-container>
</template>

<script>
export default {
  name: "ParticipatingNowDuel",
  data () {
    return {
      opponents: [
        {
          people1: "Изюмов",
          group1: "Тм-34",
          people2: "Соловов",
          group2: "Кс-10",
        },
        {
          people1: "Изюмов",
          group1: "Тм-34",
          people2: "Соловов",
          group2: "Кс-10",
        },
        {
          people1: "Изюмов",
          group1: "Тм-34",
          people2: "Соловов",
          group2: "Кс-10",
        },
        {
          people1: "Изюмов",
          group1: "Тм-34",
          people2: "Соловов",
          group2: "Кс-10",
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>