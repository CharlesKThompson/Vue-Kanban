import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

var api = axios.create({
    baseURL: "//localhost:3000/api/",
    timeout: 3000,
    withCredentials: true
});

var auth = axios.create({
    baseURL: "//localhost:3000/auth/",
    timeout: 3000,
    withCredentials: true
});

vue.use(vuex)

var store = new vuex.Store({
    state: {
        user: {},
        board: {},
        list: {},
        task: {},
        comment: {}

    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        //come back to this make real logout options
        // logout(state) {
        //     state.user = {}
        // }

    },
    actions: {
        //Login and Register actions ===================================================================
        login({ commit, dispatch }, payload) {
            auth.post('login', payload)
                .then(user => {
                    commit('setUser', user.data)
                    router.push({ name: 'Home' })
                    console.log(user.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        createUser({ commit, dispatch }, payload) {
            auth.post('createUser', payload)
                .then(user => {
                    commit('setUser', user.data)
                    router.push({ name: 'Home' })
                    console.log(user.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        logout({ commit, dispatch }, payload) {
            auth.delete('logout', payload)
                .then(res => {
                    commit('logout', user.data)
                    router.push({ name: 'Login' })
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        authenticate({ commit, dispatch }) {
            auth.get('authenticate')
                .then(res => {
                    console.log("You are signed in", res.data)
                    commit('setUser', res.data)
                })
                .catch(err => {
                    console.error(err);
                })
        },

    }
})

export default store