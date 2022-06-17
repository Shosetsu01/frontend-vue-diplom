<template>
  <v-container class="login__bg px-0 mt-1 mt-md-3">
    <v-card
        class="shadow-disabled pa-2 pa-md-16 mt-10 mt-md-4"
    >
      <v-toolbar
          flat
          color="transparent"
      >
        <v-spacer></v-spacer>
        <v-icon class="text-h5 mr-3  text-md-h4 mb-4">mdi-lock-reset</v-icon>
        <v-toolbar-title class="text-h5 text-md-h4 font-weight-medium mr-3 mb-4">
          Восстановление пароля
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form
          ref="form"
          lazy-validation
      >
        <v-row class="justify-center">
          <v-col
              cols="12" md="6" sm="8"
          >
            <v-card-text>
              <v-text-field
                  color=#898989
                  outlined
                  solo
                  rounded
                  label="Электронная почта"
                  type="email"
                  v-model="email"
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()"
              ></v-text-field>
            </v-card-text>
          </v-col>
        </v-row>
      </v-form>
      <p v-if="submitStatus === 'ERROR'" class="red--text"> Заполните данные правильно. </p>
      <p v-if="submitStatus === 'PENDING'" class="orange--text"> Отправка... </p>
      <v-card-actions class="d-flex flex-wrap justify-center">
        <v-btn
            rounded
            color="white"
            outlined
            class="pa-5 grey--text btn-bg mb-5 mb-sm-0 mx-16 mx-sm-0"
            elevation="2"
            min-width="170"
            to="/login"
        >
          Назад
        </v-btn>
        <v-btn
            rounded
            color="white"
            outlined
            class="pa-5 orange--text btn-bg ml-sm-2 mx-16 mx-sm-0 mb-5 mb-sm-0"
            elevation="2"
            min-width="170"
        >
          Отправить
        </v-btn>
      </v-card-actions>
      <v-btn
          text
          style="text-transform: none"
          class="mt-3"
          color=#FA8305
          rounded
      >
        <router-link to="/reg" class="orange--text"><h3>Еще нет аккаунта? Создать ➜</h3></router-link>
      </v-btn>
    </v-card>

    <v-snackbar
        v-model="hasSaved"
        :timeout="2000"
        absolute
        bottom
        centered
    >
      Письмо с информацией было отправлено на почту
    </v-snackbar>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: "RebootPassword",
  mixins: [validationMixin],
  validations: {
    email: { required, email },
  },
  data () {
    return {
      hasSaved: false,
      email: '',
      submitStatus: null,
      model: null,
      show1: false,
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Поле логина не должно оставаться пустым.')
      !this.$v.email.email && errors.push('Электронная почта введена некорректно.')
      return errors
    },
  },
  // methods: {
  //   submit () {
  //     this.rebootPassword()
  //   },
  //
  //   rebootPassword() {
  //     let email;
  //     email = this.email;
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email,
  //       })
  //     };
  //     fetch("http://127.0.0.1:8000/api/v1/", requestOptions)
  //         .then(response => {
  //           if (response.status === 201) {
  //             this.hasSaved = true
  //             setTimeout(() => {
  //               this.$router.push({path: '/login', replace: true})
  //             }, 2000)
  //           }
  //         })
  //         .catch((error) => {
  //           this.submitStatus = 'ERROR'
  //           console.log(JSON.stringify(error.response.data))
  //         })
  //   }
  // },
}
</script>

<style scoped>
.login__bg {
  background: url("../assets/img/login_bg.png") no-repeat;
  background-size: cover;
  min-height: 73.3vh;
  border-radius: 30px;
}

.v-text-field--outlined >>> fieldset {
  border-color: #E47500;
}

.btn-bg {
  background-color: white;
}
</style>
