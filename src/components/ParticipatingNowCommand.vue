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
          <td>{{ item.firstPeople }}</td>
          <td>{{ item.secondPeople }}</td>
          <td>{{ item.thirdPeople }}</td>
          <td>{{ item.fourthPeople }}</td>
          <td>{{ item.fifthPeople }}</td>
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
    command: [],
  }
  },
  mounted() {
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('http://127.0.0.1:8000/api/v1/command_list', requestOptions)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          }
        })
        .then(json => {
          this.command = json
        })
        .catch((error) => {
          this.submitStatus = 'ERROR'
          console.log(JSON.stringify(error.response))
        });
  }
}
</script>

<style scoped>

</style>