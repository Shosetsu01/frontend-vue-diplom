<template>
  <v-container class="login__bg px-0 mt-1 mt-md-3">
    <v-card
        class="shadow-disabled pa-md-16 mt-md-4"
    >
      <v-toolbar
          flat
          color="transparent"
      >
        <v-spacer></v-spacer>
        <v-icon class="text-h5 mr-3  text-md-h4 mb-4">mdi-account</v-icon>
        <v-toolbar-title class="text-h5 text-md-h4 font-weight-medium mr-3 mb-4">
          Регистрация
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form
          ref="form"
          lazy-validation
      >
        <v-row>
          <v-col
              cols="12" md="6"
          >
            <v-card-text>
              <v-text-field
                  color=#898989
                  outlined
                  solo
                  rounded
                  label="Имя"
                  type="text"
                  v-model="firstName"
                  :error-messages="firstNameErrors"
                  @input="$v.firstName.$touch()"
              ></v-text-field>
              <v-text-field
                  color=#898989
                  outlined
                  solo
                  rounded
                  label="Фамилия"
                  type="text"
                  v-model="lastName"
                  :error-messages="lastNameErrors"
                  @input="$v.lastName.$touch()"
              ></v-text-field>
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
                  v-show="$vuetify.breakpoint.smAndDown"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  outlined
                  solo
                  rounded
                  color=#898989
                  label="Пароль"
                  @click:append="show1 = !show1"
                  v-model="password"
                  :error-messages="passwordErrors"
                  @input="$v.password.$touch()"
              ></v-text-field>
              <v-autocomplete
                  v-show="$vuetify.breakpoint.smAndDown"
                  outlined
                  solo
                  rounded
                  :items="faculties"
                  item-value="id"
                  color=#898989
                  item-text="faculty"
                  label="Факультет"
                  v-model="faculty"
                  :error-messages="facultyErrors"
                  @input="$v.faculty.$touch()"
              ></v-autocomplete>
              <v-autocomplete
                  v-show="$vuetify.breakpoint.smAndDown"
                  outlined
                  solo
                  rounded
                  :items="groups"
                  item-value="id"
                  color=#898989
                  item-text="group"
                  label="Группа"
                  v-model="group"
                  :error-messages="groupErrors"
                  @input="$v.group.$touch()"
              ></v-autocomplete>
            </v-card-text>
          </v-col>
          <v-col
              cols="12" md="6"
              v-show="$vuetify.breakpoint.mdAndUp"
          >
            <v-card-text>
              <v-autocomplete
                  outlined
                  solo
                  rounded
                  :items="faculties"
                  item-value="id"
                  color=#898989
                  item-text="faculty"
                  label="Факультет"
                  v-model="faculty"
                  :error-messages="facultyErrors"
                  @input="$v.faculty.$touch()"
              ></v-autocomplete><v-autocomplete
                outlined
                solo
                rounded
                :items="groups"
                item-value="id"
                color=#898989
                item-text="group"
                label="Группа"
                v-model="group"
                :error-messages="groupErrors"
                @input="$v.group.$touch()"
            ></v-autocomplete>
              <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  outlined
                  solo
                  rounded
                  color=#898989
                  label="Пароль"
                  @click:append="show1 = !show1"
                  v-model="password"
                  :error-messages="passwordErrors"
                  @input="$v.password.$touch()"
              ></v-text-field>
            </v-card-text>
          </v-col>
        </v-row>
      </v-form>
      <v-card-actions class="d-block d-md-flex">
        <v-btn
            rounded
            color="white"
            outlined
            class="pa-5 grey--text btn-bg ml-md-3 mb-4"
            elevation="2"
            min-width="193"
            to="/login"
        >
          Назад
        </v-btn>
        <v-spacer></v-spacer>
        <p v-if="submitStatus === 'ERROR'" class="red--text"> Заполните данные правильно. </p>
        <p v-if="submitStatus === 'PENDING'" class="orange--text"> Обработка данных... </p>
        <v-spacer></v-spacer>
        <v-btn
            rounded
            color="white"
            outlined
            class="pa-5 mr-md-3 mb-4 orange--text btn-bg"
            @click="submit"
            elevation="2"
        >
          Создать аккаунт
        </v-btn>
      </v-card-actions>
      <v-snackbar
          v-model="hasSaved"
          :timeout="2000"
          absolute
          bottom
          centered
      >
        Спасибо за регистрацию в личном кабинете
      </v-snackbar>
    </v-card>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
// import axios from "axios";


export default {
  name: "Registration",

  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    firstName: { required },
    lastName: { required },
    group: { required },
    faculty: { required },
  },

  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      group: null,
      faculty: null,
      groups: ['Кс-40', 'Кс-30'],
      faculties: ['ЦиТХИн', 'НПМ'],
      hasSaved: false,
      show1: false,
      submitStatus: null,
      message: null
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Поле не должно оставаться пустым.')
      !this.$v.email.email && errors.push('Введите корректный адрес электронной почты')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Поле не должно оставаться пустым.')
      !this.$v.password.minLength && errors.push('Мин. 8 символов, включая хотя бы одну заглавную букву и цифру.')
      return errors
    },
    firstNameErrors () {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.required && errors.push('Поле не должно оставаться пустым.')
      return errors
    },
    lastNameErrors () {
      const errors = []
      if (!this.$v.lastName.$dirty) return errors
      !this.$v.lastName.required && errors.push('Поле не должно оставаться пустым.')
      return errors
    },
    groupErrors () {
      const errors = []
      if (!this.$v.group.$dirty) return errors
      !this.$v.group.required && errors.push('Поле не должно оставаться пустым.')
      return errors
    },
    facultyErrors () {
      const errors = []
      if (!this.$v.faculty.$dirty) return errors
      !this.$v.faculty.required && errors.push('Поле не должно оставаться пустым.')
      return errors
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log('send...')
        this.Registration()
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },

    Registration: function () {
      let formData = {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        group: null,
        faculty: null
      }

      formData.first_name = this.firstName
      formData.last_name = this.lastName
      formData.email = this.email
      formData.password = this.password
      formData.group = this.group
      formData.faculty = this.faculty

      console.log(formData)
      // axios({
      //   method: 'post',
      //   url: 'http://127.0.0.1:8000/api/v1/registration',
      //   data: formData,
      //   headers: { 'Content-Type': 'multipart/form-data' }
      // }).then(response => {
      //   if (response.status === 200) {
      //     console.log(response.data)
      //     this.$router.push({path: '/login', replace: true})
      //   } else {
      //     console.log(response.data)
      //   }
      // })
      //     .catch((error) => {
      //       console.log(JSON.stringify(error.response.data))
      //     })

      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        })
      };
      fetch("http://127.0.0.1:8000/api/v1/registration", requestOptions)
          .then(response => {
            if (response.status === 201) {
              this.hasSaved = true
              setTimeout(() => {
                this.$router.push({path: '/login', replace: true})
              }, 1000)
            }
          })
          .catch((error) => {
            this.submitStatus = 'ERROR'
            console.log("error")
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
