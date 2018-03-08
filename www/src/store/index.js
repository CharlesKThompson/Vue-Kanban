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
        boards: {},
        activeBoard: {},
        lists: {},
        tasks: {},
        comments: {}

    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        // TO ADD ONE NEW BOARD
        addBoard(state, payload) {
            state.boards.unshift(payload)
        },
        //TO SET ALL BOARDS FOR USER
        getBoards(state, payload) {
            state.boards = payload
        },
        setActiveBoard(state, board) {
            state.activeBoard = board
        },
    },
    actions: {
        //Login and Register actions ===================================================================
        addBoard({ commit, dispatch }, payload) {
            api.post("boards/", payload)
                .then(results => {
                    dispatch("getBoards", results.data)
                })
        },
        getBoards({ commit, dispatch }, payload) {
            api.get("boards/")
                .then(result => {
                    console.log(result)
                    commit("getBoards", result.data)
                })
                .catch(err => { console.log(err) })
        },
        setActiveBoard({ commit, dispatch }, payload) {
            debugger
            api.get("boards/" + payload._id)
                .then(result => {
                    commit('setActiveBoard', { id: payload, data: result.data })
                    router.push({ name: 'Board' })
                    console.log(result)
                    commit("getBoard", result.data)
                })
                .catch(err => { console.log(err) })
        },
        removeBoard({ commit, dispatch }, payload) {
            api.delete("boards/" + payload._id)
                .then(result => {
                    dispatch("getBoards")
                })
        },
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
            auth.delete('logout')
                .then(res => {
                    commit('setUser', {})
                    // router.push({ name: 'Login' })
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