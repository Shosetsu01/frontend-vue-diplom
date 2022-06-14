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
        name: "Бутерброды с сыром",
        group: "Кс-44",
        member1: "Дорохов",
        member2: "Аржаков",
        member3: "Строилов",
        member4: "Баспалая",
        member5: "Довыдов",
      },
      {
        name: "Изюм и Курага",
        group: "Кс-36",
        member1: "Сидоров",
        member2: "Богодухова",
        member3: "Дворовой",
      },
      {
        name: "Абобусы Кс-40",
        group: "Кс-40",
        member1: "Авдеев",
        member2: "Абросимов",
        member3: "Букин",
        member4: "Марьин",
      },
      {
        name: "Атланты",
        group: "Кс-10",
        member1: "Игнатов",
        member2: "Андреев",
        member3: "Иванов",
        member4: "Бессогонова",
        member5: "Деев",
      },
    ],
  }
  },
  // mounted() {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   fetch('http://127.0.0.1:8000/api/v1/', requestOptions)
  //       .then(resp => {
  //         console.log(resp);
  //         if (!resp.ok) {
  //           throw Error(resp.statusText);
  //         }
  //         return resp.json()
  //       })
  //       .then(data => {
  //         this.command = data
  //       }).catch(error => {
  //     console.log(error)
  //   });
  // }
}
</script>

<style scoped>

</style>