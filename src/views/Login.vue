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
        <v-icon class="text-h5 mr-3  text-md-h4 mb-4">mdi-account</v-icon>
        <v-toolbar-title class="text-h5 text-md-h4 font-weight-medium mr-3 mb-4">
          Привет!
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
              <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  v-model="password"
                  @input="$v.password.$touch()"
                  :error-messages="passwordErrors"
                  outlined
                  solo
                  rounded
                  color=#898989
                  label="Пароль"
                  @click:append="show1 = !show1"
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
            class="pa-5 orange--text btn-bg mb-5 mb-sm-0 mx-16 mx-sm-0"
            elevation="2"
            min-width="186"
            @click="submit"
        >
          Войти
        </v-btn>
        <v-btn
            rounded
            color="white"
            outlined
            class="pa-5 grey--text btn-bg ml-sm-2 mx-16 mx-sm-0 mb-5 mb-sm-0"
            elevation="2"
            min-width="150"
            to="/repass"
        >
          Забыли пароль?
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
</v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, maxLength }
  },
  data () {
    return {
      email: '',
      password: '',
      submitStatus: null,
      model: null,
      show1: false,
      get_data: [],
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
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Поле пароля не должно оставаться пустым.')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.Login()
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 100)
      }
    },

    Login() {
      let email, password;
      email = this.email;
      password = this.password;
      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      };
      fetch("http://127.0.0.1:8000/api/v1/login", requestOptions)
          .then(response => {
            if (response.status === 200) {
              return response.json()
            }
          })
          .then(result => {
              this.$store.commit('savedCurrentUser', result.user)
              this.$store.commit('savedCurrentToken', result.token)
              this.$router.push({path: '/user', replace: true})
          })
          .catch((error) => {
            this.submitStatus = 'ERROR'
            console.log(JSON.stringify(error.response.data))
          })
    }
  },
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
