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
          <td>{{ item.firstPeople }}</td>
          <td>{{ item.groupFirst }}</td>
          <td> — </td>
          <td>{{ item.secondPeople }}</td>
          <td>{{ item.groupSecond }}</td>
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
      opponents: [],
    }
  },
  mounted() {
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('http://127.0.0.1:8000/api/v1/duel_list', requestOptions)
        .then(response => {
          if (response.status === 200) {
            return response.json()
          }
        })
        .then(json => {
          for (let i = 0; i < json.length; i++ ) {
            if (json[i].acceptDuel === true) {
              this.opponents.push(json[i])
            }
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error.response))
        });
  }
}
</script>

<style scoped>

</style>