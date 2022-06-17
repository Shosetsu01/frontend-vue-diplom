import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import User from '../views/User.vue'
import Results from '../views/Results.vue'
import Login from "../views/Login";
import Registration from "../views/Registration";
import RebootPassword from "../views/RebootPassword";
import store from "../store";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      beforeEnter(to, from, next) {
        if (store.state.savedCurrentToken) {
          next()
        } else {
          next({
            name: "Login"
          })
        }
      }
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/repass',
      name: 'RebootPassword',
      component: RebootPassword
    }
  ]
})

export default router
