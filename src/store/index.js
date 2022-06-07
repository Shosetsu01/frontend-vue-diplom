import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        savedCurrentUser: null,
        savedCurrentToken: null,
    },
    mutations: {
        savedCurrentUser: function (state, data) {
            state.savedCurrentUser = data;
        },
        savedCurrentToken: function (state, data) {
            state.savedCurrentToken = data;
        }
    },
    actions: {
        clearCurrentToken: function (state) {
            state.savedCurrentUser = ''
            state.savedCurrentToken = ''
        }
    },
    getters: {}
})
