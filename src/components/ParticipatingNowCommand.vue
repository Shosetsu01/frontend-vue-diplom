<template>
<v-container>
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
            Учасник 1
          </th>
          <th class="text-left grey lighten-4">
            Учасник 2
          </th>
          <th class="text-left grey lighten-4">
            Учасник 3
          </th>
          <th class="text-left grey lighten-4">
            Учасник 4
          </th>
          <th class="text-left grey lighten-4">
            Учасник 5
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in desserts"
            :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.nam }}</td>
          <td>{{ item.cal }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.nam }}</td>
          <td>{{ item.cal }}</td>
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
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: '52142149 124124 2141241',
        nam: 'Frozen Yogurtркыурекрыекр ыеоргыкр',
        cal: '159 ыероыекреырыек еырыерые',
      },
    ],
  }
  }
}
</script>

<style scoped>

</style>